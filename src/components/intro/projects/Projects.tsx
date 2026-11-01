import { connection } from "next/server";

import { icons } from "@/utils/icons";

import { ProjectBox } from "./ProjectBox";

export async function Projects() {
  await connection();

  return (
    <div className="flex flex-col space-y-3 mt-2">
      <ProjectBox
        name="한국 디스코드 리스트"
        description="국내 디스코드의 모든 것을 한 곳에서."
        links={[
          { url: "https://koreanbots.dev/", text: "홈페이지" },
          {
            url: "https://github.com/koreanbots/core",
            text: "깃허브",
            icon: icons.github,
          },
        ]}
      />
      <ProjectBox
        name="dico-api"
        description="Yet another Discord API wrapper for Python."
        links={[
          {
            url: "https://github.com/dico-api/dico",
            text: "깃허브",
            icon: icons.github,
          },
        ]}
      />
      <ProjectBox
        name="discord-py-slash-command"
        description="A simple discord slash command handler for discord.py"
        links={[
          {
            url: "https://github.com/interactions-py/interactions.py/tree/1.2.2",
            text: "깃허브(V1)",
            icon: icons.github,
          },
        ]}
      />
      <ProjectBox
        name="Laythe"
        description="대시보드를 갖춘 디스코드 관리봇."
        links={[
          {
            url: "https://github.com/codenu/laythe-v2",
            text: "깃허브",
            icon: icons.github,
          },
        ]}
      />
      <ProjectBox
        name="eTeBot"
        description="사용자의 편의성을 우선으로 생각하는 봇을 만듭니다."
        links={[
          {
            url: "https://koreanbots.dev/bots/716480850337988660",
            text: "초대링크",
          },
          {
            url: "https://doc.etebot.io/",
            text: "문서",
          },
        ]}
      />
      <ProjectBox
        name="SamNet"
        description="삼육대학교 객체지향프로그래밍2 SNS 프로젝트"
        links={[
          {
            url: "https://samnet.eunwoo.dev/",
            text: "데모",
          },
          {
            url: "https://github.com/eunwoo1104/samnet",
            text: "깃허브",
            icon: icons.github,
          },
        ]}
      />
      <ProjectBox
        name="UpClot"
        description="제6회 전국 청년아이디어톤대회에서 우수상 수상작"
      />
      <ProjectBox
        name="CodeNU VM"
        description="DELL PowerEdge R630으로 구축한 가상머신 서버"
      />
    </div>
  );
}
