"use server";

import { cookies } from "next/headers";

import { database } from "@/utils/database";
import { sha256encrypt } from "@/utils/encryption/sha256";

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
