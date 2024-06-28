import type { Meta, StoryObj } from '@storybook/react';

import NotiBar from './NotiBar';

const meta = {
  title: 'Service Components/NotiBar',
  component: NotiBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotiBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '[이벤트] 7월 투어 여행 후기 당첨자 발표',
    link: '#',
    allNotiLink: '#',
  },
};
