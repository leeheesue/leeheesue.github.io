import type { Meta, StoryObj } from '@storybook/react';

import RelatedHelp from './RelatedHelp';

const meta = {
  title: 'Service Components/RelatedHelp',
  component: RelatedHelp,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RelatedHelp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorTheme: 'tour',
    list: [
      {
        title: '대기예약은 예약이 된건가요?',
        entityId: 123,
      },
      {
        title: '대기 예약 시 취소는 어떻게 하나요?',
        entityId: 123,
      },
    ],
  },
};
