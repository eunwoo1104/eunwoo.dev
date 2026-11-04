"use client";

import Link from "next/link";
import { useState } from "react";

import { verifyEmail } from "@/actions/user";
import { MessageBox } from "@/components/MessageBox";
import { codes } from "@/utils/response";

export default function EmailVerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ uuid: string }>;
}) {
  const [respCode, setRespCode] = useState<string | null>(null);

  const runVerify = async () => {
    const { uuid } = await searchParams;
    const res = await verifyEmail(uuid);
    setRespCode(res.code);
  };

  return (
    <div className="w-full">
      <h1 className="pt-8 pb-4">이메일 인증</h1>
      <div className="flex flex-col space-y-2 w-full">
        <button
          className="clickable level-2-bg rounded-lg py-2 w-full px-4 text-center text-lg"
          onClick={runVerify}
          disabled={respCode !== null}
        >
          여기를 눌러 인증해주세요.
        </button>
        <Link
          href="/user/login"
          className="clickable level-2-bg rounded-lg py-2 w-full px-4 text-center text-lg"
        >
          로그인
        </Link>
      </div>
      {respCode === codes.ok ? (
        <MessageBox type="success" title="인증 성공" className="mt-4 mb-4">
          <p>위 버튼을 눌러 바로 로그인하세요.</p>
        </MessageBox>
      ) : (
        respCode !== null && (
          <MessageBox type="error" title="인증 실패" className="mt-4">
            <p>올바르지 않거나 만료된 코드입니다.</p>
          </MessageBox>
        )
      )}
    </div>
  );
}
