import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { createNewSession } from "@/actions/session";
import { database } from "@/utils/database";
import { sha256encrypt } from "@/utils/encryption/sha256";
import { verifyJWT } from "@/utils/jwt";
import { getDeviceIdentifier } from "@/utils/request";

export async function tryRefreshSession(
  headers: Headers,
  refreshToken: string,
): Promise<number | null> {
  if (!refreshToken) {
    return null;
  }

  const refreshVerify = await verifyJWT(refreshToken);
  if (!refreshVerify) {
    return null;
  }

  const hashedRefreshToken = await sha256encrypt(refreshToken);
  const savedSession = await database
    .session()
    .select("user", "device_identifier")
    .where({ refresh_token: hashedRefreshToken });
  const devIdentifier = getDeviceIdentifier(headers);

  if (!savedSession.length) return null;

  await database
    .session()
    .delete()
    .where({ refresh_token: hashedRefreshToken });
  if (savedSession[0].device_identifier != (await sha256encrypt(devIdentifier)))
    return null; // in this case refresh token is stolen

  // recreate session
  await createNewSession(savedSession[0].user);
  return savedSession[0].user;
}

export async function proxy(req: NextRequest) {
  const headers = new Headers(req.headers);
  headers.delete("EunwooDev-Session-User");

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  if (!accessToken) {
    return;
  }

  const sessionRes = await verifyJWT(accessToken.value);
  const sessionUser = sessionRes.success
    ? (sessionRes.payload.id as number)
    : await tryRefreshSession(
        headers,
        cookieStore.get("refreshToken")?.value as string,
      );

  if (sessionUser !== null) {
    headers.set("EunwooDev-Session-User", sessionUser.toString());
    return NextResponse.next({ request: { headers: headers } });
  }
}
