import breakPoint from '@/styles/breakpoint.module.scss';

import { useCallback, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';

import { COLORS } from '@/shared/constants';
import { useOutsideClick, useTargetPosition } from '@/shared/hooks';

import Options from './Options';
import OptionsBottomSheet from './OptionsBottomSheet';
import ToggleIcon from './ToggleIcon';
import { textStyle, withIconStyle } from './utils';

import type { OptionType, OptionValueType, ThemeType } from './types';

export interface SelectProps<T> {
  title: string;
  colorTheme: ThemeType;
  selectedValue: OptionType<T>;
  options: OptionType<T>[];
  onChange: (selectValue: OptionType<T>) => void;
}

export const CustomSelect = <T extends OptionValueType>({
  title,
  colorTheme,
  selectedValue,
  options,
  onChange,
}: SelectProps<T>) => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${breakPoint.desktop})`,
  });

  const selectButtonRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const { top, width, left, onChangePosition } = useTargetPosition(selectButtonRef);

  useOutsideClick({
    enabled: open && isDesktop,
    ref: optionsRef,
    handler: () => setOpen(false),
  });

  const handleClickSelectButton = useCallback(
    (updatedState: boolean) => () => {
      onChangePosition(); // Note. cdn으로 불러온 헤더가 마운트된 후 노출되어 포지션값 재조정이 필요해 추가.
      setOpen(updatedState);
    },
    [onChangePosition]
  );

  const handleClickOption = (updatedValue: OptionType<T>) => {
    if (updatedValue.value !== selectedValue.value) {
      onChange(updatedValue);
    }
    setOpen(false);
  };

  return (
    <>
      <SelectButton type="button" ref={selectButtonRef} onClick={handleClickSelectButton(true)}>
        {selectedValue.label}
        <ToggleIcon open={open} />
      </SelectButton>
      {isDesktop ? (
        <Options
          ref={optionsRef}
          open={open}
          options={options}
          selectedValue={selectedValue}
          colorTheme={colorTheme}
          position={{ top, width, left }}
          onChange={handleClickOption as (updatedValue: OptionType<OptionValueType>) => void} // TODO: 개선
          onClose={handleClickSelectButton(false)}
        />
      ) : (
        <OptionsBottomSheet
          open={open}
          title={title}
          options={options}
          selectedValue={selectedValue}
          colorTheme={colorTheme}
          onChange={handleClickOption}
          onClose={handleClickSelectButton(false)}
        />
      )}
    </>
  );
};

export default CustomSelect;

const SelectButton = styled.button`
  ${textStyle}
  ${withIconStyle}
  padding: 1.2rem 1.6rem;
  border: 1px solid ${COLORS.gray500};
  border-radius: 1.6rem;
`;
