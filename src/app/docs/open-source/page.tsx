import { MessageBox } from "@/components/MessageBox";
import { icons } from "@/utils/icons";

export default function OpenSource() {
  return (
    <div>
      <h1 className="text-3xl font-bold">오픈소스 정보</h1>
      <p>
        eunwoo.dev 웹페이지는 여러 멋진 오픈소스 프로젝트 덕분에 만들어졌습니다.
      </p>
      <h2 className="text-xl font-semibold">프로젝트 정보</h2>
      <p>License: MIT</p>
      <div className="flex flex-row items-center space-x-1">
        <p>Powered by </p>
        {icons.nextjs} {icons.react} {icons.tailwind}
      </div>
      <MessageBox type="info" title="준비중">
        해당 페이지는 아직 준비중입니다...
      </MessageBox>
    </div>
  );
}
