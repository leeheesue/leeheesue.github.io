import { useState, useRef } from 'react';

import type { Meta } from '@storybook/react';

import { Button } from '@/components';
import { useTargetPosition } from '@/shared/hooks';

import LayerPopup from './LayerPopup';

const meta: Meta<typeof LayerPopup> = {
  title: 'Components/LayerPopup',
  component: LayerPopup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      story: { height: '650px' },
    },
  },
  argTypes: {
    closeOnOverlayClick: {
      description: '팝업 바깥 영역 click 하면 레이어 OFF기능 사용여부',
    },
    desktopWidth: {
      description: '최대 1000px',
    },
    desktopHeight: {
      description: '기본 600px',
    },
    mobileHeight: {
      description: '모바일 팝업 높이 값(기본 100%)',
    },
    mobileShadow: {
      description: '모바일 full 사이즈로 상단에 그림자 없을 경우 false',
    },
  },
};
export default meta;

export const Default = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setModalOpen(true)}>
        레이어팝업 OPEN
      </Button>

      <LayerPopup
        onClose={() => setModalOpen(false)}
        modalOpen={modalOpen}
        title="title 영역"
        content={<Button variant="outline">TEST</Button>}
      />
    </>
  );
};

export const IsBottomButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setModalOpen(true)}>
        레이어팝업 OPEN
      </Button>

      <LayerPopup
        onClose={() => setModalOpen(false)}
        modalOpen={modalOpen}
        title="title 영역"
        content={<div style={{ height: '1000px' }}>스크롤 영역</div>}
        bottomButton={{
          children: '확인',
          variant: 'filled',
          colorTheme: 'tour',
        }}
      />
    </>
  );
};

export const OutsideClickClose = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setModalOpen(true)}>
        레이어팝업 OPEN
      </Button>
      <LayerPopup
        onClose={() => setModalOpen(false)}
        modalOpen={modalOpen}
        title="title 영역"
        closeOnOverlayClick
        content="팝업 외 영역 click시 팝업 OFF(팝업사이즈 미 설정시 Default)"
      />
    </>
  );
};

export const CustomSize = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setModalOpen(true)}>
        레이어팝업 OPEN
      </Button>
      <LayerPopup
        onClose={() => setModalOpen(false)}
        modalOpen={modalOpen}
        title="title 영역"
        content="desktopWidth: 1000px / mobileHeight: 50vh"
        desktopWidth="100rem"
        mobileHeight="50vh"
      />
    </>
  );
};

export const MobileFullPopup = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setModalOpen(true)}>
        레이어팝업 OPEN
      </Button>
      <LayerPopup
        onClose={() => setModalOpen(false)}
        modalOpen={modalOpen}
        title="title 영역"
        content="mobileHeight: 100% / mobileShadow: false"
        mobileHeight="full"
        mobileShadow={false}
      />
    </>
  );
};

export const CustomSizeWithPosition = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const layerPopupButtonRef = useRef<HTMLButtonElement>(null);
  const buttonPosition = useTargetPosition(layerPopupButtonRef);

  return (
    <div style={{ width: '500px', margin: '100px 0 0 300px' }}>
      <button
        ref={layerPopupButtonRef}
        onClick={() => setModalOpen(true)}
        type="button"
        style={{ background: '#8E43E7', color: '#fff', padding: '1rem' }}
      >
        PC팝업이 해당 버튼 위치에 노출됩니다.
      </button>
      <LayerPopup
        className="testLayer"
        onClose={() => setModalOpen(false)}
        modalOpen={modalOpen}
        title="title 영역"
        content="PC position, size 설정 / Overlay: MO(O) PC(X)"
        desktopWidth="40rem"
        desktopHeight="14.6rem"
        mobileHeight="21.2rem"
        isOverlay={{ mobile: true, desktop: false }}
        closeOnOverlayClick
        mobileShadow
        targetPosition={buttonPosition}
      />
    </div>
  );
};
