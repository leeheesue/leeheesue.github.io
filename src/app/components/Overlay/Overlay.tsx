import styled from '@emotion/styled';

import { Z_INDEX } from '@/shared/constants';

export type AlphaRange = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
export interface OverlayProps {
  alpha?: AlphaRange;
}

const Overlay = styled.div<OverlayProps>`
  position: fixed;
  inset: 0;
  z-index: ${Z_INDEX.BACKDROP};
  background: ${props => `rgba(0, 0, 0, ${props.alpha ?? 0})`};
`;

export default Overlay;
