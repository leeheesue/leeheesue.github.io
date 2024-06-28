import type { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';
import ChipList from './ChipList';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    selected: {
      description: 'link가 있을 경우 사용X',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '📍 모이는 장소',
    link: 'https://interpark.com',
  },
};

export const DefaultList = () => {
  return (
    <ChipList>
      {['📍 모이는 장소', '분쟁해결기준', '저작권 고지', '국내 여행 약관', '국외 여행 약관'].map(
        (item: string, index: number) => (
          <Chip link="#" key={`item_${index + 1}`}>
            {item}
          </Chip>
        )
      )}
    </ChipList>
  );
};

export const Slide = () => {
  return (
    <ChipList isSlide>
      {['TOP Q&A', '항공', '패키지', '숙소', '투어·티켓', '회원·공통'].map(
        (item: string, index: number) => (
          <Chip key={`item_${index + 1}`} selected={index === 0}>
            {item}
          </Chip>
        )
      )}
    </ChipList>
  );
};
