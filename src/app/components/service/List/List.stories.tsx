import type { Meta, StoryObj } from '@storybook/react';

import List from './List';

const meta = {
  title: 'Service Components/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '안내사항',
    list: [
      '로그인 후 등록한 문의에 한해 인터파크 고객센터 "내 문의내역" 에서 확인할 수 있어요.',
      '비회원 문의 또는 로그인 하지 않은 상태의 1:1 문의 답변은 메일로만 전달되니 회원이시라면 로그인 후 문의해주세요.',
    ],
  },
};
