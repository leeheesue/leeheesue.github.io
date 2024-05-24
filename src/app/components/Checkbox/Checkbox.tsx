import React, {
  ComponentPropsWithoutRef,
  ReactElement,
  cloneElement,
  isValidElement,
  ReactNode,
  forwardRef,
  ForwardedRef,
} from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IconCheck } from '@/components/Icon';
import { COLORS } from '@/shared/constants';
import { blindStyle } from '@/shared/utils/styles';

export interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  colorTheme: 'tour' | 'ticket';
  id: string;
  children: ReactNode;
  variant?: 'square' | 'default';
}

const DEFAULT_CLASS_NAME = 'labelText';
const Checkbox = (
  {
    id,
    className,
    disabled,
    colorTheme,
    variant = 'default',
    children,
    ...checkboxAttrs
  }: CheckboxProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <CheckboxContainer
      ref={ref}
      className={className ?? ''}
      color={colorTheme === 'tour' ? COLORS.blue500 : COLORS.purple500}
      variant={variant}
    >
      <input type="checkbox" id={id} disabled={disabled} {...checkboxAttrs} />
      <label htmlFor={id}>
        <i className="checkIcon">
          <IconCheck size={16} />
        </i>
        {!isValidElement(children) && <span className={DEFAULT_CLASS_NAME}>{children}</span>}
        {isValidElement(children) &&
          cloneElement(children as ReactElement, { className: DEFAULT_CLASS_NAME })}
      </label>
    </CheckboxContainer>
  );
};

export default forwardRef(Checkbox);

const defaultTextStyle = css`
  color: ${COLORS.gray800};
`;

const CheckboxContainer = styled.div<{
  color: string;
  variant: 'square' | 'default';
}>`
  display: flex;
  user-select: none;

  .${DEFAULT_CLASS_NAME} {
    ${defaultTextStyle};
    margin-left: 0.8rem;
    font-size: 1.4rem;
  }

  input[type='checkbox'] {
    ${blindStyle}
    & + label {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 0;
      cursor: pointer;
    }

    & + label {
      .checkIcon {
        padding: 0.4rem;
      }
    }

    &:checked + label {
      .checkIcon {
        svg path {
          fill: ${({ color }) => color};
        }
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
  ${({ variant, color }) => variant === 'square' && squareStyle(color)}
`;

const squareStyle = (color: string) => css`
  .checkIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0.4rem;
    border-radius: 0.8rem;
    border: 0.1rem solid ${COLORS.gray500};

    svg {
      opacity: 0;
    }
  }

  .${DEFAULT_CLASS_NAME} {
    margin-left: 1.2rem;
    font-size: 1.6rem;
  }

  input[type='checkbox'] {
    &:checked + label {
      .checkIcon {
        background-color: ${color};
        border: none;

        svg {
          opacity: 1;

          path {
            fill: ${COLORS.gray0};
          }
        }
      }
    }
  }
`;
