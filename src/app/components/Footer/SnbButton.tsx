import styled from '@emotion/styled';

export const SnbButton = styled.button`
  display: flex;
  padding-right: 0.2rem;
  color: #333;
  font-size: 13px;
  vertical-align: top;
  cursor: pointer;

  &::after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 4px 0 0 5px;
    border-right: 1px solid #111;
    border-bottom: 1px solid #111;
    transform: rotate(45deg);
    vertical-align: 0.2em;
  }
`;
