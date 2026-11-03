"use client";

import Link from "next/link";
import { useState } from "react";

import { verifyEmail } from "@/actions/user";
import { codes } from "@/utils/response";

export default function EmailVerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ uuid: string }>;
}) {
  const [msg, setMsg] = useState<null | string>(null);
  const [showLoginBtn, setShowLoginBtn] = useState(false);

  const runVerify = async () => {
    const { uuid } = await searchParams;
    const res = await verifyEmail(uuid);
    setMsg(res.msg ?? "인증 성공! 아래 버튼으로 로그인해주세요.");
    setShowLoginBtn(res.code === codes.ok);
  };

  return (
    <div>
      <h1>이메일 인증</h1>
      <div className="divider my-4" />
      <button
        className="clickable level-2-bg rounded-lg py-1 w-full md:w-fit md: px-2 text-center text-lg"
        onClick={runVerify}
      >
        여기를 눌러 인증해주세요.
      </button>
      {msg && <p>{msg}</p>}
      {showLoginBtn && (
        <Link
          href="/user/login"
          className="clickable level-2-bg rounded-lg py-1 w-full md:w-48 text-center text-lg"
        >
          로그인
        </Link>
      )}
    </div>
  );
}
