"use client";

import { ExternalLink } from "@/components/ExternalLink";
import { MenuBox } from "@/components/layout/header/MenuBox";
import { icons } from "@/utils/icons";

export function LinksMenu() {
  return (
    <MenuBox>
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
