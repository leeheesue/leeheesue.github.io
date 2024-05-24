import Image from 'next/image';
import Link from 'next/link';

import styled from '@emotion/styled';

import { BREAK_POINT } from '@/shared/constants';

interface BannerProps {
  text: string;
  iconUrl: string;
  bgColor: string;
  link: string;
}

const Banner = ({ text, iconUrl, bgColor, link }: BannerProps) => {
  return (
    <BannerContainer bgColor={bgColor}>
      <Link href={link}>
        <Image src={iconUrl} alt="" width={28} height={28} />
        <p>{text}</p>
      </Link>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div<{ bgColor: string }>`
  margin-top: 0.8rem;
  border-radius: 1.2rem;
  background-color: ${({ bgColor }) => bgColor};

  @media (min-width: ${BREAK_POINT.desktop}) {
    margin-top: 1.6rem;
  }

  a {
    display: flex;
    align-items: center;
    height: 4.8rem;
    padding: 0.8rem 1.6rem;
    box-sizing: border-box;
    background: url('/images/icon_arrow.svg') no-repeat;
    background-position: right 1.6rem center;
  }

  p {
    padding-right: 1.6rem;
    padding-left: 0.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 700;
    font-size: 1.4rem;
  }
`;
