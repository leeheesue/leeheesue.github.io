import breakPoint from '@/styles/breakpoint.module.scss';

import styled from '@emotion/styled';

import Heading from '@/components/Heading/Heading';
import { COLORS } from '@/shared/constants';

interface NotiBarProps {
  children: string;
  link: string;
  allNotiLink: string;
}

const NotiBar = ({ children, link, allNotiLink }: NotiBarProps) => {
  return (
    <NotiBarContainer>
      <div className="inner">
        <Heading level={3} fontSize={14}>
          공지
        </Heading>
        <a href={link} className="noti">
          <p>{children}</p>
        </a>
        <a href={allNotiLink} className="btnAllNoti">
          전체 보기
        </a>
      </div>
    </NotiBarContainer>
  );
};

export default NotiBar;

const NotiBarContainer = styled.article`
  font-size: 1.4rem;
  background-color: #fafafa;
  border-bottom: 0.1rem solid ${COLORS.gray400};

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 128rem;
    min-width: 32rem;
    margin: 0 auto;
    padding: 2rem;

    h3 {
      margin-right: 1.6rem;
    }
  }

  .noti {
    width: calc(100% - 2.5rem - 1.6rem - 5.2rem - 2.3rem);

    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .btnAllNoti {
    color: ${COLORS.gray800};
  }

  @media (min-width: ${breakPoint.desktop}) {
    border-top: 0.1rem solid ${COLORS.gray400};
    border-bottom: none;
    background-color: ${COLORS.gray0};

    .inner {
      padding: 1.4rem;

      h3 {
        margin-right: 1.2rem;
      }
    }

    .btnAllNoti {
      color: ${COLORS.gray900};
    }
  }
`;
