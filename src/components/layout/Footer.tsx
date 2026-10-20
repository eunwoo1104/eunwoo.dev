import Link from "next/link";

import { ExternalLink } from "@/components/ExternalLink";
import { icons } from "@/utils/icons";

export function Footer() {
  return (
    <footer className="flex flex-row content-px h-28 level-2-bg items-center">
      <div className="flex flex-col justify-center">
        <Link
          href="/"
          className="font-semibold clickable w-fit rounded-md text-lg"
        >
          eunwoo.dev
        </Link>
        <p className="text-sm font-extralight">
          © 2026 Eunwoo Choi, All rights reserved.
        </p>
        <div className="h-1.5" />
        <div className="flex flex-row justify-start items-center gap-x-3">
          <ExternalLink
            url="mailto:choi@eunwoo.dev"
            className="clickable items-center text-lg"
            icon={icons.email}
            withGap={false}
          />
          <ExternalLink
            url="https://github.com/eunwoo1104"
            className="clickable items-center text-lg"
            icon={icons.github}
            withGap={false}
          />
          <ExternalLink
            url="https://www.linkedin.com/in/eunwoo-choi-66a2b4326/"
            className="clickable items-center text-lg"
            icon={icons.linkedin}
            withGap={false}
          />
          <ExternalLink
            url="https://instagram.com/im_not_cha"
            className="clickable items-center text-lg"
            icon={icons.insta}
            withGap={false}
          />
          {/* TODO: move these links to database */}
        </div>
      </div>
      <div className="flex-1" />
      <div className="flex flex-col justify-center">
        <p className="font-bold">문서</p>
        <Link
          href="/docs/privacy"
          className="flex flex-row font-light clickable"
        >
          <span className="relative top-[3px] mr-1">{icons.privacy}</span>{" "}
          개인정보처리방침
        </Link>
        <Link
          href="/docs/open-source"
          className="flex flex-row font-light clickable"
        >
          <span className="relative top-[3px] mr-1">{icons.code}</span> 오픈소스
          정보
        </Link>
      </div>
    </footer>
  );
}
