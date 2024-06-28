import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { COLORS } from '@/shared/constants';
import { pixelToRem } from '@/shared/utils';

interface ButtonProps extends Pick<ComponentPropsWithoutRef<'button'>, 'type'> {
  children: ReactNode;
  colorTheme?: 'default' | 'tour' | 'ticket' | 'disabled';
  height?: 52 | 48 | 44 | 40 | 36 | 28;
  variant?: 'filled' | 'outline';
  disabled?: boolean;
  url?: string;
  target?: '_self' | '_blank';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  height = 52,
  variant = 'outline',
  colorTheme = 'default',
  disabled = false,
  url,
  target = '_self',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  if (url) {
    return (
      <ButtonLink
        height={height}
        colorTheme={colorTheme}
        disabled={disabled}
        variant={variant}
        href={url}
        target={target}
        {...props}
      >
        {startIcon && <span className="startIcon">{startIcon}</span>}
        {children}
        {endIcon && <span className="endIcon">{endIcon}</span>}
      </ButtonLink>
    );
  }

  return (
    <ButtonStyle
      height={height}
      colorTheme={colorTheme}
      disabled={disabled}
      variant={variant}
      {...props}
    >
      {startIcon && <span className="icon startIcon">{startIcon}</span>}
      {children}
      {endIcon && <span className="icon endIcon">{endIcon}</span>}
    </ButtonStyle>
  );
};

export default Button;

const disabledStyle = css`
  background-color: ${COLORS.gray300};
  color: ${COLORS.gray700};
  border: none;
  cursor: default;
`;

const variantStyle = ({
  colorTheme = 'default',
  variant = 'filled',
}: {
  colorTheme?: ButtonProps['colorTheme'];
  variant?: string;
}) => {
  const themeColor = colorTheme === 'tour' ? COLORS.blue500 : COLORS.purple500;
  const isFilled = variant === 'filled';
  const isOutline = variant === 'outline';

  if (isOutline) {
    if (colorTheme === 'default') {
      return css`
        border: 0.1rem solid ${COLORS.gray500};
        color: ${COLORS.gray900};
        background: ${COLORS.gray0};
      `;
    }
    return css`
      border: 0.1rem solid ${themeColor};
      color: ${themeColor};
      background: ${COLORS.gray0};
    `;
  }

  if (isFilled) {
    if (colorTheme === 'default') {
      return css`
        background-color: ${COLORS.gray0};
        color: ${COLORS.gray900};
        border: none;
      `;
    }
    return css`
      background-color: ${themeColor};
      color: ${COLORS.gray0};
      border: none;
    `;
  }

  return css``;
};

const getFontSize = (height: number) => {
  switch (height) {
    case 28:
      return '1.2rem';
    default:
      return '1.6rem';
  }
};

const buttonStyles = ({
  colorTheme = 'default',
  variant = 'filled',
  height = 52,
  disabled,
}: ButtonProps) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${pixelToRem(height)};
  text-align: center;
  padding: 0 1.2rem;
  font-size: ${getFontSize(height)};
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 1.2rem;
  color: ${COLORS.gray900};
  border: 0.1rem solid ${COLORS.gray500};

  &:disabled {
    cursor: default;
  }

  .icon {
    font-size: 0;

    &.startIcon {
      margin-right: 0.4rem;
    }

    &.endIcon {
      margin-left: 0.4rem;
    }
  }

  ${variantStyle({ colorTheme, variant })};
  ${(disabled || colorTheme === 'disabled') && disabledStyle}
`;

const ButtonStyle = styled.button<ButtonProps>`
  ${buttonStyles}
`;

const ButtonLink = styled.a<ButtonProps>`
  ${buttonStyles}
`;
