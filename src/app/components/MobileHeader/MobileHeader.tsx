'use client';

import { useRouter } from 'next/navigation';

import styled from '@emotion/styled';

import Heading from '@/components/Heading/Heading';
import ShareButton from '@/components/ShareButton/ShareButton';
import { COLORS } from '@/shared/constants';

interface MobileHeaderProps {
  children: string;
  isShareBtn?: boolean;
}
export const SHARE_BUTTON_SIZE = {
  desktop: 28,
  mobile: 24,
};

const MobileHeader = ({ children, isShareBtn = false }: MobileHeaderProps) => {
  const router = useRouter();

  const handleClickBackButton = () => {
    router.back();
  };

  return (
    <MobileHeaderContainer>
      <button
        className="prevBtn"
        title="이전 페이지"
        type="button"
        aria-label="이전 페이지"
        onClick={handleClickBackButton}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5218 2.4613C16.8193 2.74949 16.8269 3.22431 16.5387 3.52182L8.04418 12.2911L16.4335 20.9519C16.7217 21.2494 16.7142 21.7242 16.4167 22.0124C16.1191 22.3006 15.6443 22.293 15.3561 21.9955L6.4613 12.813C6.17957 12.5221 6.17957 12.0601 6.4613 11.7693L15.4613 2.47818C15.7495 2.18066 16.2243 2.1731 16.5218 2.4613Z"
            fill={COLORS.gray900}
          />
        </svg>
      </button>
      <Heading level={1} fontSize={16}>
        {children}
      </Heading>
      {isShareBtn && <ShareButton className="shareBtn" />}
    </MobileHeaderContainer>
  );
};

export default MobileHeader;

const MobileHeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.2rem;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.8rem;
    font-size: 0;
  }

  .prevBtn {
    left: 0.4rem;
  }

  .shareBtn {
    right: 0.4rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
