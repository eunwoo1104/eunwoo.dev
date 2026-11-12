"use server";

import { headers } from "next/headers";
import type { InferType } from "yup";
import { ValidationError } from "yup";

import { database } from "@/utils/database";
import { argon2encrypt } from "@/utils/encryption/argon2";
import { sha256encrypt } from "@/utils/encryption/sha256";
import { tryUserRateLimit } from "@/utils/ratelimit/user";
import type { UserRateLimit } from "@/utils/ratelimit/user";
import { getClientIP, getDeviceIdentifier } from "@/utils/request";
import { codes } from "@/utils/response";
import type { ResponseBody } from "@/utils/response";
import { sendVerifyEmail, setUserFlag } from "@/utils/serverSideActions";
import { UserFlags } from "@/utils/types";
import type { User } from "@/utils/types";
import { userRegistrationSchema } from "@/utils/validation";

export async function registerUser(
  data: InferType<typeof userRegistrationSchema>,
): Promise<ResponseBody<string[] | { resetAfter: number } | null>> {
  if (process.env.LOGIN_ALLOWED != "true") {
    return {
      code: codes.validError,
      msg: "로그인 기능이 비활성화 되었습니다.",
    };
  }

  const header = await headers();
  const devIdent = getDeviceIdentifier(header);
  const clientIP = getClientIP(header);
  const rateLimitData: UserRateLimit = {
    type: "register",
    identifier: await sha256encrypt(devIdent + "," + clientIP),
    maxAllowed: 2,
    resetAfter: 24 * 60 * 60, // 24H
  };

  const rateLimitRes = await tryUserRateLimit(rateLimitData);
  if (!rateLimitRes.safe) {
    return {
      code: codes.rateLimited,
      msg: "회원가입을 너무 많이 시도했습니다. 나중에 시도해주세요.",
      data: {
        resetAfter: rateLimitRes.resetAfter,
      },
    };
  }

  let validated;
  try {
    validated = await userRegistrationSchema.validate(data);
  } catch (e) {
    if (e instanceof ValidationError)
      return {
        code: codes.validError,
        msg: "검증에 실패했습니다.",
        data: e.errors,
      };
    else
      return {
        code: codes.unknown,
        msg: "알 수 없는 오류가 발생했습니다.",
      };
  }

  const emailExists = await database
    .user()
    .select("email")
    .where("email", validated.email);
  if (emailExists.length !== 0)
    return {
      code: codes.validError,
      msg: "이미 존재하는 이메일입니다.",
    };

  const encrypted = await argon2encrypt(validated.password);

  try {
    const res = await database
      .user()
      .insert(
        {
          email: validated.email,
          password: encrypted,
          username: validated.username,
          nickname: validated.nickname,
          flags: UserFlags.EMAIL_UNVERIFIED,
        },
        "id",
      )
      .returning("id");
    let userId = res[0].id;

    // it seems that it sometimes can't return created id
    // even though mariadb supports, so temporary work in case of failure
    if (!userId) {
      const getRes = await database
        .user()
        .select("id")
        .where("email", validated.email);
      userId = getRes[0].id;
    }

    try {
      await sendVerifyEmail(userId, validated.email);
    } catch {
      await database
        .user()
        .delete()
        .where("id", userId)
        .catch(() => {});
      return {
        code: codes.unknown,
        msg: "인증 이메일 준비 중 오류가 발생했습니다. 다시 시도해주세요.",
      };
    }

    return { code: codes.ok };
  } catch {
    return { code: codes.unknown, msg: "알 수 없는 오류가 발생했습니다." };
  }
}

export async function getUser(userId: number): Promise<ResponseBody<User>> {
  const fetchedUsers = await database.user().select().where("id", userId);
  if (!fetchedUsers.length)
    return {
      code: codes.notFound,
      msg: "존재하지 않는 사용자입니다.",
    };

  const userData = fetchedUsers[0];
  return {
    code: codes.ok,
    data: {
      id: userData.id,
      email: userData.email,
      username: userData.username,
      nickname: userData.nickname,
      createdAt: userData.created_at,
      flags: userData.flags,
    },
  };
}

export async function getCurrentUser(): Promise<ResponseBody<User>> {
  const reqHeaders = await headers();
  const userId = reqHeaders.get("EunwooDev-Session-User");
  if (!userId) return { code: codes.sessionInvalid, msg: "Session invalid" };

  return getUser(Number(userId));
}

export async function verifyEmail(uuid: string): Promise<ResponseBody<null>> {
  const res = await database.emailVerify().select("user").where("token", uuid);
  if (res.length === 0)
    return { code: codes.validError, msg: "유효하지 않은 인증코드입니다." };

  await setUserFlag(res[0].user, { unsetFlags: [UserFlags.EMAIL_UNVERIFIED] });
  await database.emailVerify().delete().where("token", uuid);

  return { code: codes.ok };
}
