import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'number' },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 1,
    children: '제목h1입니다.',
  },
};

export const ChangeFontSize: Story = {
  args: {
    level: 1,
    children: 'h1이지만 fontSize 별도 설정.',
    fontSize: 50,
  },
};

export const TextAlign: Story = {
  args: {
    level: 1,
    children: '정렬 center',
    align: 'center',
  },
};
