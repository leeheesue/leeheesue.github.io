import type { Meta, StoryObj } from '@storybook/react';

import FaqForm from './FaqForm';

const meta = {
  title: 'Service Components/FaqForm',
  component: FaqForm,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FaqForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    service: 'tour',
    description: 'HTML 영역',
    reservationYn: 'Y',
    relatedHelp: [
      { title: '대기22 예약은 예약이 된건가요?', entityId: 123 },
      { title: '대기 예약 시 취소는 어떻게 하나요?', entityId: 123 },
    ],
    relatedForm: [{ title: '해외 항공 탑승객 변경(이름)', entityId: 123 }],
  },
};
