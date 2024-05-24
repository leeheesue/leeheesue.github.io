import React, { useState } from 'react';

import type { Meta } from '@storybook/react';

import Button from '@/components/Button/Button';

import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    componentSubtitle:
      '좌우 중앙노출 / 상하 위치 center, bottom이 아닌 별도 위치 값은 class설정 후 style 수정',
    docs: {
      story: { height: '100px' },
    },
  },
};
export default meta;

export const Default = () => {
  return <Toast positionY="center">Toast 기본</Toast>;
};

export const ButtonClick = () => {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <Button onClick={handleButtonClick} variant="filled" colorTheme="tour">
        Toast 확인하기
      </Button>

      {showToast && <Toast>Toast 입니다.</Toast>}
    </div>
  );
};
