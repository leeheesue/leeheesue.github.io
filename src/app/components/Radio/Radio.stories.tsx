import React, { useState } from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';

import Radio, { RadioProps } from './Radio';
import RadioOptionGroup, { RadioGroupProps } from './RadioGroup';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Radio>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    id: 'radioItem',
    checked: false,
    children: '라디오 버튼1',
    disabled: false,
    colorTheme: 'tour',
    onChange: () => null,
  },
};

const RadioOptions = [
  { value: '0', label: '안녕하세요' },
  { value: '1', label: '도비는 자유예요' },
  { value: '2', label: '스토리북..' },
  { value: '3', label: '적게 일하고 많이 버세요' },
  { value: '4', label: '가즈아아' },
];

export const RadioGroup: StoryFn<RadioGroupProps<string>> = () => {
  const [selectedValue, setSelectedValue] = useState<string>(RadioOptions[0].value);

  const handleChangeSelectedValue = (newValue: string) => {
    setSelectedValue(newValue);
  };

  return (
    <>
      <RadioOptionGroup value={selectedValue} onChange={handleChangeSelectedValue}>
        {RadioOptions.map(({ value, label }) => (
          <Radio id={String(value)} key={value} value={value} colorTheme="tour">
            {label}
          </Radio>
        ))}
      </RadioOptionGroup>
      <br />
      <br />
      선택된 값 : {selectedValue}
    </>
  );
};

export const MultiLine: StoryFn<RadioProps> = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Radio
      colorTheme="ticket"
      id="radioCustomItem"
      value="abcde"
      checked={value === 'abcde'}
      onChange={handleChange}
    >
      <p>라디오 1</p>
      <p>(두 줄 입력)</p>
    </Radio>
  );
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    id: 'radioItem',
    checked: false,
    children: '라디오 버튼1',
    disabled: true,
    colorTheme: 'tour',
  },
};
