import { useState, useRef, useEffect, ComponentPropsWithoutRef } from 'react';

import { IconShare } from '@/components/Icon';
import LayerPopup from '@/components/LayerPopup/LayerPopup';
import { DEFAULT_PORTAL_ID } from '@/components/Portal/Portal';
import Share from '@/components/ShareButton/Share';
import Toast from '@/components/Toast/Toast';
import { COLORS } from '@/shared/constants';
import { useTargetPosition } from '@/shared/hooks';
import styled from 'styled-components';

interface ShareButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: number;
  color?: keyof typeof COLORS;
  label?: string;
  shareLayerClassName?: string;
  portalEnabled?: boolean;
  shareUrl?: string;
}

const ShareButton = ({
  color = 'gray900',
  size = 24,
  label,
  shareUrl,
  shareLayerClassName,
  portalEnabled = true,
  ...props
}: ShareButtonProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const buttonRef = useRef(null);
  const { onChangePosition, top, right, width } = useTargetPosition(buttonRef);

  const handleClickShare = () => {
    onChangePosition();
    setModalOpen(true);
  };

  const handleToast = () => {
    if (showToast) return;

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  useEffect(() => {
    const layerPopup = document.querySelector(`.${shareLayerClassName}`);

    if (!layerPopup) return;
    layerPopup.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [modalOpen]);

  return (
    <>
      <ButtonContainer
        {...props}
        type="button"
        title="공유하기"
        aria-label="공유하기"
        color={color}
        ref={buttonRef}
        onClick={handleClickShare}
      >
        <IconShare size={size} color={COLORS[color]} />
        {label && <span>{label}</span>}
      </ButtonContainer>

      <LayerPopup
        closeOnOverlayClick
        mobileShadow
        className={shareLayerClassName}
        title="공유하기"
        portalId={portalEnabled ? DEFAULT_PORTAL_ID : undefined}
        modalOpen={modalOpen}
        content={<Share handleToast={handleToast} shareUrl={shareUrl} />}
        desktopWidth="40rem"
        desktopHeight="17.6rem"
        mobileHeight="auto"
        isOverlay={{ mobile: true, desktop: false }}
        targetPosition={{ top, right, width }}
        onClose={() => setModalOpen(false)}
      />

      {showToast && (
        <Toast className="copyToast" positionY="bottom">
          URL 복사가 완료되었습니다.
        </Toast>
      )}
    </>
  );
};

export default ShareButton;

const ButtonContainer = styled.button<{ color: keyof typeof COLORS }>`
  display: inline-flex;
  align-items: center;
  span {
    display: inline-block;
    margin-left: 0.4rem;
    color: ${({ color }) => COLORS[color]};
    font-size: 1.4rem;
  }
`;
