import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '@/components';

import { BottomSheet } from './BottomSheet';

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(preState => !preState);
  };
  return (
    <>
      <Button variant="filled" colorTheme="tour" onClick={handleClick}>
        BottomSheet 열기
      </Button>
      <BottomSheet open={open} onClose={handleClick}>
        <p style={{ padding: '2rem 1.6rem' }}>열렸다</p>
      </BottomSheet>
    </>
  );
};
