import { useState } from 'react';

import type { Meta } from '@storybook/react';

import { Button } from '@/components';

import AlertDialog from './AlertDialog';

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'padded',
    docs: {
      story: { height: '650px' },
    },
  },
  argTypes: {
    children: {
      description: 'type: ReactNode',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>;

export default meta;

export const Default = () => {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);

  return (
    <>
      <Button colorTheme="tour" variant="filled" onClick={() => setAlertDialogOpen(true)}>
        Alert Dialog OPEN
      </Button>

      <AlertDialog
        colorTheme="tour"
        onClose={() => setAlertDialogOpen(false)}
        alertDialogOpen={alertDialogOpen}
      >
        AlertDialog 입니다.
      </AlertDialog>
    </>
  );
};

export const IsTitle = () => {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);

  return (
    <>
      <Button colorTheme="tour" variant="filled" onClick={() => setAlertDialogOpen(true)}>
        Alert Dialog OPEN
      </Button>

      <AlertDialog
        title="예약내역이 없어요"
        colorTheme="tour"
        onClose={() => setAlertDialogOpen(false)}
        alertDialogOpen={alertDialogOpen}
      >
        예약내역이 없어도 1:1문의는 작성 가능해요
      </AlertDialog>
    </>
  );
};

export const Notice = () => {
  const [alertDialogOpen, setAlertDialogOpen] = useState(true);

  return (
    <>
      <Button colorTheme="tour" variant="filled" onClick={() => setAlertDialogOpen(true)}>
        전체공지 OPEN
      </Button>

      <AlertDialog
        title="[공지] 국내 제주항공 시스템 점검 안내"
        colorTheme="tour"
        onClose={() => setAlertDialogOpen(false)}
        alertDialogOpen={alertDialogOpen}
        width={420}
      >
        제주항공 시스템 점검 안내 입니다.
        <br />
        <br />
        <b>점검 일시 : 2024.01.30(화) 00:00 ~ 04:00 (약 4시간)</b>
        <br />
        <br />
        시스템 점검으로 안내 된 시간 동안은 항공권 및 부가 서비스, 예약/발권/취소 불가,모바일 체크인
        사용 불가 합니다.
        <br />
        <br />
        * 서비스 일시 중단 시간은 작업 진행에 따라 다소 변경 될 수 있습니다.
        <br />
        <br />
        이용에 불편 드려 죄송합니다. <br />
        감사합니다.
      </AlertDialog>
    </>
  );
};
