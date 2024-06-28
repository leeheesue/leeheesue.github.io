import React, { useCallback, useState } from 'react';

import styled from '@emotion/styled';

import ArrowIcon from '@/asset/IconFooterArrow';
import ActionSheet from '@/components/ActionSheet';
import { AUTH_LINK } from '@/shared/constants';
import useCookieAuth from '@/shared/hooks/useCookieAuth';
import { getSignInUrl } from '@/shared/utils';

import BusinessInfo from './BusinessInfo';

type MobileFooterProps = React.ComponentPropsWithoutRef<'div'> & {
  isWithCommerce?: boolean;
};

const MobileFooterInterpark = ({ isWithCommerce, className }: MobileFooterProps) => {
  const { isPending, isUnauthenticated } = useCookieAuth();
  const [toggleBusinessInfo, setToggleBusinessInfo] = useState<
    '' | 'interparktriple' | 'commerce' | 'onlyInterparktriple'
  >('');
  const [isShowNotice, setIsShowNotice] = useState(false);

  const handleClickBusinessInfo = useCallback(
    (name: 'interparktriple' | 'commerce' | 'onlyInterparktriple') => () => {
      setToggleBusinessInfo(prevState => (prevState === name ? '' : name));
    },
    []
  );

  const handleClickNotice = useCallback(
    (isOn: boolean) => () => {
      setIsShowNotice(isOn);
    },
    []
  );

  const handleClickAuth = () => {
    const isTour = window.location.pathname.startsWith('/tour');

    if (isUnauthenticated) {
      window.location.href = getSignInUrl({ clientId: isTour ? 'tour-mweb' : 'ticket-mweb' });
      return;
    }
    window.location.href = `${AUTH_LINK.LOGOUT}?retUrl=${encodeURIComponent(document.URL)}`;
  };

  return (
    <Wrapper className={className ?? ''}>
      <Policy>
        <ul>
          <li>
            <HydrationWarningOffLink href={`${getDomain({ main: true })}/terms.html#agree`}>
              이용약관
            </HydrationWarningOffLink>
          </li>
          <li>
            <HydrationWarningOffLink
              href={`${getDomain({ main: true })}/terms.html#protect_privacy`}
            >
              <b>개인정보 처리 방침</b>
            </HydrationWarningOffLink>
          </li>
          <li>
            <HydrationWarningOffLink
              href={`${getDomain({ main: true })}/terms.html#location_terms`}
            >
              위치기반서비스 이용약관
            </HydrationWarningOffLink>
          </li>
        </ul>
        <ul>
          <li>
            <HydrationWarningOffLink
              href={`${getDomain({ main: true })}/terms.html#dispute_resolution`}
            >
              분쟁해결기준
            </HydrationWarningOffLink>
          </li>
          <li>
            <HydrationWarningOffLink href={`${getDomain({ tour: true })}/Terms.aspx`}>
              여행약관
            </HydrationWarningOffLink>
          </li>
          <li>
            <HydrationWarningOffLink
              href={`${getDomain({ tour: true })}/Tour/Customer/Notice#NoticeDetail_10638`}
            >
              여행자 보험 가입안내
            </HydrationWarningOffLink>
          </li>
          {isWithCommerce ? (
            <li>
              <button type="button" onClick={handleClickNotice(true)}>
                공지사항
                <ArrowIcon className="arrowIcon" />
              </button>
            </li>
          ) : (
            <>
              <li>
                <a href="https://travel.interpark.com/home/customer/board/notice/common">
                  공지사항
                </a>
              </li>
              <li>
                {isPending ? (
                  <button type="button" onClick={handleClickAuth}>
                    {isUnauthenticated ? '로그인' : '로그아웃'}
                  </button>
                ) : null}
              </li>
            </>
          )}
        </ul>
      </Policy>
      <BusinessInfoButtons>
        {isWithCommerce ? (
          <>
            <button type="button" onClick={handleClickBusinessInfo('interparktriple')}>
              <span>
                <b>(주)인터파크트리플</b> 사업자정보
                <ArrowIcon className="arrowIcon" />
              </span>
            </button>
            <button type="button" onClick={handleClickBusinessInfo('commerce')}>
              <span>
                <b>(주)인터파크커머스</b> 사업자정보
                <ArrowIcon className="arrowIcon" />
              </span>
            </button>
          </>
        ) : (
          <button type="button" onClick={handleClickBusinessInfo('onlyInterparktriple')}>
            <span>
              <b>(주)인터파크트리플</b> 사업자정보
              <ArrowIcon className="arrowIcon" />
            </span>
          </button>
        )}
      </BusinessInfoButtons>
      <BusinessInfo name={toggleBusinessInfo} />
      <Notice>
        {isWithCommerce ? (
          <p>
            (주)인터파크트리플은 인터파크티켓, 인터파크투어의 통신판매중개자로서 통신판매의 당사자가
            아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 (주)인터파크트리플은 일체 책임을
            지지 않습니다. (주)인터파크커머스는 인터파크쇼핑, 인터파크도서의 통신판매중개자로서
            통신판매의 당사자가 아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서
            (주)인터파크커머스는 일체 책임을 지지 않습니다.
          </p>
        ) : (
          <p>
            (주)인터파크트리플은 항공사가 제공하는 개별 항공권 및 여행사가 제공하는 일부 여행상품에
            대하여 통신판매중개자의 지위를 가지며, 해당상품, 상품정보, 거래에 관한 의무와 책임은
            판매자에게 있습니다. 항공권 또는 항공권이 포함된 경우, 표시되는 상품요금은 예상
            유류할증료와 제세공과금이 포함된 가격이며, 발권일/환율 등에 따라 변동될 수 있습니다.
            (주)인터파크트리플은 인터파크티켓, 인터파크투어의 통신판매중개자로서 통신판매의 당사자가
            아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 (주)인터파크트리플은 일체 책임을
            지지 않습니다.
          </p>
        )}
      </Notice>
      {isWithCommerce && (
        <ActionSheet
          items={[
            {
              label: (
                <a href="https://travel.interpark.com/home/customer/board/notice/common">
                  인터파크트리플
                </a>
              ),
            },
            {
              label: (
                <a href="https://m.shop.interpark.com/customer/board/notice">인터파크커머스</a>
              ),
            },
          ]}
          open={isShowNotice}
          onClose={handleClickNotice(false)}
        />
      )}
    </Wrapper>
  );
};

