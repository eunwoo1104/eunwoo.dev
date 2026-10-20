export function About() {
  return (
    <div>
      <h2>About me</h2>
      <h4>현재 건국대학교에서 컴퓨터공학을 전공하고 있습니다.</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="level-2-bg rounded-lg p-4 border-2 border-konkuk-green">
          <p>건국대학교 컴퓨터공학부</p>
          <p className="subtext">학사, 2025.03 ~ 현재</p>
        </div>
        <div className="level-2-bg rounded-lg p-4 border-2 border-sahmyook-blue">
          <p>삼육대학교 컴퓨터공학부</p>
          <p>학사, 2023.03 ~ 2025.02</p>
        </div>
        <div className="level-2-bg rounded-lg p-4">
          <p>GDG On Campus - Konkuk Univ.</p>
          <p>Member, 2026.09 ~ 현재</p>
        </div>
        <div className="level-2-bg rounded-lg p-4">
          <p>GDG On Campus - Sahmyook Univ.</p>
          <p>Core Member, 2023.09 ~ 2025.02</p>
        </div>
        <div className="level-2-bg rounded-lg p-4 border-2 border-koreanlist-blue">
          <p>한국 디스코드 리스트</p>
          <p>팀장, 2022.03 ~ 2025.04</p>
        </div>
      </div>
    </div>
  );
}
