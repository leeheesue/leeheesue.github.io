import type { Meta } from '@storybook/react';

import AccordionItem from './Item';
import AccordionList from './List';
import QnaTitle from './QnaTitle';

const meta: Meta<typeof AccordionItem> = {
  title: 'components/Accordion',
  component: AccordionItem,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '아코디언 타이틀(type : ReactNode)',
    },
    content: {
      description: '아코디언 내용(type : ReactNode)',
    },
    type: {
      description: '`qna`값일 경우 좌측에 Q 노출',
    },
    colorTheme: {
      description: 'tour / ticket 컬러 값 (default : tour)',
    },
  },
} satisfies Meta<typeof AccordionItem>;

export default meta;

export const QnaList = () => {
  return (
    <AccordionList>
      <AccordionItem colorTheme="tour" title="안보여요11" content="내용1" type="qna" />
      <AccordionItem colorTheme="tour" title="안보여요22" content="내용2" type="qna" />
      <AccordionItem colorTheme="tour" title="안보여요33" content="내용3" type="qna" />
    </AccordionList>
  );
};

export const FaqList = () => {
  return (
    <AccordionList line>
      <AccordionItem
        colorTheme="ticket"
        title={
          <QnaTitle
            title="[패키지] 예약내역이 없는데요?"
            state="답변대기"
            date="2023.11.15"
            colorTheme="ticket"
          />
        }
        content="내용2"
      />
      <AccordionItem
        colorTheme="ticket"
        title={
          <QnaTitle
            title="[항공] 예약 내역을 확인해 보고 싶은데요"
            state="답변완료"
            date="2023.11.15"
            colorTheme="ticket"
          />
        }
        content="내용2"
      />
      <AccordionItem
        colorTheme="ticket"
        title={
          <QnaTitle
            title="[티켓] 예약 내역을 확인해 보고 싶은데요"
            state="답변완료"
            date="2023.11.15"
            colorTheme="ticket"
          />
        }
        content="내용3"
      />
    </AccordionList>
  );
};
