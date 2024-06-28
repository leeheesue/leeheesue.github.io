import styled from '@emotion/styled';

import Badge from '@/components/service/Badge/Badge';
import { COLORS } from '@/shared/constants';

interface AccordionItemProps {
  title: string;
  state: '답변완료' | '답변대기' | '처리중';
  date: string;
  colorTheme: 'tour' | 'ticket';
}

const QnaTitle = ({ title, state, date, colorTheme }: AccordionItemProps) => {
  return (
    <QnaTitleContainer state={state} colorTheme={colorTheme}>
      <span className="title">{title}</span>
      <span className="info">
        <Badge colorTheme={colorTheme} label={state} />
        <span className="date">{date}</span>
      </span>
    </QnaTitleContainer>
  );
};

export default QnaTitle;

const QnaTitleContainer = styled.div<{ state: string; colorTheme: 'tour' | 'ticket' }>`
  .title {
    font-size: 1.6rem;
    color: ${COLORS.gray900};
  }

  .info {
    display: flex;
    align-items: center;
    margin-top: 0.8rem;

    .date {
      margin-left: 0.8rem;
      color: ${COLORS.gray700};
      font-size: 1.4rem;
      font-weight: normal;
    }
  }

  i {
    height: 2.4rem;
    line-height: 2.4rem;
    padding: 0 0.8rem;
    font-size: 1.2rem;
    font-weight: bold;
    font-style: normal;
    border-radius: 0.8rem;
    background: ${COLORS.gray300};
    color: ${COLORS.gray800};

    ${({ state, colorTheme }) =>
      state === '답변완료' &&
      `
    background: #e9f0fe;
    color: ${colorTheme === 'tour' ? COLORS.blue500 : COLORS.purple500};
  `}
  }
`;
