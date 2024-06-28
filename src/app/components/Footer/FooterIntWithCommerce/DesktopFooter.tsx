import './intFooter.css';
import './footerInt.css';

import { useCallback } from 'react';

import styled from '@emotion/styled';

import { SnbButton } from '../SnbButton';

const FooterIntWithCommerce = ({ className }: React.ComponentPropsWithoutRef<'footer'>) => {
  const handleClickBizInfo = useCallback(
    (bizNumber: string) => () => {
      window.open(
        `https://www.ftc.go.kr/bizCommPop.do?wrkr_no=${bizNumber}&amp;apv_perm_no=`,
        'licenseeInfo',
        'status=yes, resizable=no, scrollbars=no, width=720, height=700'
      );
    },
    []
  );

  const handleClickShopContact = () => {
    window.open(
      'https://myshop.interpark.com/quest/create',
      '1:1 문의',
      'status=yes, resizable=no, scrollbars=no, width=417, height=660'
    );
  };

  return (
    <Wrapper id="intFooter" className={className ?? ''}>
      <div className="intFooterLinks">
        <div className="intFooterInner">
          <ul>
            <li className="sub">
              <SnbButton type="button">회사소개</SnbButton>
              <ul className="list depth">
                <li>
                  <a
                    href="https://corp.interpark.com"
                    target="_blank"
                    title="새 창으로 열림"
                    rel="noreferrer"
                  >
                    인터파크트리플
                  </a>
                </li>
                <li>
                  <a
                    href="https://shop.interpark.com/int/communication/CompanyInfo.do?_method=initial&amp;wid1=footer&amp;wid2=company"
                    target="_blank"
                    title="새 창으로 열림"
                    rel="noreferrer"
                  >
                    인터파크커머스
                  </a>
                </li>
              </ul>
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
                target="_blank"
                title="새 창으로 열림"
                className="bold"
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
            <li className="sub">
              <SnbButton type="button">공지사항</SnbButton>
              <ul className="list depth">
                <li>
                  <a
                    href="https://travel.interpark.com/home/customer/board/notice/common"
                    target="_blank"
                    title="새 창으로 열림"
                    rel="noreferrer"
                  >
                    인터파크트리플
                  </a>
                </li>
                <li>
                  <a
                    href="https://shop.interpark.com/communication/NewsListMgt.do?_method=form"
                    target="_blank"
                    title="새 창으로 열림"
                    rel="noreferrer"
                  >
                    인터파크커머스
                  </a>
                </li>
              </ul>
            </li>
            <li className="sub">
              <SnbButton type="button">고객센터</SnbButton>
              <ul className="list depth">
                <li>
                  <a
                    href="https://tour.interpark.com/customer"
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
                <li>
                  <a
                    href="https://shop.interpark.com/ecenter/MainFAQ.do?_method=MainFAQ"
                    target="_blank"
                    title="새 창으로 열림"
                    rel="noreferrer"
                  >
                    쇼핑 고객센터
                  </a>
                </li>
                <li>
                  <a
                    href="https://book.interpark.com/service/HelpDeskMain.do?_method=initial"
                    target="_blank"
                    title="새 창으로 열림"
                    rel="noreferrer"
                  >
                    도서 고객센터
                  </a>
                </li>
              </ul>
            </li>
            <li className="sub">
              <SnbButton type="button">Language</SnbButton>
              <ul className="list depth">
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
      </div>
      <div className="intFooterInner">
        <div className="intFooterInfo">
          <h2>(주)인터파크트리플</h2>
          <div className="intFooterInfoContentWrap">
            <div className="intFooterInfoContent">
              <div>
                <span>서울시 강남구 삼성로 512 삼성동빌딩 10층</span>
                <span>호스팅서비스제공자 (주)인터파크트리플</span>
              </div>
              <div>
                <span>
                  사업자등록번호 824-81-02515{' '}
                  <PopupButton
                    type="button"
                    className="linkText"
                    onClick={handleClickBizInfo('8248102515')}
                  >
                    사업자정보확인
                  </PopupButton>
                </span>
                <span>통신판매업신고 2022-서울강남-02179</span>
              </div>
              <div>
                <span>관광사업증 등록번호 : 제2014-42호</span>
                <span>대표이사 최휘영</span>
              </div>
            </div>
            <div className="intFooterInfoContent">
              <div>
                <h4 className="subTitle">고객센터</h4>
                <span>
                  <a
                    href="https://talk-tour.interpark.com/talk"
                    target="_blank"
                    title="새 창으로 열림"
                    rel="noreferrer"
                  >
                    투어1:1문의
                  </a>
                </span>
                <span>
                  <a
                    href="https://ticket.interpark.com/HelpDesk/SosWrite.asp"
                    target="_blank"
                    title="새 창으로 열림"
                    rel="noreferrer"
                  >
                    티켓1:1문의
                  </a>
                </span>
              </div>
              <div>
                <span>투어 1588-3443</span> <span>티켓 1544-1555</span>
                <span>해외항공 02-3479-4399</span>
                <span>국내항공 02-3479-4340</span>
              </div>
              <div>
                <span>팩스 02-830-7807</span>
                <span>이메일 helpdesk@interparktriple.com</span>
              </div>
            </div>
            <div className="intFooterInfoContent">
              <div>
                <h4 className="subTitle">전자금융거래 분쟁처리 담당</h4>
              </div>
              <div>
                <span>투어 1588-3443</span> <span>티켓 1544-1555</span>
                <span>팩스 02-830-8295</span>
              </div>
              <div>
                <span>이메일 intersolution@interparktriple.com</span>
                <span>개인정보보호책임자 cpo@interparktriple.com</span>
              </div>
            </div>
            <div className="intFooterInfoContent">
              <span className="notice">
                (주)인터파크트리플은 인터파크티켓, 인터파크투어의 통신판매중개자로서 통신판매의
                당사자가 아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 (주)인터파크트리플은
                일체 책임을 지지 않습니다.
                <br />
                Copyright ⓒ InterparkTriple Corp. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
        <div className="intFooterInfo">
          <h2>(주)인터파크커머스</h2>
          <div className="intFooterInfoContentWrap">
            <div className="intFooterInfoContent">
              <div>
                <span>서울시 서초구 강남대로 447(서초동, 남서울빌딩)</span>
              </div>
              <div>
                <span>호스팅서비스제공자 (주)인터파크커머스</span>
                <span>대표이사 김동식</span>
              </div>
              <span>
                사업자등록번호 422-81-03185{' '}
                <PopupButton
                  type="button"
                  className="linkText"
                  onClick={handleClickBizInfo('4228103185')}
                >
                  사업자정보확인
                </PopupButton>
              </span>
              <span>통신판매업신고 2023-서울서초-0823</span>
            </div>
            <div className="intFooterInfoContent">
              <div>
                <h4 className="subTitle">고객센터</h4>
                <span>
                  <PopupButton type="button" className="linkText" onClick={handleClickShopContact}>
                    쇼핑1:1문의
                  </PopupButton>
                </span>
                <span>
                  <a
                    href="https://book.interpark.com/communication/SosBoard.do?_method=SosRegist&amp;FromLogin=Y"
                    target="_blank"
                    title="새 창으로 열림"
                    rel="noreferrer"
                  >
                    도서1:1문의
                  </a>
                </span>
              </div>
              <div>
                <span>쇼핑 1588-1555</span> <span>도서 1577-2555</span>
              </div>
              <div>
                <span>팩스 02-838-0750</span>
                <span>이메일 helpshop@interparkshop.com</span>
              </div>
            </div>
            <div className="intFooterInfoContent">
              <div>
                <h4 className="subTitle">전자금융거래 분쟁처리 담당</h4>
              </div>
              <div>
                <span>쇼핑 1588-1555</span> <span>도서 1577-2555</span>
                <span>팩스 02-838-0750</span>
              </div>
              <div>
                <span>이메일 helpshop@interparkshop.com</span>
                <span>개인정보보호책임자 cposhopping@interparkshop.com</span>
              </div>
            </div>
            <div className="intFooterInfoContent">
              <span className="notice">
                (주)인터파크커머스는 인터파크쇼핑, 인터파크도서의 통신판매중개자로서 통신판매의
                당사자가 아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 주식회사
                인터파크커머스는 일체 책임을 지지 않습니다.
                <br />
                Copyright ⓒ Interpark Commerce Corp. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FooterIntWithCommerce;

const Wrapper = styled.div`
  display: block;
  min-width: 1024px;
`;

const PopupButton = styled.button`
  font-size: 12px;
  color: #4a95ff;
  text-decoration: underline;
  cursor: pointer;
`;
