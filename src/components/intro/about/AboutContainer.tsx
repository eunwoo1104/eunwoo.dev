import { IntroContainer } from "../IntroContainer";
import { Careers } from "./Careers";

export function AboutContainer() {
  return (
    <IntroContainer
      title="About me"
      subtitle="현재 건국대학교에서 컴퓨터공학을 전공하고 있습니다."
    >
      <Careers />
    </IntroContainer>
  );
}
