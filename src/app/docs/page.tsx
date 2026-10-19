import Link from "next/link";

import { icons } from "@/utils/icons";

export default function Docs() {
  return (
    <div className="text-lg">
      <h1 className="text-3xl font-bold">문서 목록</h1>
      <div className="h-2" />
      <Link href="/docs/privacy" className="clickable flex flex-row">
        <span className="relative top-0.5 mr-1">{icons.privacy}</span>{" "}
        개인정보처리방침
      </Link>
      <Link href="/docs/open-source" className="clickable flex flex-row">
        <span className="relative top-0.5 mr-1">{icons.code}</span> 오픈소스
        정보
      </Link>
    </div>
  );
}
