import { LinksEditContainer } from "@/components/dashboard/intro/LinksEditContainer";

export default async function Dashboard() {
  return (
    <div>
      <h2>인트로 설정</h2>
      <h3 className="py-2">링크 목록</h3>
      <LinksEditContainer />
    </div>
  );
}
