import type { Meta, StoryObj } from '@storybook/react';

import MobileHeader from './MobileHeader';

const meta = {
  title: 'Components/MobileHeader',
  component: MobileHeader,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: 'padded',
    componentSubtitle: '브라우저 사이즈 1024 이하 일 경우 보임',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '투어 고객센터',
  },
};

export const IsShareBtn: Story = {
  args: {
    children: '자주 묻는 질문',
    isShareBtn: true,
  },
};
