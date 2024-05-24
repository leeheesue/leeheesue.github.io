import type { Meta, StoryObj } from '@storybook/react';

import FooterInt from './FooterIntWithCommerce';
import FooterIntDesktop from './FooterIntWithCommerce/DesktopFooter';
import FooterIntMobile from './MobileFooter/index';

const meta = {
  title: 'Footer/IntWithCommerce',
  component: FooterInt,
  parameters: {
    layout: 'centered',
    componentSubtitle: '인터파크트리플 + 커머스 Footer',
    docs: {
      description: {
        component:
          'Default는 반응형 입니다.(Docs view영역이 1000px로 제한되어 있어 정확한 컴포넌트는 좌측 IntWithCommerce/Default 에서 확인하세요)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FooterInt>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Desktop = () => <FooterIntDesktop />;
export const Mobile = () => <FooterIntMobile isWithCommerce />;
