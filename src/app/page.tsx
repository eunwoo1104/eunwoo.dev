import { About } from "@/components/intro/about/About";
import { HelloWithNextScroll } from "@/components/intro/hello/HelloWithNextScroll";
import { LinksContainer } from "@/components/intro/links/LinksContainer";
import { Skills } from "@/components/intro/skills/Skills";

export default function Home() {
  return (
    <div>
      <HelloWithNextScroll>
        <About />
      </HelloWithNextScroll>
      <div className="h-80" />
      <div className="">
        <h2 className="text-3xl">Skills</h2>
        <h3 className="text-lg font-light">
          풀스택 개발부터 배포 및 서버 구축까지 모두 경험해봤습니다.
        </h3>
        <Skills />
      </div>
      <div>
        <h2 className="text-3xl">Projects</h2>
        <p>insert project box here</p>
      </div>
      <LinksContainer />
    </div>
  );
}
