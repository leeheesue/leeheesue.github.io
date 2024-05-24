import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

const meta = {
  title: 'Service Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    componentSubtitle: 'label 값 "답변완료"일 경우 colorTheme값에 따라 컬러 값 지정',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '답변대기, 처리중, 답변완료',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '답변대기',
    colorTheme: 'tour',
  },
};
