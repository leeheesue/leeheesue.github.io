import { isDesktop } from 'react-device-detect';

import styled from '@emotion/styled';

const BusinessInfo = ({
  name,
}: {
  name: '' | 'interparktriple' | 'commerce' | 'onlyInterparktriple';
}) => {
  const isCommerce = name === 'commerce';
  const isOnlyIntr = name === 'onlyInterparktriple';

  const handleClickBizInfo = () => {
    const bizNumber = isCommerce ? '4228103185' : '8248102515';
    const url = `https://www.ftc.go.kr/bizCommPop.do?wrkr_no=${bizNumber}&apv_perm_no=`;
    if (isDesktop) {
      window.open(
        url,
        'licenseeInfo',
        'status=yes, resizable=no, scrollbars=no, width=720, height=700'
      );
    } else {
      window.location.href = url;
    }
  };

  if (!name) return null;

  return (
    <Wrapper>
      {isCommerce && (
        <div className="infoList">
          <ul>
            <li>서울시 서초구 강남대로 447(서초동, 남서울빌딩)</li>
            <li>
              <span>호스팅서비스제공자 (주)인터파크커머스</span>
              <span>대표이사 김동식</span>
            </li>
            <li>
              사업자등록번호 422-81-03185{' '}
              <button type="button" className="popupButton" onClick={handleClickBizInfo}>
                사업자정보확인
              </button>
            </li>
            <li>통신판매업신고 2023-서울서초-0823</li>
          </ul>
          <ul>
            <li>
              <span>
                쇼핑 <a href="tel:1588-1555">1588-1555</a>
              </span>
              <span>
                도서 <a href="tel:1577-2555">1577-2555</a>
              </span>
            </li>
            <li>
              <span>
                이메일 <a href="mailto:helpshop@interparkshop.com">helpshop@interparkshop.com</a>
              </span>
            </li>
          </ul>
        </div>
      )}

      {name === 'interparktriple' && (
        <div className="infoList">
          <ul>
            <li>서울시 강남구 삼성로 512 삼성동빌딩 10층</li>
            <li>호스팅서비스제공자 (주)인터파크트리플</li>
            <li>
              사업자등록번호 824-81-02515{' '}
              <button type="button" className="popupButton" onClick={handleClickBizInfo}>
                사업자정보확인
              </button>
            </li>
            <li>통신판매업신고 2022-서울강남-02179</li>
            <li>대표이사 최휘영</li>
          </ul>
          <ul>
            <li>
              <span>
                투어 <a href="tel:1588-3443">1588-3443</a>
              </span>
              <i> | </i>
              <span>
                티켓 <a href="tel:1544-1555">1544-1555</a>
              </span>
            </li>
            <li>
              <span>
                해외항공 <a href="tel:02-3479-4399">02-3479-4399</a>
              </span>
              <i> | </i>
              <span>
                국내항공 <a href="tel:02-3479-4340">02-3479-4340</a>
              </span>
            </li>
            <li>
              <span>
                이메일{' '}
                <a href="mailto:helpdesk@interparktriple.com">helpdesk@interparktriple.com</a>
              </span>
            </li>
          </ul>
        </div>
      )}
      {isOnlyIntr && (
        <div className="infoList">
          <ul>
            <li>서울시 강남구 삼성로 512 삼성동빌딩 10층</li>
            <li>
              호스팅서비스제공자 (주)인터파크트리플 <i> | </i> 대표이사 최휘영
            </li>
            <li>
              사업자등록번호 824-81-02515{' '}
              <button type="button" className="popupButton" onClick={handleClickBizInfo}>
                사업자정보확인
              </button>
            </li>
            <li>통신판매업신고 2022-서울강남-02179</li>
            <li>관광사업증 등록번호 : 제2014-42호</li>
          </ul>
          <ul>
            <li>
              <span>
                투어 <a href="tel:1588-3443">1588-3443</a>
              </span>
              <i> | </i>
              <span>
                티켓 <a href="tel:1544-1555">1544-1555</a>
              </span>
            </li>
            <li>
              <span>
                해외항공 <a href="tel:02-3479-4399">02-3479-4399</a>
              </span>
              <i> | </i>
              <span>
                국내항공 <a href="tel:02-3479-4340">02-3479-4340</a>
              </span>
            </li>
            <li>
              <span>
                이메일{' '}
                <a href="mailto:helpdesk@interparktriple.com">helpdesk@interparktriple.com</a>
              </span>
            </li>
          </ul>
        </div>
      )}

      {!isOnlyIntr && (
        <Notice>
          {isCommerce ? (
            <p>
              (주)인터파크커머스는 인터파크쇼핑, 인터파크도서의 통신판매중개자로서 통신판매의
              당사자가 아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 주식회사
              인터파크커머스는 일체 책임을 지지 않습니다.
              {'\n'}
              Copyright ⓒ Interpark Commerce Corp. All Rights Reserved.
            </p>
          ) : (
            <p>
              (주)인터파크트리플은 인터파크티켓, 인터파크투어의 통신판매중개자로서 통신판매의
              당사자가 아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 (주)인터파크트리플은
              일체 책임을 지지 않습니다.
              {'\n'}
              Copyright ⓒ InterparkTriple Corp. All Rights Reserved.
            </p>
          )}
        </Notice>
      )}
    </Wrapper>
  );
};

export default BusinessInfo;

const Wrapper = styled.div`
  color: hsla(0, 0%, 7%, 0.5);
  text-align: left;
  line-height: 1.7rem;
  font-size: 1.1rem;
  .infoList {
    max-width: 25.5rem;
    margin: 0 auto;
  }
  .popupButton {
    font-size: inherit;
    text-decoration: underline;
    color: #333;
    cursor: pointer;
  }
  ul + ul {
    margin-top: 0.8rem;
  }
  i {
    font-style: normal;
  }
`;

export const Notice = styled.div`
  max-width: 37rem;
  margin: 1.6rem auto 3rem;
  p {
    color: hsla(0, 0%, 7%, 0.5);
    text-align: center;
    font-size: 1rem;
    line-height: 1.4rem;
    word-break: keep-all;
    white-space: pre-line;
  }
`;
