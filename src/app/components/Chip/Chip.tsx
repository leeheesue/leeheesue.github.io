import React, { ReactNode } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { GRAY_COLORS } from '@/shared/constants/colors';

interface ChipProps {
  children: ReactNode;
  link?: string;
  title?: string;
  selected?: boolean;
  onClick?: () => void;
}

const Chip = ({ children, link, selected = false, ...props }: ChipProps) => {
  if (!link) {
    return (
      <ChipStyle as="button" aria-selected={selected} {...props}>
        {children}
      </ChipStyle>
    );
  }

  return (
    <ChipStyle as="a" href={link}>
      {children}
    </ChipStyle>
  );
};

export default Chip;

const fixedWidthTrickStyle = css`
  flex-direction: column;
  &::after {
    content: attr(title);
    display: inline-block;
    height: 0;
    font-weight: bold;
    visibility: hidden;
  }
`;

const ChipStyle = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3.6rem;
  padding: 0 1.6rem;
  border: 0.1rem solid ${GRAY_COLORS.gray500};
  border-radius: 3.2rem;
  color: ${GRAY_COLORS.gray900};
  font-size: 1.4rem;
  ${fixedWidthTrickStyle}

  &[aria-selected='true'] {
    background-color: ${GRAY_COLORS.gray900};
    color: ${GRAY_COLORS.gray0};
    font-weight: bold;
    border: 0.1rem solid transparent;
  }
`;
