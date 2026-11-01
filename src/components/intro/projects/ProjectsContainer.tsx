import { Projects } from "@/components/intro/projects/Projects";

import { IntroContainer } from "../IntroContainer";

export function ProjectsContainer() {
  return (
    <IntroContainer
      title="Projects"
      subtitle="아래와 같은 프로젝트들을 진행했습니다."
    >
      <Projects />
    </IntroContainer>
  );
}
