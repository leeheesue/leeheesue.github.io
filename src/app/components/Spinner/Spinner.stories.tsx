import type { Meta, StoryObj } from '@storybook/react';

import { COLORS } from '@/shared/constants';

import Spinner from './Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
};

export const CustomColor: Story = {
  args: {
    open: true,
    color: COLORS.blue500,
  },
};

export const CustomWidth: Story = {
  args: {
    open: true,
    strokeWidth: 8,
  },
};

export const FullScreen: Story = {
  args: {
    open: true,
    position: 'fullScreen',
  },
};
