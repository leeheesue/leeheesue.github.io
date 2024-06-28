import { ForwardedRef, forwardRef } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import ToggleIcon from '@/components/Select/ToggleIcon';
import { OptionType, OptionValueType, ThemeType } from '@/components/Select/types';
import { textStyle, withIconStyle } from '@/components/Select/utils';
import { COLORS, Z_INDEX, BREAK_POINT } from '@/shared/constants';
import type { UseTargetPositionReturnType } from '@/shared/hooks/useTargetPosition';
import { pixelToRem } from '@/shared/utils';
import { mediaQuery } from '@/shared/utils/styles';

interface OptionsProps<T> {
  open: boolean;
  options: OptionType<T>[];
  selectedValue: OptionType<T>;
  colorTheme: ThemeType;
  position: Omit<UseTargetPositionReturnType, 'onChangePosition'>;
  onChange: (updatedValue: OptionType<T>) => void;
  onClose: () => void;
}
const Options = <T extends OptionValueType>(
  { open, position, options, selectedValue, colorTheme, onChange }: OptionsProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  if (!open) return null;
  return (
    <OptionsContainer {...position} ref={ref} left={position.left ?? 0}>
      <ul role="listbox">
        {options.map((option, index) => {
          const firstOption = index === 0;
          return (
            <Option
              key={String(option.value)}
              role="option"
              selected={selectedValue.value === option.value}
              withIcon={firstOption}
              primaryColor={colorTheme === 'tour' ? COLORS.blue500 : COLORS.purple500}
              onClick={() => onChange(option)}
            >
              {option.label}
              {firstOption && <ToggleIcon open={open} />}
            </Option>
          );
        })}
      </ul>
    </OptionsContainer>
  );
};

export default forwardRef(Options);

const activeStyle = (primaryColor: string) => css`
  font-weight: 700;
  color: ${primaryColor};
`;
const hoverStyle = (primaryColor: string) => css`
  &:hover {
    ${activeStyle(primaryColor)}
  }
`;

const OptionsContainer = styled.div<{
  top: number;
  left: number;
  width: number;
}>`
  position: fixed;
  left: ${({ left }) => pixelToRem(left)};
  top: ${({ top }) => pixelToRem(top)};
  z-index: ${Z_INDEX.DROPDOWN};
  width: ${({ width }) => pixelToRem(width)};
  padding-bottom: 1.2rem;
  border: 0.1rem solid ${COLORS.gray500};
  border-radius: 1.6rem;
  background: ${COLORS.gray0};
  box-shadow: 0 0.2rem 0.8rem 0px rgba(0, 0, 0, 0.1);

  ${mediaQuery(BREAK_POINT.desktop)(css`
    position: absolute;
  `)}
`;

const Option = styled.li<{ selected: boolean; withIcon: boolean; primaryColor: string }>`
  ${textStyle}
  padding: 1.2rem 1.6rem;
  list-style: none;
  cursor: pointer;
  ${({ selected, primaryColor }) => selected && activeStyle(primaryColor)}
  ${({ withIcon, primaryColor }) => (withIcon ? withIconStyle : hoverStyle(primaryColor))}
`;
