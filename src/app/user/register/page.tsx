"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { InferType } from "yup";

import { registerUser } from "@/actions/user";
import { ExternalLink } from "@/components/ExternalLink";
import { MessageBox } from "@/components/MessageBox";
import { Input } from "@/components/form/Input";
import { sha256encrypt } from "@/utils/encryption/sha256";
import { icons } from "@/utils/icons";
import { codes } from "@/utils/response";
import { clientUserRegistrationSchema } from "@/utils/validation";

export default function Register() {
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
    resolver: yupResolver(clientUserRegistrationSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<
    InferType<typeof clientUserRegistrationSchema>
  > = async (data) => {
    setSubmitDisabled(true);

    const encryptedPassword = await sha256encrypt(data.password);
    const requestBody = {
      email: data.email,
      password: encryptedPassword,
      username: data.username,
    };

    const response = await registerUser(requestBody);
    if (response.code == codes.ok) {
      // TODO: show success message & open login menu
      reset();
      setSubmitDisabled(false);
      router.push("/");
    } else {
      setErrorMsg(response.msg as string);
      setSubmitDisabled(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-left pt-8 pb-1">환영해요!</h1>
      <p className="font-light subtext pb-4">
        여기서 eunwoo.dev 웹페이지에 회원가입할 수 있어요.
        <br />
        도움이 필요한 경우{" "}
        <ExternalLink
          icon={icons.email}
          url="mailto:choi@eunwoo.dev"
          linkType="paragraph"
          className="subtext-2"
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
        <Input
          label="비밀번호 확인"
          name="confirmPassword"
          type="password"
          register={register}
          errors={errors}
          required={true}
          placeholder="password"
          icon={icons.password}
        />
        <Input
          label="유저 이름"
          name="username"
          type="text"
          register={register}
          errors={errors}
          required={true}
          placeholder="@example 형태로 표시"
          icon={icons.user}
        />
        <Input
          label="닉네임"
          name="nickname"
          type="text"
          register={register}
          errors={errors}
          required={false}
          placeholder="닉네임 (선택)"
          icon={icons.nick}
        />
        <p className="flex flex-row items-center subtext mt-4">
          회원가입 시{" "}
          <Link
            href="/docs/privacy"
            className="flex flex-row subtext-2 clickable underline ml-1"
          >
            <span className="relative top-[3px]">{icons.privacy}</span>
            개인정보처리방침
          </Link>
          에 동의하는 것으로 간주해요.
        </p>
        {errorMsg && (
          <MessageBox
            className="mt-4 clickable"
            type="error"
            title="회원가입 중 오류가 발생했습니다."
            onClick={() => setErrorMsg(null)}
          >
            <p>{errorMsg}</p>
          </MessageBox>
        )}
        <input
          className="clickable bg-neutral-200 dark:bg-neutral-800 rounded-lg w-full py-3 mt-4"
          type="submit"
          value="회원가입"
          disabled={submitDisabled}
        />
      </form>
    </div>
  );
}
