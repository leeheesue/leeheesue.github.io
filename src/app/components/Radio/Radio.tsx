import React, { ComponentPropsWithoutRef, ReactElement, cloneElement, isValidElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { COLORS } from '@/shared/constants';
import { pixelToRem } from '@/shared/utils';
import { blindStyle } from '@/shared/utils/styles';

export interface RadioProps extends ComponentPropsWithoutRef<'input'> {
  colorTheme: 'tour' | 'ticket';
  id: string;
}

const DEFAULT_CLASS_NAME = 'labelText';
const Radio = ({ colorTheme, id, className, disabled, children, ...radioAttrs }: RadioProps) => {
  return (
    <RadioContainer
      className={className ?? ''}
      colorTheme={colorTheme === 'tour' ? COLORS.blue500 : COLORS.purple500}
    >
      <input type="radio" id={id} disabled={disabled} {...radioAttrs} />
      <label htmlFor={id}>
        {!isValidElement(children) && <span className={DEFAULT_CLASS_NAME}>{children}</span>}
        {isValidElement(children) &&
          cloneElement(children as ReactElement, { className: DEFAULT_CLASS_NAME })}
      </label>
    </RadioContainer>
  );
};

export default Radio;

const CIRCLE_SIZE = 20;
const circleStyle = css`
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: ${pixelToRem(CIRCLE_SIZE)};
  height: ${pixelToRem(CIRCLE_SIZE)};
  background-color: ${COLORS.gray0};
  border-radius: 100%;
  border: 1px solid ${COLORS.gray500};
  box-sizing: border-box;
  transform: translateY(-50%);
`;

const RadioContainer = styled.div<{ colorTheme: string }>`
  input[type='radio'] {
    ${blindStyle}
    & + label {
      position: relative;
      display: flex;
      align-items: center;
      min-height: ${pixelToRem(CIRCLE_SIZE)};
      padding-left: ${pixelToRem(CIRCLE_SIZE)};
      font-size: 0;
      cursor: pointer;

      &::before {
        ${circleStyle}
      }

      .${DEFAULT_CLASS_NAME} {
        margin-left: 0.8rem;
        font-size: 1.6rem;
        color: ${COLORS.gray900};
      }
    }

    &:checked + label {
      &::before {
        border-color: ${({ colorTheme }) => colorTheme};
        background-color: ${({ colorTheme }) => colorTheme};
      }
      &::after {
        ${circleStyle}
        transform: scale(0.4) translateY(-50%);
        transform-origin: top;
        background-color: ${COLORS.gray0};
      }
    }

    &:disabled + label {
      opacity: 0.6;
      cursor: default;
      &::before {
        background-color: ${COLORS.gray100};
        border-color: ${COLORS.gray200};
      }
      &::after {
        background-color: ${COLORS.gray200};
      }
    }
  }
`;
