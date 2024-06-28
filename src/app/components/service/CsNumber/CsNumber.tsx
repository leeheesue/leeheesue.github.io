import { COLORS } from '@/shared/constants/colors';
import { styled, blindStyle } from '@/shared/utils/styles';

interface CsNumberProps {
  service: '투어' | '티켓';
  title: string;
  subTitle?: string;
  onClick?: () => void;
}

const ExtraInfo = ({ service }: { service: '투어' | '티켓' }) => {
  if (service === '티켓') {
    return (
      <div className="extraInfo">
        <ul>
          <li>평일 09:00 ~ 18:00 (연중무휴)</li>
          <li>입점 판매 문의는 점심시간 (12:00 ~ 13:00) 및 주말/ 공휴일 상담 제외</li>
        </ul>
      </div>
    );
  }
  return null;
};

const Content = ({ service, title, subTitle }: CsNumberProps) => {
  return (
    <>
      <span className="title">
        {service}
        {title}
      </span>
      {subTitle && <p>{subTitle}</p>}
    </>
  );
};

const CsNumber = ({ service, title, subTitle, onClick }: CsNumberProps) => {
  return (
    <CsNumberContainer>
      <div className="csContent">
        {service === '투어' ? (
          <button onClick={onClick} type="button">
            <span className="blind">{service} 전화걸기</span>
            <Content service={service} title={title} subTitle={subTitle} />
          </button>
        ) : (
          <a href={`tel:${title}`}>
            <span className="blind">{service} 전화걸기</span>
            <Content service={service} title={title} subTitle={subTitle} />
          </a>
        )}
      </div>
      <ExtraInfo service={service} />
    </CsNumberContainer>
  );
};

export default CsNumber;

const CsNumberContainer = styled.div`
  width: 100%;
  min-height: 8rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
  border: 0.1rem solid ${COLORS.gray500};
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  .blind {
    ${blindStyle}
  }

  .csContent {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 8rem;
    vertical-align: middle;
    padding: 1.6rem 0 1.6rem 4rem;
    box-sizing: border-box;
    background: url('/images/csNumber/icon_phone.svg') no-repeat;
    background-position: left center;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      display: inline-block;
      width: 1.6rem;
      height: 1.6rem;
      background: url('/images/icon_arrow.svg') no-repeat;
    }

    button,
    a {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      text-align: left;
    }

    button {
      flex-wrap: wrap;
      padding-right: 1.6rem;
    }

    .title {
      display: block;
      width: 100%;
      font-size: 1.6rem;
      font-weight: 700;
      color: ${COLORS.gray900};
    }

    p {
      margin-top: 0.4rem;
      font-size: 1.3rem;
      font-weight: 400;
      color: ${COLORS.gray800};
    }
  }

  .extraInfo {
    padding: 1.6rem 1.6rem 2rem 0;
    border-top: 0.1rem solid ${COLORS.gray400};

    li {
      position: relative;
      padding-left: 1rem;
      font-size: 1.3rem;
      color: ${COLORS.gray800};

      &:before {
        content: '·';
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1.3rem;
        color: ${COLORS.gray800};
      }

      + li {
        margin-top: 0.4rem;
      }
    }
  }
`;
