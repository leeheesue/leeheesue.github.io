import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { LayerPopup } from '@/components';

import CsNumber from './CsNumber';

const meta = {
  title: 'Service Components/CsNumber',
  component: CsNumber,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CsNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tour = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <CsNumber
        service="투어"
        title="전화 상담"
        subTitle="운영시간 확인 및 전화상담이 가능해요"
        onClick={() => setModalOpen(true)}
      />
      <LayerPopup
        onClose={() => setModalOpen(false)}
        modalOpen={modalOpen}
        title="투어 전화상담"
        content="얍"
      />
    </>
  );
};

export const Ticket: Story = {
  args: {
    service: '티켓',
    title: '1544-1555',
  },
};
