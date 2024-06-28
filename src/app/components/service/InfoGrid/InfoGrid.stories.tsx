import type { Meta, StoryObj } from '@storybook/react';

import InfoGrid from './InfoGrid';

const meta = {
  title: 'Service Components/InfoGrid',
  component: InfoGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InfoGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '이용예정',
    data: '20202020',
  },
};
