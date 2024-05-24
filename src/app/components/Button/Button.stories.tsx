import type { Meta, StoryObj } from '@storybook/react';

import { IconArrow } from '@/components/Icon';

import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '버튼',
    height: 52,
    variant: 'outline',
  },
};

export const IsLink: Story = {
  args: {
    children: '링크있음',
    height: 52,
    variant: 'filled',
    colorTheme: 'tour',
    url: 'http://www.interpark.com',
    target: '_blank',
  },
};

export const IsIcon: Story = {
  args: {
    children: '자주 묻는 질문 전체보기',
    height: 48,
    variant: 'outline',
    startIcon: <IconArrow size={16} direction="right" type="line" color="#1C1C1E" />,
    endIcon: <IconArrow size={16} direction="right" type="line" color="#1C1C1E" />,
  },
};
