import type { Meta, StoryObj } from '@storybook/react';

import Banner from './Banner';

const meta = {
  title: 'Service Components/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '이용안내 배너 문구',
    iconUrl: '/images/banner/icon_banner.svg',
    bgColor: '#ffefee',
    link: '#',
  },
};
