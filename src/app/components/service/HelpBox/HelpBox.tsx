import Image from 'next/image';
import Link from 'next/link';

import { COLORS } from '@/shared/constants/colors';
import { styled } from '@/shared/utils/styles';

interface HelpBoxProps {
  url: {
    link: string;
    target?: string;
  };
  iconImg: string;
  title: string;
  subTitle: string;
  badge?: {
    text: string;
    colorTheme: 'tour' | 'ticket';
  };
}

const HelpBox = ({ url, iconImg, title, subTitle, badge }: HelpBoxProps) => {
  const openNewWindow = (link: string) => {
    window.open(link, '_blank', 'width=500,height=800');
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (url.target === '_blank') {
      e.preventDefault();
      openNewWindow(url.link);
    }
  };

  return (
    <HelpBoxContainer
      href={url.link}
      target={url.target || '_self'}
      $badgeTheme={badge?.colorTheme || 'tour'}
      onClick={handleClick}
    >
      <Icon>
        <Image width={24} height={24} src={iconImg} alt="" />
      </Icon>
      <dl className="info">
        <dt>
          {title} {badge && <b className="badge">{badge.text}</b>}
        </dt>
        <dd>{subTitle}</dd>
      </dl>
    </HelpBoxContainer>
  );
};

export default HelpBox;

const Icon = styled.i`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 1.2rem;
`;

const HelpBoxContainer = styled(Link)<{ $badgeTheme: 'tour' | 'ticket' }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8.1rem;
  padding: 1.6rem 2rem;
  border: 0.1rem solid ${COLORS.gray500};
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  background: url('/images/icon_arrow.svg') no-repeat;
  background-position: right 2rem center;

  .info {
    dt {
      display: flex;
      align-items: center;
      margin-bottom: 0.4rem;
      font-size: 1.6rem;
      font-weight: 700;
    }

    dd {
      font-size: 1.3rem;
      font-weight: 400;
      color: ${COLORS.gray800};
    }
  }

  .badge {
    display: inline-block;
    line-height: 2rem;
    height: 2rem;
    margin-left: 0.6rem;
    padding: 0 0.6rem;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 0.8rem 0.8rem 0.8rem 0;
    background-color: ${props => (props.$badgeTheme === 'tour' ? COLORS.blue50 : COLORS.purple50)};
    color: ${props => (props.$badgeTheme === 'tour' ? COLORS.blue500 : COLORS.purple500)};
  }
`;
