import { useMemo, useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import type { OptionType } from '@/components/Select/types';

import { CustomSelect } from './CustomSelect';
import Select from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { height: '650px' },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

const DEFAULT_VALUE = { label: '전체', value: -1 };

export const Default: StoryObj<typeof meta> = {
  args: {
    label: '기본 selectbox',
    labelID: 'selectbox',
    options: [
      { value: '1', label: '1번' },
      { value: '2', label: '2번' },
    ],
    defaultOption: '문의 유형을 선택해주세요',
    required: true,
  },
};

export const Custom: StoryFn<typeof meta> = () => {
  const [selectedValue, setSelectedValue] = useState<OptionType<number>>(DEFAULT_VALUE);

  const options = useMemo(() => optionList(), []);

  const handleChangeOption = (selectValue: OptionType<number>) => {
    setSelectedValue(selectValue);
  };

  return (
    <CustomSelect
      title="세부유형 선택"
      colorTheme="tour"
      selectedValue={selectedValue}
      options={options}
      onChange={handleChangeOption}
    />
  );
};

function optionList() {
  const numbers = Array.from({ length: 10 }).map((_, index) => ({
    label: `${index}번`,
    value: index,
  }));
  return [DEFAULT_VALUE, ...numbers];
}
