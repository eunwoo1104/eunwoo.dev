import { ExternalLink } from "@/components/ExternalLink";
import { icons } from "@/utils/icons";

export default function Privacy() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">개인정보처리방침</h1>
      <h2 className="text-xl font-semibold mt-2">개인정보 처리 목적</h2>
      <p>당사는 다음의 목적을 위하여 사용자의 정보를 처리합니다.</p>
      <ol className="list-decimal my-1">
        <li>
          홈페이지 이용 기록, 로그인 IP 및 기기 정보, 사용자 계정 정보 — 사용자
          식별 및 맞춤 서비스 제공.
        </li>
      </ol>
      <p>
        개인정보 수집 목적이 변경되는 경우, 사용자에게 변경 사항을 통지합니다.
      </p>
      <h2 className="text-xl font-semibold mt-2">개인정보 보유 및 사용기간</h2>
      <p>
        당사는 사용자로부터 동의 받은 사용기간 내에서 개인정보를 보유 및 사용할
        수 있습니다.
      </p>
      <p>
        명시된 사용기간이 초과되었지만 관련 법령에 따라 개인정보를 계속 보존해야
        하는 경우에는, 해당 개인정보를 별도의 데이터베이스로 옮겨서 보존합니다.
      </p>
      <p>자세한 개인정보 이용기간은 다음과 같습니다.</p>
      <ol className="list-decimal my-1">
        <li>서비스 제공 관련 개인정보 — 서비스 탈퇴까지.</li>
        <li>민원 관련 개인정보 — 민원이 처리된 후 최대 30일까지.</li>
      </ol>
      <h2 className="text-xl font-semibold mt-2">사용자의 권리</h2>
      <p>
        사용자는 언제든지 서면, 전자우편 등을 통해 권리 행사를 할 수 있습니다.
      </p>
      <p>
        법정대리인을 포함한 대리인을 통해 권리 행사를 하려면,{" "}
        <ExternalLink
          url="https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EB%B2%95%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C/(2020-7,20200811)"
          withGap={false}
          linkType="paragraph"
        >
          “개인정보 처리 방법에 관한 고시” 별지 제11호
        </ExternalLink>{" "}
        서식에 따른 위임장을 제출해야 합니다.
      </p>
      <ol className="list-decimal my-1">
        <li>
          사용자는 개인정보 열람, 정정 및 삭제 등의 권리를 행사할 수 있습니다.
          (다만, 관련 법령에서 수집 대상으로 명시되어 있는 개인정보는 삭제할 수
          없습니다.)
        </li>
        <li>
          개인정보 열람 및 처리 중단 요구는{" "}
          <ExternalLink
            url="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EB%B2%95"
            withGap={false}
            linkType="paragraph"
          >
            “개인정보 보호법”
          </ExternalLink>{" "}
          <ExternalLink
            url="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EB%B2%95/(20200805,16930,20200204)/%EC%A0%9C35%EC%A1%B0"
            withGap={false}
            linkType="paragraph"
          >
            제35조제4항
          </ExternalLink>{" "}
          및{" "}
          <ExternalLink
            url="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EB%B2%95/(20200805,16930,20200204)/%EC%A0%9C37%EC%A1%B0"
            withGap={false}
            linkType="paragraph"
          >
            제37조제2항
          </ExternalLink>
          에 따라 사용자의 일부 권리가 제한될 수 있습니다.
        </li>
      </ol>
      <h2 className="text-xl font-semibold mt-2">개인정보의 안전성</h2>
      <p>
        당사는 개인정보를 안전하게 보관하기 위해 다음과 같은 조치를 취합니다.
      </p>
      <ol className="list-decimal my-1">
        <li>
          해킹 또는 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 차단하기
          위해, 개인정보를 저장하는 시스템에 강력한 보안 체계를 갖추고
          주기적으로 점검합니다.
        </li>
        <li>
          사용자의 개인정보가 포함된 서류 또는 보조 저장 매체를 제한된 관리자가
          접근할 수 있는 안전한 장소에 보관합니다.
        </li>
      </ol>
      <h2 className="text-xl font-semibold mt-2">개인정보 보호책임자</h2>
      <p>
        당사는 개인정보 처리에 관련한 업무를 위해 다음과 같은 개인정보 보호
        책임자를 임명합니다.
      </p>
      <h4 className="font-semibold mt-2">[ 개인정보 보호 책임자 ]</h4>
      <p>성명: 최은우</p>
      <p>직책: 개발자</p>
      <p>
        이메일:{" "}
        <ExternalLink
          url="mailto:choi@eunwoo.dev"
          linkType="paragraph"
          withGap={false}
          icon={icons.email}
        >
          choi@eunwoo.dev
        </ExternalLink>
      </p>
      <h2 className="text-xl font-semibold mt-2">권익침해에 대한 구제방법</h2>
      <p>
        사용자는 권익침해로부터 구제 받기 위해 다음과 같은 기관에 상담을 신청할
        수 있습니다.
      </p>
      <ol className="list-decimal my-1">
        <li>
          개인정보침해 신고센터 —{" "}
          <ExternalLink
            url="https://privacy.kisa.or.kr/main.do"
            linkType="paragraph"
            withGap={false}
          >
            privacy.kisa.or.kr
          </ExternalLink>
        </li>
        <li>
          개인정보 분쟁조정위원회 —{" "}
          <ExternalLink
            url="https://kopico.go.kr/main/main.do"
            linkType="paragraph"
            withGap={false}
          >
            kopico.go.kr
          </ExternalLink>
        </li>
      </ol>
      <h2 className="text-xl font-semibold mt-2">
        개인정보 처리방침 변경 시 고지 의무
      </h2>
      <p>
        개인정보 처리방침의 변경이 있는 경우 시행 7일 전 사전에 이용자에게
        고지합니다.
      </p>
      <h2 className="text-xl font-semibold mt-2">수집한 개인정보의 위탁</h2>
      <table className="border my-1">
        <thead className="level-3-bg border-b">
          <tr>
            <th scope="col">위탁업체</th>
            <th scope="col">위탁 개인정보</th>
            <th scope="col">업무 위탁 목적</th>
          </tr>
        </thead>
        <tbody className="level-2-bg">
          <tr>
            <td>Cloudflare</td>
            <td>인터넷 프로토콜(IP), 브라우저/기기 정보, 접속한 페이지 등</td>
            <td>DDoS 방어 등 서비스 보호를 위한 웹 방화벽</td>
          </tr>
          <tr>
            <td>Datadog</td>
            <td>요청 로그 등</td>
            <td>서비스 및 서버 자원의 사용량 등을 모니터링, 디버깅</td>
          </tr>
          <tr>
            <td>Google GMail</td>
            <td>이메일 정보</td>
            <td>회원가입 간 이메일 인증</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-semibold mt-2">개인정보 처리방침의 변경</h2>
      <p>본 개인정보 처리방침은 2026년 10월 19일부터 효력을 가집니다.</p>
      <div className="h-2" />
    </div>
  );
}
