import styled from '@emotion/styled';

import { COLORS } from '@/shared/constants';

interface ListProps {
  list: string[];
  title?: string;
}

const List = ({ list, title }: ListProps) => {
  return (
    <ListContainer>
      {title && <h3>{title}</h3>}
      <ul>
        {list.map((item, index) => {
          return <li key={`list_${index + 1}`}>{item}</li>;
        })}
      </ul>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  h3 {
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
    color: ${COLORS.gray800};
  }

  li {
    position: relative;
    padding-left: 1rem;
    font-size: 1.3rem;
    color: ${COLORS.gray800};
    word-break: keep-all;

    &:not(:first-child) {
      margin-top: 0.4rem;
    }

    &::before {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      content: '·';
    }
  }
`;
