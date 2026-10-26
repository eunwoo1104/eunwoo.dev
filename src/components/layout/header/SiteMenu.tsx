"use client";

import Link from "next/link";
import { useContext } from "react";

import { invalidateSession } from "@/actions/session";
import { ExternalLink } from "@/components/ExternalLink";
import { MenuBox } from "@/components/layout/header/MenuBox";
import { SessionContext } from "@/utils/contexts";
import type { SessionContextInterface } from "@/utils/contexts";
import { icons } from "@/utils/icons";

function UserProfile({ session }: { session: SessionContextInterface }) {
  const logoutAction = async () => {
    await invalidateSession();
    session?.setUser(null);
  };

  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="rounded-full level-3-bg flex justify-center items-center w-12 h-12">
          {icons.user}
        </div>
        <div className="ml-2">
          <p>{session.user?.nickname || session.user?.username}</p>
          <p className="subtext">@{session.user?.username}</p>
        </div>
      </div>
      <div className="h-2" />
      <div className="flex flex-col space-y-2">
        <Link
          href="/user/edit"
          className="clickable level-3-bg rounded-lg py-1 w-full md:w-48 text-center"
        >
          프로필 수정
        </Link>
        <button
          className="clickable level-3-bg rounded-lg py-1 w-full md:w-48 text-center"
          onClick={logoutAction}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export function SiteMenu() {
  const sessionCtx = useContext(SessionContext);

  return (
    <MenuBox className="flex flex-col">
      {sessionCtx?.user ? (
        <UserProfile session={sessionCtx} />
      ) : (
        <Link
          href="/user/login"
          className="clickable level-3-bg rounded-lg py-1 w-full md:w-32 text-center"
        >
          로그인
        </Link>
      )}
      <div className="my-4 divider" />
      <div className="flex flex-col justify-center items-start space-y-0.5">
        <Link href="/docs" className="flex flex-row clickable gap-x-[3px]">
          <span className="relative top-[3px]">{icons.docs}</span> 문서
        </Link>
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
