import { ReactNode, useEffect, useRef, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Overlay, { OverlayProps } from '@/components/Overlay/Overlay';
import Portal from '@/components/Portal/Portal';
import { COLORS, Z_INDEX } from '@/shared/constants';

interface BottomSheetProps extends OverlayProps {
  open: boolean;
  children: ReactNode;
  delay?: number;
  onClose?: () => void;
}

const DEFAULT_TIMEOUT = 350;

export const BottomSheet = ({
  open,
  alpha,
  delay = DEFAULT_TIMEOUT,
  children,
  onClose,
}: BottomSheetProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [isIn, setIsIn] = useState(false);

  const handleClose = () => {
    setIsIn(false);
    setTimeout(() => onClose?.(), delay);
  };

  useEffect(() => {
    setIsIn(open);
  }, [open]);

  if (!open) return null;
  return (
    <Portal>
      <Transition nodeRef={nodeRef} in={isIn} timeout={delay}>
        {state => (
          <Wrapper ref={nodeRef} animationState={state}>
            <Overlay alpha={alpha ?? 0.6} onClick={handleClose} />
            <BottomSheetContainer onClick={handleClose}>
              <div className="content">{children}</div>
            </BottomSheetContainer>
          </Wrapper>
        )}
      </Transition>
    </Portal>
  );
};

export default BottomSheet;

const BottomSheetContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 80vh;
  z-index: ${Z_INDEX.MODAL};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: transform 0.2s;
  overscroll-behavior-y: none;

  .content {
    width: 100%;
    padding-bottom: calc(env(safe-area-inset-bottom) + 0.8rem);
    list-style: none;
    border-radius: 2rem 2rem 0 0;
    background: ${COLORS.gray0};
  }
`;

const Wrapper = styled.div<{ animationState: TransitionStatus }>`
  ${Overlay} {
    transition: opacity 0.2s;
  }
  ${({ animationState }) => {
    if (animationState.includes('enter')) {
      return css`
        ${Overlay} {
          opacity: 1;
        }
        ${BottomSheetContainer} {
          transform: translateY(0);
        }
      `;
    }
    return css`
      ${Overlay} {
        opacity: 0;
      }
      ${BottomSheetContainer} {
        transform: translateY(100%);
      }
    `;
  }}
`;
