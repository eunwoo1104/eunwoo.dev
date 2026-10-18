"use client";

import Link from "next/link";
import { useContext } from "react";

import { invalidateSession } from "@/actions/session";
import { ExternalLink } from "@/components/ExternalLink";
import { MenuBox } from "@/components/layout/header/MenuBox";
import { SessionContext } from "@/utils/contexts";
import { icons } from "@/utils/icons";

export function SiteMenu() {
  const sessionCtx = useContext(SessionContext);

  const logoutAction = async () => {
    await invalidateSession();
    sessionCtx?.setUser(null);
  };

  return (
    <MenuBox className="flex flex-col">
      {sessionCtx?.user ? (
        <button
          className="clickable level-3-bg rounded-lg py-1 w-fit md:w-32 text-center"
          onClick={logoutAction}
        >
          로그아웃
        </button>
      ) : (
        <Link
          href="/user/login"
          className="clickable level-3-bg rounded-lg py-1 w-fit md:w-32 text-center"
        >
          로그인
        </Link>
      )}
      <div className="my-4 h-[1px] w-full bg-neutral-700" />
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
