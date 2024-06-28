/* eslint-disable react/destructuring-assignment */
import { useRef, useState, useEffect, useCallback, ReactNode } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BREAK_POINT, Z_INDEX } from '@/shared/constants';
import { useOutsideClick } from '@/shared/hooks';
import type { UseTargetPositionReturnType } from '@/shared/hooks/useTargetPosition';
import { pixelToRem } from '@/shared/utils';
import { blindStyle, mediaQuery } from '@/shared/utils/styles';

import Button from '../Button/Button';
import { IconClose } from '../Icon';
import Overlay from '../Overlay/Overlay';
import Portal from '../Portal/Portal';

interface OverlaySettings {
  mobile: boolean;
  desktop: boolean;
}

interface OverlaySettings {
  mobile: boolean;
  desktop: boolean;
}

interface BottomButtonSettings {
  variant: 'filled' | 'outline';
  children: string;
  colorTheme: 'tour' | 'ticket';
  disabled?: boolean;
  onClick?: () => void;
}

interface LayerPopupItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'content'> {
  content: ReactNode;
  modalOpen: boolean;
  title?: string;
  closeOnOverlayClick?: boolean;
  mobileShadow?: boolean;
  desktopWidth?: string;
  desktopHeight?: string;
  mobileHeight?: string; // 수치 | 'full'
  isOverlay?: OverlaySettings;
  targetPosition?: Omit<UseTargetPositionReturnType, 'onChangePosition'>;
  bottomButton?: BottomButtonSettings | BottomButtonSettings[];
  portalId?: string; // Portal 적용을 원할경우 반드시 설정. uniqueId.
  onClose: () => void;
}

const defaultIsOverlay = { mobile: false, desktop: false };
const DEFAULT_TIMEOUT = 350;

const LayerPopup = ({
  title,
  desktopWidth = '60rem',
  desktopHeight = '60rem',
  mobileHeight = '100%',
  mobileShadow = true,
  closeOnOverlayClick = false,
  isOverlay = defaultIsOverlay,
  content,
  className,
  targetPosition,
  bottomButton,
  portalId,
  modalOpen,
  onClose,
}: LayerPopupItemProps) => {
  const modalOutsideRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [isIn, setIsIn] = useState(false);

  useOutsideClick({
    enabled: modalOpen && closeOnOverlayClick,
    ref: modalOutsideRef,
    ownerElementId: portalId,
    handler: () => handleClosePopup(),
  });

  const handleClosePopup = useCallback(() => {
    setIsIn(false);
    setTimeout(() => onClose?.(), DEFAULT_TIMEOUT);
  }, [onClose]);

  useEffect(() => {
    setIsIn(modalOpen);
  }, [modalOpen]);

  return (
    <Transition nodeRef={nodeRef} in={isIn} timeout={350}>
      {state => (
        <Wrapper animationState={state} isOverlay={isOverlay}>
          <Overlay
            alpha={0.4}
            onClick={handleClosePopup}
            className="overlay"
            ref={closeOnOverlayClick ? overlayRef : null}
          />

          <CenterContainer portalEnabled={Boolean(portalId)}>
            <LayerContainer
              ref={modalOutsideRef}
              mobileHeight={mobileHeight}
              desktopWidth={desktopWidth}
              desktopHeight={desktopHeight}
              mobileShadow={mobileShadow}
              {...targetPosition}
              className={className || ''}
            >
              <LayerHeader>
                {title && <h2>{title}</h2>}

                <button onClick={handleClosePopup} type="button">
                  <IconClose />
                  <span className="blind">팝업닫기</span>
                </button>
              </LayerHeader>
              <LayerBody>{content}</LayerBody>

              {bottomButton && (
                <LayerBodyBottom>
                  {Array.isArray(bottomButton) ? (
                    bottomButton.map(button => (
                      <Button key={button.children} {...button} onClick={handleClosePopup} />
                    ))
                  ) : (
                    <Button {...bottomButton} onClick={handleClosePopup} />
                  )}
                </LayerBodyBottom>
              )}
            </LayerContainer>
          </CenterContainer>
        </Wrapper>
      )}
    </Transition>
  );
};

const LayerPopupWrapper = (props: LayerPopupItemProps) => {
  if (!props.modalOpen) return null;

  if (props.portalId) {
    return (
      <Portal portalId={props.portalId}>
        <LayerPopup {...props} />
      </Portal>
    );
  }
  return <LayerPopup {...props} />;
};

