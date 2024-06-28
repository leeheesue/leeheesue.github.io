import { useCallback, ReactNode } from 'react';

import styled from '@emotion/styled';

import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import Overlay from '@/components/Overlay/Overlay';
import { Z_INDEX, COLORS } from '@/shared/constants';
import { pixelToRem } from '@/shared/utils';

interface AlertDialogProps {
  children: ReactNode;
  colorTheme: 'tour' | 'ticket';
  alertDialogOpen: boolean;
  onClose: () => void;
  title?: string;
  width?: number;
}

const AlertDialog = ({
  title,
  children,
  colorTheme,
  alertDialogOpen,
  onClose,
  width = 320,
}: AlertDialogProps) => {
  const handleClosePopup = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!alertDialogOpen) return null;
  return (
    <AlertDialogContainer className={alertDialogOpen ? 'visible' : ''}>
      <Overlay alpha={0.5} />
      <Inner width={width}>
        {title && (
          <Heading level={3} fontSize={20}>
            {title}
          </Heading>
        )}
        <Content colorTheme={colorTheme}>{children}</Content>
        <Button height={52} variant="filled" colorTheme={colorTheme} onClick={handleClosePopup}>
          확인
        </Button>
      </Inner>
    </AlertDialogContainer>
  );
};

export default AlertDialog;

const AlertDialogContainer = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  inset: 0;
  z-index: ${Z_INDEX.MODAL};

  &.visible {
    display: flex;
  }
`;

const Inner = styled.div<{ width: number }>`
  width: 32rem;
  padding: 2rem;
  background: ${COLORS.gray0};
  border-radius: 1.6rem;
  z-index: ${Z_INDEX.BACKDROP};

  @media (min-width: 1024px) {
    width: ${props => pixelToRem(props.width)};
  }

  h3 {
    margin: 1.2rem 0 0.8rem;
    color: ${COLORS.gray900};
  }

  button {
    margin-top: 2rem;
  }
`;

const Content = styled.div<{ colorTheme: string }>`
  font-size: 1.6rem;
  color: ${COLORS.gray800};
  word-break: keep-all;

  b {
    color: ${props => (props.colorTheme === 'tour' ? COLORS.blue500 : COLORS.purple500)};
  }
`;
