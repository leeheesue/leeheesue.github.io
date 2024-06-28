import type { Meta, StoryObj } from '@storybook/react';

import FooterInt from './FooterInt';
import FooterIntDesktop from './FooterInt/DesktopFooter';
import FooterIntMobile from './MobileFooter';

export default {
  title: 'Footer/Int',
  component: FooterInt,
  parameters: {
    componentSubtitle: '인터파크트리플 Footer',
    docs: {
      description: {
        component:
          'Default는 반응형 입니다.(Docs view영역이 1000px로 제한되어 있어 정확한 컴포넌트는 좌측 Int/Default 에서 확인하세요)',
      },
    },
  },
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj<typeof FooterInt> = {};

export const Desktop = () => <FooterIntDesktop />;
export const Mobile = () => <FooterIntMobile />;
