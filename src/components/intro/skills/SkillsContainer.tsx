import { Suspense } from "react";

import { Skills } from "./Skills";

export function SkillsContainer() {
  return (
    <div className="">
      <h2 className="text-3xl">Skills</h2>
      <h3 className="text-lg font-light">
        풀스택 개발부터 배포 및 서버 구축까지 모두 경험해봤습니다.
      </h3>
      <div className="h-3" />
      <Suspense>
        <Skills />
      </Suspense>
    </div>
  );
}
