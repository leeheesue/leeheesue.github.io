import type { Meta, StoryObj } from '@storybook/react';

import HelpBox from './HelpBox';

const meta = {
  title: 'Service Components/HelpBox',
  component: HelpBox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HelpBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: { link: '#' },
    iconImg: '/images/helpBox/icon_helpbox01.svg',
    title: '1:1문의하기',
    subTitle: '자세한 상담이 가능해요',
  },
};

export const IsBadge: Story = {
  args: {
    url: { link: '#' },
    iconImg: '/images/helpBox/icon_helpbox01.svg',
    title: '내 문의내역 보기',
    subTitle: '문의한 내용을 확인해보세요',
    badge: { text: '답변도착', colorTheme: 'tour' },
  },
};
