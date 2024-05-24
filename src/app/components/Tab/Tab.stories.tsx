import { useState } from 'react';

import type { Meta } from '@storybook/react';

import Chip from '@/components/Chip/Chip';
import ChipList from '@/components/Chip/ChipList';

import Tab from './Tab';
import TabPanel from './TabPanel';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;

export const Default = () => {
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭의 index

  const handleChipClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tab>
      <ChipList isSlide>
        {['TOP Q&A', '항공', '패키지', '숙소', '투어·티켓', '회원·공통'].map(
          (item: string, index: number) => (
            <Chip
              key={`item_${index + 1}`}
              onClick={() => handleChipClick(index)}
              selected={activeTab === index}
            >
              {item}
            </Chip>
          )
        )}
      </ChipList>

      <TabPanel isActive={activeTab === 0}>1패널</TabPanel>
      <TabPanel isActive={activeTab === 1}>2패널</TabPanel>
      <TabPanel isActive={activeTab === 2}>3패널</TabPanel>
      <TabPanel isActive={activeTab === 3}>4패널</TabPanel>
      <TabPanel isActive={activeTab === 4}>5패널</TabPanel>
      <TabPanel isActive={activeTab === 5}>6패널</TabPanel>
    </Tab>
  );
};
