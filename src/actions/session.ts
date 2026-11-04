"use server";

import { cookies } from "next/headers";
import { ValidationError } from "yup";
import type { InferType } from "yup";

import { database } from "@/utils/database";
import { argon2verify } from "@/utils/encryption/argon2";
import { sha256encrypt } from "@/utils/encryption/sha256";
import { codes } from "@/utils/response";
import type { ResponseBody } from "@/utils/response";
import { createNewSession } from "@/utils/serverSideActions";
import { UserFlags } from "@/utils/types";
import type { User } from "@/utils/types";
import { userLoginSchema } from "@/utils/validation";

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

export async function createSession(
  data: InferType<typeof userLoginSchema>,
): Promise<ResponseBody<User | string[] | null>> {
  if (process.env.LOGIN_ALLOWED != "true") {
    return {
      code: codes.validError,
      msg: "로그인 기능이 비활성화 되었습니다.",
    };
  }

  let validated;
  try {
    validated = await userLoginSchema.validate(data);
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

  const fetchedUsers = await database
    .user()
    .select()
    .where("email", validated.email);
  if (!fetchedUsers.length)
    return {
      code: codes.notFound,
      msg: "존재하지 않는 이메일입니다.",
    };

  const userData = fetchedUsers[0];
  const matched = await argon2verify(userData.password, validated.password);
  if (!matched)
    return {
      code: codes.authError,
      msg: "비밀번호가 일치하지 않습니다.",
    };

  if (userData.flags & UserFlags.EMAIL_UNVERIFIED)
    return {
      code: codes.emailUnverified,
      msg: "이메일이 인증되지 않았습니다.",
    };

  if (userData.flags & UserFlags.EMAIL_VERIFICATION_FAILED)
    return {
      code: codes.emailFailed,
      msg: "이메일 인증에 실패했습니다. 가입시 입력한 이메일로 관리자에게 문의해주세요.",
    };

  await createNewSession(userData.id);

  const user: User = {
    id: userData.id,
    email: userData.email,
    username: userData.username,
    nickname: userData.nickname,
    createdAt: userData.created_at,
    flags: userData.flags,
  };

  return {
    code: codes.ok,
    data: user,
  };
}
