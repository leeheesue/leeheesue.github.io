import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { COLORS } from '@/shared/constants';

import Overlay from '../Overlay/Overlay';

interface SpinnerProps {
  open: boolean;
  size?: number;
  color?: string;
  strokeWidth?: number;
  position?: 'inline' | 'full' | 'fullScreen';
}

const Spinner = ({
  open,
  color = COLORS.gray600,
  position = 'inline',
  ...svgProps
}: SpinnerProps) => {
  if (position === 'fullScreen') {
    return open ? (
      <Overlay>
        <Wrapper isOpen={open} position={position}>
          <SpinnerSvg color={color} {...svgProps} />
        </Wrapper>
      </Overlay>
    ) : null;
  }
  return (
    <Wrapper isOpen={open} position={position}>
      <SpinnerSvg color={color} {...svgProps} />
    </Wrapper>
  );
};

export default Spinner;

const SpinnerSvg = ({ size = 56, color, strokeWidth = 4 }: Omit<SpinnerProps, 'open'>) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
    <path
      d="M51.3334 28C51.3334 40.8867 40.8867 51.3333 28 51.3333C15.1134 51.3333 4.66669 40.8867 4.66669 28C4.66669 15.1134 15.1134 4.66667 28 4.66667"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(180deg); }
  50% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
`;

const Wrapper = styled.div<{ isOpen: boolean; position: 'inline' | 'full' | 'fullScreen' }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      display: none;
    `}
  ${({ position }) => position !== 'inline' && fullStyle}
  & > svg {
    animation: ${rotateAnimation} 1s linear infinite;
  }
`;

const fullStyle = css`
  width: 100%;
  height: 100%;
`;
