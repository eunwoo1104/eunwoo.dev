"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Input } from "@/components/form/Input";
import { icons } from "@/utils/icons";
import { introLinkUpdateSchema } from "@/utils/validation";

export function LinksEditor({ children }: LinksEditorProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(introLinkUpdateSchema),
  });

  return (
    <div>
      <div className="level-2-bg p-4 rounded-md">{children}</div>
      <h4 className="my-1">링크 추가하기</h4>
      <form
        className="space-y-2"
        onSubmit={handleSubmit(() => alert("submit"))}
        noValidate={true}
      >
        <Input
          label="아이콘"
          name="icon"
          type="text"
          register={register}
          errors={errors}
          required={true}
          placeholder="externalLink"
          defaultValue="externalLink"
          icon={icons.tag}
        />
        {/* TODO: implement autocomplete */}
        <Input
          label="이름"
          name="name"
          type="text"
          register={register}
          errors={errors}
          required={true}
          placeholder="링크 이름"
          icon={icons.tag}
        />
        <Input
          label="링크"
          name="url"
          type="url"
          register={register}
          errors={errors}
          required={true}
          placeholder="https://example.com/"
          icon={icons.externalLink}
        />
        <button
          type="submit"
          className="flex flex-row items-center gap-x-0.5 mt-1 rounded-md level-3-bg clickable px-2 py-1"
        >
          {icons.plus}
          <p className="relative top-[0.5px]">추가하기</p>
        </button>
      </form>
    </div>
  );
}

interface LinksEditorProps {
  children: React.ReactNode;
}
