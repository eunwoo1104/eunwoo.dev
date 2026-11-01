import { AboutContainer } from "@/components/intro/about/AboutContainer";
import { HelloWithNextScroll } from "@/components/intro/hello/HelloWithNextScroll";
import { LinksContainer } from "@/components/intro/links/LinksContainer";
import { ProjectsContainer } from "@/components/intro/projects/ProjectsContainer";
import { SkillsContainer } from "@/components/intro/skills/SkillsContainer";

export default function Home() {
  return (
    <div>
      <HelloWithNextScroll>
        <AboutContainer />
      </HelloWithNextScroll>
      <div className="h-24" />
      <SkillsContainer />
      <div className="h-24" />
      <ProjectsContainer />
      <div className="h-24" />
      <LinksContainer />
      <div className="h-24" />
    </div>
  );
}
