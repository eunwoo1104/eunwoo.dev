"use client";

import Link from "next/link";

import { ExternalLink } from "@/components/ExternalLink";
import { MenuBox } from "@/components/layout/header/MenuBox";
import { icons } from "@/utils/icons";

export function LinksMenu() {
  return (
    <MenuBox className="flex flex-col">
      <Link
        href="/user/login"
        className="clickable bg-neutral-100 dark:bg-neutral-800 rounded-lg py-1 w-fit md:w-32 text-center"
      >
        로그인
      </Link>
      <div className="my-1.5 h-[1px] w-full bg-neutral-700" />
      <div className="flex flex-col justify-center items-start space-y-0.5">
        <ExternalLink url="https://status.eunwoo.dev/" icon={icons.uptime}>
          업타임
        </ExternalLink>
        <ExternalLink
          url="https://github.com/eunwoo1104/eunwoo.dev"
          icon={icons.github}
        >
          소스코드
        </ExternalLink>
      </div>
    </MenuBox>
  );
}
