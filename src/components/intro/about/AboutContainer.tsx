import { Suspense } from "react";

import { Careers } from "./Careers";

export function AboutContainer() {
  return (
    <div>
      <h2 className="text-3xl">About me</h2>
      <h4>현재 건국대학교에서 컴퓨터공학을 전공하고 있습니다.</h4>
      <div className="h-3" />
      <Suspense>
        <Careers />
      </Suspense>
    </div>
  );
}
