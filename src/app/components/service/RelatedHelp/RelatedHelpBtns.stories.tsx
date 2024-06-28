import type { Meta, StoryObj } from '@storybook/react';

import RelatedHelpBtns from './RelatedHelpBtns';

const meta = {
  title: 'Service Components/RelatedHelpBtns',
  component: RelatedHelpBtns,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RelatedHelpBtns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    service: 'tour',
  },
};
