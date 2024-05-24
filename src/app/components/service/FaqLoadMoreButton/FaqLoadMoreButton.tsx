import { ComponentPropsWithoutRef } from 'react';

import styled from '@emotion/styled';

import { Button, IconArrow, Spinner } from '@/components';
import { BREAK_POINT, COLORS } from '@/shared/constants';

interface FaqLoadMoreButtonProps extends ComponentPropsWithoutRef<'div'> {
  currentItemsCount: number;
  totalItemCount: number;
  isFetching: boolean;
  onClickLoadMore: () => void;
}
const FaqLoadMoreButton = ({
  currentItemsCount,
  totalItemCount,
  isFetching,
  onClickLoadMore,
  ...props
}: FaqLoadMoreButtonProps) => {
  return (
    <Wrapper {...props}>
      {isFetching ? (
        <Button onClick={onClickLoadMore}>
          <Spinner open size={24} color={COLORS.blue500} />
        </Button>
      ) : (
        <Button
          endIcon={<IconArrow size={16} direction="down" type="line" color={COLORS.gray900} />}
          onClick={onClickLoadMore}
        >
          더보기({currentItemsCount}/{totalItemCount})
        </Button>
      )}
    </Wrapper>
  );
};

export default FaqLoadMoreButton;

const Wrapper = styled.div`
  margin-top: 1.2rem;
  padding: 0 2rem;

  @media (min-width: ${BREAK_POINT.desktop}) {
    padding: 0;
    width: 33.5rem;
    margin: 0.8rem auto 0;
  }
`;
