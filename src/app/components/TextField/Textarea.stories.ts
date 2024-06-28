import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

const meta = {
  title: 'Text Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'ex',
    width: 335,
    height: 200,
    maxLength: 5000,
    defaultValue:
      '부정 예약 소명 관련 문의 내용과 함께 아래 정보를 입력해주세요.\n • 예약자 : \n • 연락처 : \n • 공연명 : \n • 공연일 : ',
    placeholder: '추가 문의사항을 남겨주세요',
  },
};

export const IsLabel: Story = {
  args: {
    name: 'ex',
    width: 335,
    height: 200,
    label: '문의 내용',
    labelID: 'id',
    required: true,
    maxLength: 5000,
    placeholder: '추가 문의사항을 남겨주세요',
  },
};
