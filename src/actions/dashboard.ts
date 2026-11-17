"use server";

import { ValidationError } from "yup";
import type { InferType } from "yup";

import { getCurrentUser } from "@/actions/user";
import { database } from "@/utils/database";
import { codes } from "@/utils/response";
import type { ResponseBody } from "@/utils/response";
import { UserFlags } from "@/utils/types";
import { introLinkUpdateSchema } from "@/utils/validation";

export async function insertLink(
  data: InferType<typeof introLinkUpdateSchema>,
): Promise<ResponseBody<string[] | null>> {
  const user = await getCurrentUser();
  if (!user.data || !(user.data.flags & UserFlags.OWNER))
    return { code: codes.authError, msg: "소유자만 사용할 수 있습니다." };

  let validated;
  try {
    validated = await introLinkUpdateSchema.validate(data);
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

  try {
    await database.introLink().insert({
      name: validated.name,
      url: validated.url,
      icon: validated.icon,
      external: true,
    });

    return { code: codes.ok };
  } catch {
    return { code: codes.unknown, msg: "알 수 없는 오류가 발생했습니다." };
  }
}
