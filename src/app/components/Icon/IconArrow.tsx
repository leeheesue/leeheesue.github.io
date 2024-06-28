import React, { ComponentPropsWithoutRef } from 'react';

import styled from '@emotion/styled';

import { GRAY_COLORS } from '@/shared/constants/colors';
import { pixelToRem } from '@/shared/utils';

export type ArrowDirection = 'right' | 'left' | 'up' | 'down';
export type ArrowType = 'fill' | 'line';
interface IconArrowProps extends ComponentPropsWithoutRef<'i'> {
  type?: ArrowType;
  size?: number;
  color?: string;
  direction?: ArrowDirection;
}

export const IconArrow = ({
  type,
  size = 12,
  color = GRAY_COLORS.gray900,
  direction = 'right',
  ...props
}: IconArrowProps) => {
  return (
    <IconContainer {...props} size={size} direction={direction}>
      {type === 'line' ? (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.8567 13.815C4.60376 13.5684 4.60376 13.1685 4.8567 12.9218L9.90412 8L4.8567 3.07817C4.60376 2.83153 4.60376 2.43163 4.8567 2.18499C5.10964 1.93834 5.51974 1.93834 5.77268 2.18498L11.0491 7.33011C11.4285 7.70008 11.4285 8.29992 11.0491 8.66989L5.77268 13.815C5.51974 14.0617 5.10964 14.0617 4.8567 13.815Z"
              fill={color}
            />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 12 13" fill="none">
          <path
            d="M4.14875 1.59736L8.78204 5.97226C8.91306 6.09584 8.97852 6.2423 8.97852 6.41168C8.97852 6.58106 8.91306 6.72748 8.78204 6.8512L4.14875 11.2261C4.01772 11.3498 3.86261 11.4116 3.68337 11.4116C3.50414 11.4116 3.34892 11.3498 3.218 11.2261C3.08698 11.1022 3.02149 10.9558 3.02149 10.7866L3.02149 2.03681C3.02149 1.86754 3.08698 1.72101 3.218 1.59736C3.34888 1.47379 3.5041 1.41174 3.68337 1.41174C3.86265 1.41174 4.01772 1.47379 4.14875 1.59736Z"
            fill={color}
          />
        </svg>
      )}
    </IconContainer>
  );
};

const IconContainer = styled.i<{ size: number; direction: ArrowDirection }>`
  display: inline-block;
  font-size: 0;
  transform: ${({ direction }) => getRotation(direction)};
  svg {
    width: ${({ size }) => pixelToRem(size)};
    height: ${({ size }) => pixelToRem(size)};
  }
`;

const getRotation = (direction: ArrowDirection) => {
  switch (direction) {
    case 'right':
      return 'rotate(0deg)';
    case 'left':
      return 'rotate(180deg)';
    case 'up':
      return 'rotate(-90deg)';
    case 'down':
      return 'rotate(90deg)';
    default:
      return 'rotate(0deg)';
  }
};
