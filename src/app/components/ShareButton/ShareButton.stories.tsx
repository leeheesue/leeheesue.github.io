import type { Meta, StoryObj } from '@storybook/react';

import ShareButton from './ShareButton';

const meta = {
  title: 'Components/ShareButton',
  component: ShareButton,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shareUrl: {
      description: '링크 복사할 값 전달 (기본값: location.href)',
    },
  },
} satisfies Meta<typeof ShareButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
  },
};

export const DesktopSize: Story = {
  args: {
    size: 28,
  },
};

export const WithLabel: Story = {
  args: {
    size: 16,
    color: 'gray800',
    label: '공유하기',
  },
};
