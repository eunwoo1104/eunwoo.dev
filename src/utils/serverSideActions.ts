import "server-only";

import { randomUUID } from "crypto";

import { cookies, headers } from "next/headers";

import { database } from "@/utils/database";
import { sha256encrypt } from "@/utils/encryption/sha256";
import { createJWT } from "@/utils/jwt";
import { getDeviceIdentifier } from "@/utils/request";
import { smtpHandler } from "@/utils/smtp";
import { UserFlags } from "@/utils/types";

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

export async function setUserFlag(
  userId: number,
  { setFlags, unsetFlags }: { setFlags?: number[]; unsetFlags?: number[] },
) {
  let flags = 0;
  // TODO: use transaction
  const userFlagData = await database
    .user()
    .select("flags")
    .where("id", userId);
  if (userFlagData.length === 1) flags = userFlagData[0].flags;

  setFlags?.forEach((flag) => {
    flags |= flag;
  });
  unsetFlags?.forEach((flag) => {
    flags &= ~flag;
  });

  await database.user().update({ flags: flags }).where("id", userId);
}

export async function sendVerifyEmail(userId: number, target: string) {
  const uuid = randomUUID();

  await database.emailVerify().insert({
    user: userId,
    token: uuid,
  });

  if (process.env.EMAIL_VERIFICATION_REQUIRED === "true")
    smtpHandler().addMail({
      target: target,
      title: "eunwoo.dev 이메일 인증",
      content: `아래 링크를 통해 이메일 인증을 진행해주세요.\nhttps://${process.env.SERVICE_URL}/user/email?uuid=${uuid}`,
      failAction: () => {
        // unfortunately Gmail smtp returns success even though email is invalid
        void database
          .emailVerify()
          .delete()
          .where("token", uuid)
          .catch(console.error);
        void setUserFlag(userId, {
          setFlags: [UserFlags.EMAIL_VERIFICATION_FAILED],
          unsetFlags: [UserFlags.EMAIL_UNVERIFIED],
        }).catch(console.error);
      },
    });
}
