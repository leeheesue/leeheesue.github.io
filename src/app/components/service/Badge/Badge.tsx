import React, { ComponentPropsWithoutRef } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { COLORS } from '@/shared/constants';

interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  label: '답변대기' | '처리중' | '답변완료';
  colorTheme: 'tour' | 'ticket';
}

const Badge = ({ label, colorTheme, className }: BadgeProps) => {
  return (
    <BadgeContainer colorTheme={colorTheme} label={label} className={className ?? ''}>
      {label}
    </BadgeContainer>
  );
};

export default Badge;

const BadgeContainer = styled.span<{
  colorTheme: 'tour' | 'ticket';
  label: '답변대기' | '처리중' | '답변완료';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 5.8rem;
  height: 2rem;
  padding: 0 0.6rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 0.8rem;

  ${({ label, colorTheme }) => {
    if (label !== '답변완료') {
      return css`
        background-color: ${COLORS.gray200};
        color: ${COLORS.gray700};
      `;
    }
    if (colorTheme === 'tour') {
      return css`
        background-color: ${COLORS.blue50};
        color: ${COLORS.blue500};
      `;
    }
    return css`
      background-color: ${COLORS.purple50};
      color: ${COLORS.purple500};
    `;
  }}
`;