export default MobileFooterInterpark;

const HydrationWarningOffLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} suppressHydrationWarning>
      {children}
    </a>
  );
};

const DEFAULT_DOMAIN = '.interpark.com';

function getDomain({ main, tour }: { main?: boolean; tour?: boolean }): string {
  if (typeof window === 'undefined') return '';

  const [domain] = window.location.href.split(DEFAULT_DOMAIN);
  if (!domain) return '';

  if (main) {
    const isDev = domain.includes('m-dev') || domain.includes('m-qa');
    return isDev ? 'https://m-qa.interpark.com' : 'https://m.interpark.com';
  }
  if (tour) {
    const [, removeSchemeDomain] = domain.split('//');
    return ['temtour', 'stmtour', 'mtour'].includes(removeSchemeDomain ?? '')
      ? `${domain}${DEFAULT_DOMAIN}`
      : 'mtour.interpark.com';
  }

  return '';
}

const Notice = styled.div`
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

const BusinessInfoButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.8rem auto 1rem;

  button {
    font-size: 1.1rem;
    color: #333;
    &:not(:first-of-type)::before {
      content: '';
      display: inline-block;
      width: 0.1rem;
      height: 1.2rem;
      margin: 0 0.6rem;
      vertical-align: middle;
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
const Policy = styled.div`
  margin: 0 auto 0.4rem;
  padding-top: 3rem;
  text-align: center;
  li {
    display: inline-block;
    line-height: 1.7rem;
    &:not(:first-of-type)::before {
      content: '';
      display: inline-block;
      width: 0.1rem;
      height: 1.2rem;
      margin: 0 0.6rem;
      vertical-align: middle;
      background: rgba(0, 0, 0, 0.3);
    }
    a,
    button {
      color: #333;
      font-size: 1.1rem;
    }
  }
`;
const Wrapper = styled.div`
  display: block;
  padding: 0 1.5rem calc(env(safe-area-inset-bottom) + 4.5rem);
  background-color: #fafafa;
  box-sizing: border-box;
  ul {
    list-style: none;
  }
  .arrowIcon {
    display: inline-block;
    margin-left: 0.1rem;
    vertical-align: -0.2rem;
  }
`;
