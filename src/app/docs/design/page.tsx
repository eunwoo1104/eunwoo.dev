import { ExternalLink } from "@/components/ExternalLink";
import { MessageBox } from "@/components/MessageBox";
import { icons } from "@/utils/icons";

export default function Design() {
  return (
    <div>
      <h1>디자인 구성</h1>
      <p className="subtext mt-1">
        해당 웹사이트에서 사용하는 디자인 구성을 정리했습니다.
        <br />
        아직 본 웹사이트는 다크모드에 최적화되어있습니다.
      </p>
      <div className="my-2 divider" />
      <h2 className="mt-5">컬러 팔레트</h2>
      <p className="subtext">
        테마 전환으로 밝은 테마와 어두운 테마의 컬러를 각각 확인해보세요.
      </p>
      <h3 className="mt-5 mb-0.5">배경 컬러</h3>
      <div className="flex flex-row h-32 w-full border border-gray-500 divide-x divide-gray-500">
        <div className="level-1-bg flex-1" />
        <div className="level-2-bg flex-1" />
        <div className="level-3-bg flex-1" />
      </div>
      <h3 className="mt-5 mb-0.5">메시지 박스</h3>
      <div className="flex flex-row w-full space-x-2">
        <MessageBox type="info" title="정보">
          내용
        </MessageBox>
        <MessageBox type="success" title="성공">
          내용
        </MessageBox>
        <MessageBox type="warn" title="경고">
          내용
        </MessageBox>
        <MessageBox type="error" title="오류">
          내용
        </MessageBox>
      </div>
      <h2 className="mt-7">텍스트 및 버튼</h2>
      <p>
        폰트:{" "}
        <ExternalLink
          url="https://github.com/orioncactus/pretendard"
          linkType="paragraph"
          withGap={false}
        >
          Pretendard Variable
        </ExternalLink>
      </p>
      <div className="flex flex-row space-x-2 my-2">
        <button className="clickable circle-icon level-2-bg h-12 w-12 text-2xl">
          {icons.chevronDown}
        </button>
        <button className="clickable level-2-bg rounded-lg py-1 w-full md:w-48 text-center text-lg">
          텍스트 버튼
        </button>
      </div>
      <div className="h-2" />
      <h1>[h1] 큰 제목</h1>
      <h2>[h2] 중간 제목</h2>
      <h3>[h3] 작은 제목</h3>
      <h4>[h4] 완전 작은 제목</h4>
      <div className="my-2">
        <p>본문</p>
        <p className="subtext">
          보조 텍스트 및{" "}
          <span className="subtext-2 underline clickable">
            링크가 있을 경우
          </span>
        </p>
      </div>
    </div>
  );
}
