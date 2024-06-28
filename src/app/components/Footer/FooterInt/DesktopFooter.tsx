import styled from '@emotion/styled';

import { SnbButton } from '../SnbButton';

import './tripleFooter.css';

const FooterInt = ({ className }: React.ComponentPropsWithoutRef<'footer'>) => {
  const handleClickBizInfoPopup = () => {
    window.open(
      'https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8248102515&apv_perm_no=',
      'licenseeInfo',
      'status=yes, resizable=no, scrollbars=no, width=720, height=700'
    );
  };
  return (
    <FooterContainer className={`tourEnterFooter ${className ?? ''}`} id="intFooter">
      <div className="footCorp">
        <ul className="corpList">
          <li>
            <a
              href="https://corp.interpark.com/"
              target="_blank"
              title="새 창으로 열림"
              rel="noreferrer"
            >
              회사소개
            </a>
          </li>
          <li>
            <a
              href="https://m.interpark.com/terms.html#agree"
              target="_blank"
              title="새 창으로 열림"
              rel="noreferrer"
            >
              이용약관
            </a>
          </li>
          <li>
            <a
              href="https://m.interpark.com/terms.html#protect_privacy"
              className="bold"
              target="_blank"
              title="새 창으로 열림"
              rel="noreferrer"
            >
              개인정보처리방침
            </a>
          </li>
          <li>
            <a
              href="https://m.interpark.com/terms.html#location_terms"
              target="_blank"
              title="새 창으로 열림"
              rel="noreferrer"
            >
              위치기반서비스 이용약관
            </a>
          </li>
          <li>
            <a
              href="https://tour.interpark.com/company/companyOutsidecovenant.aspx"
              target="_blank"
              title="새 창으로 열림"
              rel="noreferrer"
            >
              여행약관
            </a>
          </li>
          <li>
            <a
              href="https://tour.interpark.com/customer/noticeview.aspx?seq=10638"
              target="_blank"
              title="새 창으로 열림"
              rel="noreferrer"
            >
              여행자보험 가입내역
            </a>
          </li>
          <li>
            <a
              href="https://ticket.interpark.com/TiKi/Info/ENTInfo.asp?info=c_info_20"
              target="_blank"
              title="새 창으로 열림"
              rel="noreferrer"
            >
              티켓판매안내
            </a>
          </li>
          <li>
            <a
              href="https://travel.interpark.com/home/customer/board/notice/common"
              target="_blank"
              title="새 창으로 열림"
              rel="noreferrer"
            >
              공지사항
            </a>
          </li>
          <li className="listItemDepth">
            <SnbButton type="button" className="sub">
              고객센터
            </SnbButton>
            <ul className="depth">
              <li>
                <a
                  href="https://tour.interpark.com/customer/"
                  target="_blank"
                  title="새 창으로 열림"
                  rel="noreferrer"
                >
                  투어 고객센터
                </a>
              </li>
              <li>
                <a
                  href="https://ticket.interpark.com/HelpDesk/HelpDeskMain.asp?&amp;tid1=main_gnb&amp;tid2=right_top&amp;tid3=help&amp;tid4=help"
                  target="_blank"
                  title="새 창으로 열림"
                  rel="noreferrer"
                >
                  티켓 고객센터
                </a>
              </li>
            </ul>
          </li>
          <li className="listItemDepth">
            <SnbButton type="button" className="sub">
              Language
            </SnbButton>
            <ul className="depth">
              <li>
                <a
                  href="https://www.interpark.com"
                  target="_blank"
                  title="새 창으로 열림"
                  rel="noreferrer"
                >
                  Korean
                </a>
              </li>
              <li>
                <a
                  href="https://www.globalinterpark.com/main/main?lang=en&amp;smid1=header&amp;smid2=logout&amp;smid3=language"
                  target="_blank"
                  title="새 창으로 열림"
                  rel="noreferrer"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  href="https://www.globalinterpark.com/main/main?lang=ja&amp;smid1=header&amp;smid2=logout&amp;smid3=language"
                  target="_blank"
                  title="새 창으로 열림"
                  rel="noreferrer"
                >
                  Japanese
                </a>
              </li>
              <li>
                <a
                  href="https://www.globalinterpark.com/main/main?lang=zh&amp;smid1=header&amp;smid2=logout&amp;smid3=language"
                  target="_blank"
                  title="새 창으로 열림"
                  rel="noreferrer"
                >
                  Chinese
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footInfo">
        <div className="infoCol">
          <h2 className="infoTitle">(주)인터파크트리플</h2>
          <div className="infoContent">
            <p>주소 서울시 강남구 삼성로 512 삼성동빌딩 10층</p>
            <p>
              사업자등록번호 824-81-02515{' '}
              <button
                type="button"
                className="linkText"
                style={{ fontSize: '12px' }}
                onClick={handleClickBizInfoPopup}
              >
                사업자정보확인
              </button>
            </p>
            <p>통신판매업신고 2022-서울강남-02179</p>
            <p>관광사업증 등록번호 : 제2014-42호</p>
            <p>호스팅서비스제공자 (주)인터파크트리플｜대표이사 최휘영</p>
          </div>
        </div>
        <div className="infoCol">
          <h2 className="infoTitle">고객센터</h2>
          <div className="infoContent">
            <p>
              <span>
                투어 <a href="tel:1588-3443">1588-3443</a>
              </span>
              <span>
                티켓 <a href="tel:1544-1555">1544-1555</a>
              </span>
            </p>
            <p>
              <span>
                팩스 <a href="tel:02-830-7807">02-830-7807</a>
              </span>
              <span>
                이메일
                <a href="mailto:helpdesk@interparktriple.com">helpdesk@interparktriple.com</a>
              </span>
            </p>
            <p>
              <span>
                해외항공 <a href="tel:02-3479-4399">02-3479-4399</a>
              </span>
              <span>
                국내항공 <a href="tel:02-3479-4340">02-3479-4340</a>
              </span>
            </p>
            <p>
              <span>
                <a
                  href="https://talk-tour.interpark.com/talk"
                  target="_blank"
                  className="linkText"
                  title="새 창으로 열림"
                  rel="noreferrer"
                >
                  투어 1:1문의
                </a>
              </span>
              <span>
                <a
                  href="https://ticket.interpark.com/HelpDesk/SosWrite.asp"
                  className="linkText"
                  target="_blank"
                  title="새 창으로 열림"
                  rel="noreferrer"
                >
                  티켓 1:1문의
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="infoCol">
          <h2 className="infoTitle">전자금융거래 분쟁처리 담당정보</h2>
          <div className="infoContent">
            <p>
              <span>
                투어 <a href="tel:1588-3443">1588-3443</a>
              </span>
              <span>
                티켓 <a href="tel:1544-1555">1544-1555</a>
              </span>
            </p>
            <p>
              <span>
                팩스 <a href="tel:02-830-8295">02-830-8295</a>
              </span>
              <span>
                이메일
                <a href="mailto:intersolution@interparktriple.com">
                  intersolution@interparktriple.com
                </a>
              </span>
            </p>
            <p>
              개인정보보호책임자
              <a href="mailto:cpo@interparktriple.com">cpo@interparktriple.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footNotice">
        <p>
          (주)인터파크트리플은 항공사가 제공하는 개별 항공권 및 여행사가 제공하는 일부 여행상품에
          대하여 통신판매중개자의 지위를 가지며, 해당상품, 상품정보, 거래에 관한 의무와 책임은
          판매자에게 있습니다.
        </p>
        <p>
          항공권 또는 항공권이 포함된 경우, 표시되는 상품요금은 예상 유류할증료와 제세공과금이
          포함된 가격이며, 발권일/환율 등에 따라 변동될 수 있습니다.
        </p>
        <p>
          (주)인터파크트리플은 인터파크티켓, 인터파크투어의 통신판매중개자로서 통신판매의 당사자가
          아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 (주)인터파크트리플은 일체 책임을
          지지 않습니다.
        </p>
        <p>Copyright ⓒ InterparkTriple Corp. All Rights Reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default FooterInt;

const FooterContainer = styled.footer`
  .listItemDepth:hover {
    > button + .depth {
      display: block;
    }
  }
`;
