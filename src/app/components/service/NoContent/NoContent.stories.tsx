import type { Meta, StoryObj } from '@storybook/react';

import NoContent from './NoContent';

const meta = {
  title: 'Service Components/NoContent',
  component: NoContent,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NoContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconImg: '/images/NoContent/icon_nocontent01.svg',
    title: '문의내역이 없어요.',
    subtext: '궁금하신 사항은 1:1 문의하기를 이용해주세요.',
  },
};

export const NoResult: Story = {
  args: {
    iconImg: '/images/NoContent/icon_nocontent02.svg',
    title: '검색 결과가 없어요.',
    subtext: '다른 검색어를 입력해 주세요.',
  },
};
