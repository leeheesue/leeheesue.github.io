import React, { useState } from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { IconArrow } from '@/components/Icon';

import Checkbox, { CheckboxProps } from './Checkbox';
import CheckboxGroupComponent, { CheckboxGroupProps } from './CheckboxGroup';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Default: StoryFn<CheckboxProps> = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(prevVale => (prevVale === target.value ? '' : target.value));
  };

  return (
    <Checkbox
      colorTheme="tour"
      id="checkboxCustomItem1"
      value="abcde"
      checked={value === 'abcde'}
      onChange={handleChange}
    >
      체크박스
    </Checkbox>
  );
};

export const SquareStyle: StoryFn<CheckboxProps> = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(prevVale => (prevVale === target.value ? '' : target.value));
  };

  return (
    <Checkbox
      colorTheme="tour"
      variant="square"
      id="checkboxCustomItem2"
      value="abcde"
      checked={value === 'abcde'}
      onChange={handleChange}
    >
      사각형 체크박스
    </Checkbox>
  );
};

export const WithClickableItem: StoryFn<CheckboxProps> = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(prevVale => (prevVale === target.value ? '' : target.value));
  };

  const handleClickCheckboxItem = () => {
    alert('아이템 클릭!');
  };

  return (
    <Checkbox
      colorTheme="tour"
      id="checkboxCustomItem3"
      value="abcde"
      checked={value === 'abcde'}
      onChange={handleChange}
    >
      <button
        type="button"
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={handleClickCheckboxItem}
      >
        <span style={{ marginRight: '.4rem' }}>(필수) 개인정보 수집・이용 동의 </span>
        <IconArrow direction="right" size={12} type="line" />
      </button>
    </Checkbox>
  );
};

const CHECKBOX_OPTIONS = [
  { value: '0', label: '안녕하세요' },
  { value: '1', label: '도비는 자유예요' },
  { value: '2', label: '스토리북..' },
  { value: '3', label: '적게 일하고 많이 버세요' },
];

export const CheckboxGroup: StoryFn<CheckboxGroupProps<string[]>> = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([CHECKBOX_OPTIONS[0].value]);

  const handleChangeSelectedValue = (newValue: string) => {
    setSelectedValues(prevValue => {
      const isSelected = prevValue.some(value => value === newValue);
      if (isSelected) {
        // 값이 이미 배열에 있으면 제거
        return prevValue.filter(value => value !== newValue);
      }
      // 값이 배열에 없으면 추가
      return [...prevValue, newValue];
    });
  };

  return (
    <CheckboxGroupComponent values={selectedValues} onChange={handleChangeSelectedValue}>
      {CHECKBOX_OPTIONS.map(({ value, label }) => (
        <Checkbox id={String(value)} key={value} value={value} colorTheme="tour">
          {label}
          {value}
        </Checkbox>
      ))}
    </CheckboxGroupComponent>
  );
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    id: 'checkboxItem2',
    checked: false,
    children: '체크 버튼',
    disabled: true,
    colorTheme: 'tour',
  },
};
