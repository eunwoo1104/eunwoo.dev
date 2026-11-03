"use server";

import { randomUUID } from "crypto";

import { headers } from "next/headers";
import type { InferType } from "yup";
import { ValidationError } from "yup";

import { createNewSession } from "@/actions/session";
import { database } from "@/utils/database";
import { argon2encrypt, argon2verify } from "@/utils/encryption/argon2";
import { codes } from "@/utils/response";
import type { ResponseBody } from "@/utils/response";
import { transporter } from "@/utils/smtp";
import { UserFlags } from "@/utils/types";
import type { User } from "@/utils/types";
import { userLoginSchema, userRegistrationSchema } from "@/utils/validation";

export async function registerUser(
  data: InferType<typeof userRegistrationSchema>,
): Promise<ResponseBody<string[] | null>> {
  if (process.env.LOGIN_ALLOWED != "true") {
    return {
      code: codes.validError,
      msg: "로그인 기능이 비활성화 되었습니다.",
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
    const userId = res[0].id;

    const mailSent = await sendVerifyEmail(userId, validated.email);
    if (mailSent.code !== codes.ok) {
      await database.user().delete().where("id", userId);
      return { code: codes.unknown, msg: "알 수 없는 오류가 발생했습니다." };
    }

    return { code: codes.ok };
  } catch {
    return { code: codes.unknown, msg: "알 수 없는 오류가 발생했습니다." };
  }
}

export async function loginUser(
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

export async function sendVerifyEmail(
  userId: number,
  target: string,
): Promise<ResponseBody<null>> {
  const uuid = randomUUID();

  await database.emailVerify().insert({
    user: userId,
    token: uuid,
  });

  try {
    const res = await transporter.sendMail({
      from: process.env.EMAIL_ADDRESSS ?? process.env.GMAIL_USER,
      to: target,
      subject: "eunwoo.dev 이메일 인증",
      text: `아래 링크를 통해 이메일 인증을 진행해주세요.\nhttps://${process.env.SERVICE_URL}/user/email?uuid=${uuid}`,
    });

    console.debug(`Email to ${target} with accepted: ${res.accepted}`);

    return { code: codes.ok };
  } catch (err) {
    console.error(err);

    await database.emailVerify().delete().where("token", uuid);

    return { code: codes.unknown, msg: "이메일 전송에 실패했습니다." };
  }
}

export async function verifyEmail(uuid: string): Promise<ResponseBody<null>> {
  const res = await database.emailVerify().select("user").where("token", uuid);
  if (res.length === 0)
    return { code: codes.validError, msg: "유효하지 않은 인증코드입니다." };

  let flags = 0;
  const userFlagData = await database
    .user()
    .select("flags")
    .where("id", res[0].user);
  if (userFlagData.length === 1) flags = userFlagData[0].flags;
  await database
    .user()
    .update({ flags: flags & ~UserFlags.EMAIL_UNVERIFIED })
    .where("id", res[0].user);
  await database.emailVerify().delete().where("token", uuid);

  return { code: codes.ok };
}
