import styled from '@emotion/styled';

import { COLORS, Z_INDEX } from '@/shared/constants';

interface ToastProps extends React.ComponentPropsWithoutRef<'div'> {
  children: string;
  positionY?: 'bottom' | 'center';
}

const Toast = ({ className, children, positionY }: ToastProps) => {
  return (
    <ToastContainer className={className || ''} positionY={positionY}>
      {children}
    </ToastContainer>
  );
};

export default Toast;

const ToastContainer = styled.div<{ positionY?: 'bottom' | 'center' }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 1.6rem - 1.6rem);
  max-width: 36.8rem;
  padding: 1.2rem 1.6rem;
  background-color: rgb(28, 28, 30, 0.96);
  box-shadow: 0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.1);
  color: ${COLORS.gray0};
  font-size: 1.5rem;
  border-radius: 0.8rem;
  z-index: ${Z_INDEX.TOAST};

  ${({ positionY }) => {
    if (positionY === 'bottom') {
      return `
        bottom: 1.6rem;
      `;
    }
    if (positionY === 'center') {
      return `
        bottom: auto;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    }
    return null;
  }}
`;
