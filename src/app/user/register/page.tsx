"use client";

import { registerUser } from "@/actions/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { InferType } from "yup";

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
      router.push("/");
    } else {
      setErrorMsg(response.msg as string);
      setSubmitDisabled(false);
    }
  };

  return (
    <div className="w-full md:px-20 lg:px-44 xl:px-52 2xl:px-64">
      <h1 className="text-left font-bold text-3xl pt-8 pb-1">환영해요!</h1>
      <p className="font-light text-neutral-700 dark:text-neutral-400 pb-4">
        여기서 eunwoo.dev 웹페이지에 회원가입할 수 있어요.
        <br />
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
        {/* TODO: add ToS and Privacy Policy confirm */}
        {errorMsg && (
          <MessageBox
            className="mt-5 clickable"
            type="error"
            title="회원가입 중 오류가 발생했습니다."
            onClick={() => setErrorMsg(null)}
          >
            <p>{errorMsg}</p>
          </MessageBox>
        )}
        <input
          className="clickable bg-neutral-200 dark:bg-neutral-800 rounded-lg w-full py-3 mt-5"
          type="submit"
          value="Register"
          disabled={submitDisabled}
        />
      </form>
    </div>
  );
}
