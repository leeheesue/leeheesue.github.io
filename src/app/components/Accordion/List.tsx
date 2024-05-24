import React, { PropsWithChildren, ReactElement, ReactNode, useState, useEffect } from 'react';

import styled from '@emotion/styled';

import { GRAY_COLORS } from '@/shared/constants';

type AccordionListProps = PropsWithChildren<{
  line?: boolean;
  setItemIndex?: number;
  onItemClick?: (index: number) => void;
}>;

const AccordionList = ({
  line = false,
  children,
  setItemIndex = -1,
  onItemClick,
}: AccordionListProps) => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const handleItemClick = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
    if (onItemClick) {
      onItemClick(index);
    }
  };

  useEffect(() => {
    setOpenIndex(setItemIndex);
  }, [setItemIndex]);

  return (
    <List isLine={line}>
      {React.Children.map(children, (child: ReactNode, index: number) =>
        React.cloneElement(child as ReactElement, {
          onItemClick: () => handleItemClick(index),
          isOpen: openIndex === index,
        })
      )}
    </List>
  );
};

export default AccordionList;

const List = styled.div<{ isLine: boolean }>`
  .item {
    border-bottom: ${props => (props.isLine ? `.1rem solid ${GRAY_COLORS.gray400}` : 'none')};

    &[data-open='true'],
    &:last-child {
      border-bottom: none;
    }
  }
`;
