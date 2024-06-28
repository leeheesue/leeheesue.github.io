import type { Meta, StoryObj } from '@storybook/react';

import CsButton from './CsButton';

const meta = {
  title: 'Service Components/CsButton',
  component: CsButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { text: '티켓 고객센터', link: 'https://ticket.interpark.com/HelpDesk/HelpDeskMain.asp' },
      {
        text: '쇼핑 고객센터',
        link: 'https://shop.interpark.com/ecenter/MainFAQ.do?_method=MainFAQ',
      },
      {
        text: '도서 고객센터',
        link: 'https://book.interpark.com/service/HelpDeskMain.do?_method=initial',
      },
    ],
  },
};