export default LayerPopupWrapper;

const Wrapper = styled.div<{
  animationState: TransitionStatus;
  isOverlay: OverlaySettings;
}>`
  ${({ animationState }) => {
    if (animationState.includes('enter')) {
      return css`
        ${Overlay} {
          opacity: 1;
        }
        ${LayerContainer} {
          opacity: 1;
          transform: translateY(0);
        }
      `;
    }
    return css`
      ${Overlay} {
        opacity: 0;
      }
      ${LayerContainer} {
        opacity: 0;
        transform: translateY(100%);
      }
    `;
  }}

  .overlay {
    display: ${({ isOverlay }) => (isOverlay.mobile ? 'block' : 'none')};
    transition: transform 0.2s;

    @media (min-width: ${BREAK_POINT.desktop}) {
      display: ${({ isOverlay }) => (isOverlay.desktop ? 'block' : 'none')};
    }
  }
`;

const CenterContainer = styled.div<{ portalEnabled: boolean }>`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${Z_INDEX.MODAL};

  ${({ portalEnabled }) =>
    !portalEnabled &&
    css`
      @media (min-width: ${BREAK_POINT.desktop}) {
        position: absolute;
      }
    `}
`;

const desktopPositionStyle = ({ top, right }: { top?: number; right?: number }) => {
  if (typeof top === 'undefined' || typeof right === 'undefined') return null;

  return css`
    position: absolute;
    right: ${pixelToRem(right)};
    top: ${pixelToRem(top)};
  `;
};

const LayerContainer = styled.div<{
  desktopWidth: string;
  desktopHeight: string;
  mobileHeight: string;
  mobileShadow: boolean;
  top?: number;
  left?: number;
}>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overscroll-behavior-y: none;
  background: var(--color-white);
  transition: all 0.2s;
  box-shadow: ${({ mobileShadow }) => (mobileShadow ? '0 0 1rem 0 rgba(0, 0, 0, 0.3)' : '0')};
  border-radius: ${({ mobileShadow }) => (mobileShadow ? '2.4rem 2.4rem 0 0' : '0')};
  overflow: hidden;

  ${({ mobileHeight }) => mobileHeightStyle(mobileHeight)};
  @media (min-width: ${BREAK_POINT.desktop}) {
    position: fixed;
    left: auto;
    right: auto;
    bottom: auto;
    width: ${({ desktopWidth }) => desktopWidth || '60rem'};
    max-height: calc(100% - 9.6rem);
    height: ${({ desktopHeight }) => desktopHeight || '60rem'};
    padding-bottom: 2rem;
    box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.3);
    border-radius: 1.6rem;
    box-sizing: border-box;
    ${desktopPositionStyle};
  }
  .blind {
    ${blindStyle}
  }
`;

const mobileHeightStyle = (mobileHeight: string) => {
  if (mobileHeight === 'full') {
    return css`
      height: 100%;
      max-height: 100%;
    `;
  }
  return css`
    height: ${mobileHeight};
    max-height: 90%;
  `;
};

const LayerHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.9rem 5rem 1.1rem 2rem;
  background: var(--color-white);
  min-height: 6rem;

  ${mediaQuery(BREAK_POINT.desktop)(css`
    padding: 1.9rem 2rem 0.4rem 2rem;
    border-radius: 1.6rem 1.6rem 0 0;
  `)}

  h2 {
    font-size: 2rem;

    ${mediaQuery(BREAK_POINT.desktop)(css`
      font-size: 1.8rem;
    `)}
  }

  button {
    position: absolute;
    right: 2rem;
    bottom: 0.4rem;
  }

  .blind {
    ${blindStyle}
  }
`;

const LayerBody = styled.div`
  flex: 1;
  z-index: 1;
  position: relative;
  overflow-y: auto;
  background: var(--color-white);
  padding: 1.2rem 2rem calc(env(safe-area-inset-bottom) + 1.2rem);

  ${mediaQuery(BREAK_POINT.desktop)(css`
    padding: 1.2rem 2rem 0;
  `)}
`;

const LayerBodyBottom = styled.div`
  display: flex;
  padding: 2rem;

  button + button {
    margin-left: 0.8rem;
  }
`;
