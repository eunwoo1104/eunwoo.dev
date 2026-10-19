"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { InferType } from "yup";

import { loginUser } from "@/actions/user";
import { ExternalLink } from "@/components/ExternalLink";
import { MessageBox } from "@/components/MessageBox";
import { Input } from "@/components/form/Input";
import { SessionContext } from "@/utils/contexts";
import { sha256encrypt } from "@/utils/encryption/sha256";
import { icons } from "@/utils/icons";
import { codes } from "@/utils/response";
import type { User } from "@/utils/types";
import { clientUserLoginSchema } from "@/utils/validation";

export default function Register({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(clientUserLoginSchema),
  });
  const router = useRouter();
  const sessionCtx = useContext(SessionContext);

  const onSubmit: SubmitHandler<
    InferType<typeof clientUserLoginSchema>
  > = async (data) => {
    setSubmitDisabled(true);

    const encryptedPassword = await sha256encrypt(data.password);
    const requestBody = {
      email: data.email,
      password: encryptedPassword,
    };

    const response = await loginUser(requestBody);
    if (response.code == codes.ok) {
      const paramRes = await searchParams;
      // TODO: show success message
      reset();
      setSubmitDisabled(false);
      sessionCtx?.setUser(response.data as User);
      const toRedirect = paramRes.redirect || "";
      router.push(`/${toRedirect}`);
    } else {
      setErrorMsg(response.msg as string);
      setSubmitDisabled(false);
    }
  };

  return (
    <div className="w-full md:px-20 lg:px-44 xl:px-52 2xl:px-64">
      <h1 className="text-left font-bold text-3xl pt-8 pb-1">
        돌아오신 것을 환영해요!
      </h1>
      <p className="font-light text-neutral-700 dark:text-neutral-400 pb-4">
        도움이 필요한 경우{" "}
        <ExternalLink
          icon={icons.email}
          url="mailto:choi@eunwoo.dev"
          linkType="paragraph"
          className="text-neutral-850 dark:text-neutral-300"
          withGap={false}
        >
          관리자
        </ExternalLink>
        에게 문의하세요.
      </p>
      <form
        className="space-y-2"
        onSubmit={handleSubmit(onSubmit)}
        noValidate={true}
      >
        <Input
          label="이메일"
          name="email"
          type="email"
          register={register}
          errors={errors}
          required={true}
          placeholder="user@example.com"
          autoComplete="email"
          icon={icons.email}
        />
        <Input
          label="비밀번호"
          name="password"
          type="password"
          register={register}
          errors={errors}
          required={true}
          placeholder="password"
          autoComplete="new-password"
          icon={icons.password}
        />
        {errorMsg && (
          <MessageBox
            className="clickable"
            type="error"
            title="로그인 중 오류가 발생했습니다."
            onClick={() => setErrorMsg(null)}
          >
            <p>{errorMsg}</p>
          </MessageBox>
        )}
        <input
          className="clickable bg-neutral-200 dark:bg-neutral-800 rounded-lg w-full py-3"
          type="submit"
          value="로그인"
          disabled={submitDisabled}
        />
      </form>
      <div className="h-2" />
      <p className="font-light text-neutral-700 dark:text-neutral-400">
        아직 계정이 없나요?{" "}
        <Link
          href="/user/register"
          className="clickable text-neutral-850 dark:text-neutral-300 underline"
        >
          여기서 회원가입할 수 있어요.
        </Link>
      </p>
    </div>
  );
}
