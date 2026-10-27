import { icons, iconsFromImage } from "@/utils/icons";

import { CareerBox } from "./CareerBox";

export function About() {
  return (
    <div>
      <h2>About me</h2>
      <h4>현재 건국대학교에서 컴퓨터공학을 전공하고 있습니다.</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <CareerBox
          name="건국대학교 컴퓨터공학부"
          icon={iconsFromImage(20).konkuk}
          position="학사"
          startDate="2025.03"
          endDate="현재"
          links={[
            { url: "https://www.konkuk.ac.kr/", icon: icons.school },
            { url: "https://cse.konkuk.ac.kr/", icon: icons.cse },
          ]}
        />
        <CareerBox
          name="삼육대학교 컴퓨터공학부"
          icon={iconsFromImage(20).sahmyook}
          position="학사"
          startDate="2023.03"
          endDate="2025.02"
          links={[
            { url: "https://www.syu.ac.kr/", icon: icons.school },
            { url: "https://www.syu.ac.kr/cse/", icon: icons.cse },
          ]}
        />
        <CareerBox
          name="GDG On Campus - Konkuk Univ."
          icon={iconsFromImage(20).gdg}
          position="Member"
          startDate="2026.09"
          endDate="현재"
          links={[
            { url: "https://gdgoc-konkuk.com/", icon: icons.home },
            { url: "https://github.com/gdgoc-konkuk", icon: icons.github },
          ]}
        />
        <CareerBox
          name="GDG On Campus - Sahmyook Univ."
          icon={iconsFromImage(20).gdg}
          position="Core Member"
          startDate="2023.09"
          endDate="2025.02"
          links={[
            { url: "https://gdsc-syu-welcome.pages.dev/", icon: icons.home },
          ]}
        />
        <CareerBox
          name="한국 디스코드 리스트"
          icon={
            <div className="bg-koreanlist-blue circle-icon p-[1px]">
              {iconsFromImage(18).koreanlist}
            </div>
          }
          position="팀장"
          startDate="2022.03"
          endDate="현재"
          links={[
            { url: "https://koreanbots.dev/", icon: icons.home },
            { url: "https://github.com/koreanbots", icon: icons.github },
          ]}
        />
      </div>
    </div>
  );
}
