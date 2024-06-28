import { ReactNode, useEffect, useRef, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Backdrop, { BackdropProps } from '@/components/Backdrop';
import Portal from '@/components/Portal/Portal';
import { COLORS, Z_INDEX } from '@/shared/constants';

interface ActionSheetProps extends BackdropProps {
  open: boolean;
  items: { label: ReactNode; onClick?: () => null }[];
  onClose?: () => void;
}

const DEFAULT_TIMEOUT = 500;

const ActionSheet = ({ items, open, alpha, onClose }: ActionSheetProps) => {
  const [isIn, setIsIn] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    setIsIn(false);
    setTimeout(() => onClose?.(), DEFAULT_TIMEOUT);
  };

  useEffect(() => {
    setIsIn(open);
  }, [open]);

  if (!open) return null;
  return (
    <Portal>
      <Transition nodeRef={nodeRef} in={isIn} timeout={DEFAULT_TIMEOUT}>
        {state => (
          <Wrapper ref={nodeRef} animationState={state}>
            <Backdrop alpha={alpha ?? 0.6} />
            <ActionSheetContainer onClick={handleClose}>
              <div className="content">
                {items.map(({ label, ...itemProps }, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <button type="button" {...itemProps} key={index}>
                    {label}
                  </button>
                ))}
              </div>
            </ActionSheetContainer>
          </Wrapper>
        )}
      </Transition>
    </Portal>
  );
};

export default ActionSheet;

const ActionSheetContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.MODAL};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: transform 0.3s;
  overscroll-behavior-y: none;
  .content {
    width: 100%;
    padding: 2.5rem 0 calc(env(safe-area-inset-bottom) + 3rem);
    list-style: none;
    border-radius: 2rem 2rem 0 0;
    background: ${COLORS.gray0};
  }
  button {
    display: block;
    width: 100%;
    height: 5.3rem;
    padding: 0 2rem;
    text-align: left;
    font-size: 1.6rem;
    line-height: 5.3rem;
    font-weight: 700;
    color: #333;
    > span,
    > p,
    > a {
      display: block;
    }
  }
`;

const Wrapper = styled.div<{ animationState: TransitionStatus }>`
  ${Backdrop} {
    transition: opacity 0.3s;
  }
  ${({ animationState }) => {
    if (animationState.includes('enter')) {
      return css`
        ${Backdrop} {
          opacity: 1;
        }
        ${ActionSheetContainer} {
          transform: translateY(0);
        }
      `;
    }
    return css`
      ${Backdrop} {
        opacity: 0;
      }
      ${ActionSheetContainer} {
        transform: translateY(100%);
      }
    `;
  }}
`;
