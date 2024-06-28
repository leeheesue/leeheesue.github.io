import { ReactNode } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IconArrow } from '@/components/Icon';
import { COLORS } from '@/shared/constants/colors';

interface AccordionItemProps {
  title: ReactNode;
  colorTheme: 'tour' | 'ticket';
  content?: ReactNode;
  type?: string;
  isOpen?: boolean;
  children?: ReactNode;
  onItemClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AccordionItem = ({
  title,
  content,
  colorTheme,
  type,
  isOpen = false,
  children,
  onItemClick,
}: AccordionItemProps) => {
  return (
    <ItemContainer className="item" colorTheme={colorTheme} data-open={isOpen} type={type ?? ''}>
      <button type="button" aria-expanded={isOpen} onClick={onItemClick}>
        <span className="title">{title}</span>

        <span className="arrow">
          <IconArrow size={16} direction="down" type="line" color={COLORS.gray900} />
        </span>
      </button>
      <Content className="content">{content ?? children}</Content>
    </ItemContainer>
  );
};

export default AccordionItem;

const ItemContainer = styled.div<{ type: string; colorTheme: 'tour' | 'ticket' }>`
  font-size: 1.6rem;
  color: ${COLORS.gray900};

  &[data-open='true'] {
    > button {
      font-weight: bold;
    }

    .arrow {
      transform: rotate(180deg);
    }

    .content {
      display: block;

      * {
        word-break: break-all;
      }
    }
  }

  .title {
    text-align: left;
    margin-right: 2rem;
  }

  & > button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.6rem 2rem;
    box-sizing: border-box;
    font-size: 1.6rem;
    color: ${COLORS.gray900};

    @media screen and (min-width: 1024px) {
      padding: 2rem 0;
    }

    ${({ type, colorTheme }) =>
      type === 'qna' &&
      css`
        &::before {
          content: 'Q';
          display: inline-block;
          margin-right: 1.2rem;
          color: ${colorTheme === 'tour' ? COLORS.blue300 : COLORS.purple300};
          font-weight: bold;
        }
      `}

    .arrow {
      display: inline-flex;
      width: 1.6rem;
      height: 1.6rem;
      margin-left: auto;
    }
  }
`;

const Content = styled.div`
  display: none;
  padding: 2.4rem 2rem;
  background-color: ${COLORS.gray100};

  @media screen and (min-width: 1024px) {
    border-radius: 1.6rem;
  }
`;
