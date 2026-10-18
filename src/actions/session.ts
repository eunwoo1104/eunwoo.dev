"use server";

import { cookies, headers } from "next/headers";

import { database } from "@/utils/database";
import { sha256encrypt } from "@/utils/encryption/sha256";
import { createJWT } from "@/utils/jwt";
import { getDeviceIdentifier } from "@/utils/request";

export async function createNewSession(userId: number) {
  const accessToken = await createJWT({ id: userId }, "5m");
  const refreshToken = await createJWT({ id: userId }, "7d");

  const cookieStore = await cookies();
  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  const reqHeaders = await headers();
  const devIdent = getDeviceIdentifier(reqHeaders);

  await database.session().insert({
    refresh_token: await sha256encrypt(refreshToken),
    user: userId,
    device_identifier: await sha256encrypt(devIdent),
  });
}

export async function invalidateSession() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken");
  if (refreshToken) {
    const hashed = await sha256encrypt(refreshToken.value);
    await database.session().delete().where("refresh_token", hashed);
  }
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
}
