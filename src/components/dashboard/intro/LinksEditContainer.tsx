import { Suspense } from "react";

import { LinksEditor } from "@/components/dashboard/intro/LinksEditor";
import { Links } from "@/components/intro/links/Links";

export function LinksEditContainer() {
  return (
    <LinksEditor>
      <Suspense fallback={<p>로딩중...</p>}>
        <Links editMode />
      </Suspense>
    </LinksEditor>
  );
}
