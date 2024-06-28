import styled from '@emotion/styled';

import { COLORS } from '@/shared/constants';

interface RelatedHelpProps {
  list: { entityId: number; title: string; onClick?: (entityId: number) => void }[];
  colorTheme: 'tour' | 'ticket';
}

const RelatedHelp = ({ list, colorTheme }: RelatedHelpProps) => {
  return (
    <RelatedHelpList colorTheme={colorTheme}>
      {list.map(({ entityId, title, onClick }) => {
        return (
          <li key={entityId}>
            <button type="button" onClick={() => onClick?.(entityId)}>
              {title}
            </button>
          </li>
        );
      })}
    </RelatedHelpList>
  );
};

export default RelatedHelp;

const RelatedHelpList = styled.ul<{ colorTheme: 'tour' | 'ticket' }>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  li {
    button {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: ${COLORS.gray900};

      &::before {
        content: 'Q';
        display: inline-block;
        margin-right: 0.6rem;
        color: ${props => (props.colorTheme === 'tour' ? COLORS.blue300 : COLORS.purple300)};
        font-weight: bold;
      }

      &::after {
        content: '';
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        margin-left: 0.2rem;
        background: url('/images/icon_arrow.svg') no-repeat;
      }
    }
  }
`;
