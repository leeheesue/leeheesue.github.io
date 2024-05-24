import styled from '@emotion/styled';

import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { Radio, RadioGroup } from '@/components/Radio';
import type { OptionType, OptionValueType, ThemeType } from '@/components/Select/types';
import { pixelToRem } from '@/shared/utils';

import Heading from '../Heading/Heading';

interface OptionsBottomSheetProps<T> {
  open: boolean;
  title: string;
  options: OptionType<T>[];
  selectedValue: OptionType<T>;
  colorTheme: ThemeType;
  onChange: (updatedValue: OptionType<T>) => void;
  onClose: () => void;
}
const OptionsBottomSheet = <T extends OptionValueType>({
  open,
  title,
  options,
  selectedValue,
  colorTheme,
  onChange,
  onClose,
}: OptionsBottomSheetProps<T>) => {
  const handleChangeSelectedValue = (newValue: string) => {
    const updateValue = options.find(option => String(option.value) === newValue);
    if (updateValue) {
      onChange(updateValue);
    }
  };

  return (
    <BottomSheet delay={100} open={open} onClose={onClose}>
      <ContainerStyle>
        <Heading level={2} fontSize={20}>
          {title}
        </Heading>
        <RadioGroup
          className="radioGroup"
          gap={0}
          value={String(selectedValue.value)}
          onChange={handleChangeSelectedValue}
        >
          {options.map(({ value, label }) => (
            <Radio
              key={String(value)}
              id={String(value)}
              value={String(value)}
              colorTheme={colorTheme}
            >
              {label}
            </Radio>
          ))}
        </RadioGroup>
      </ContainerStyle>
    </BottomSheet>
  );
};

export default OptionsBottomSheet;

const TITLE_AREA = 54;
const ContainerStyle = styled.div`
  h2 {
    padding: 1.9rem 2rem 1.1rem;
  }
  .radioGroup {
    max-height: calc(65vh - ${pixelToRem(TITLE_AREA)});
    overflow: auto;
  }
  .radioOption {
    padding: 0 2rem;
    label {
      padding: 1.35rem 0 1.45rem;
    }
  }
`;
