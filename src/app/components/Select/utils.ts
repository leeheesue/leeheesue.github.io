import { css } from '@emotion/react';

import { COLORS } from '@/shared/constants';

export const textStyle = css`
  color: ${COLORS.gray900};
  font-size: 1.6rem;
  line-height: 1.5;
`;
export const withIconStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
