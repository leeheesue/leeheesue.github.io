import type { Meta, StoryObj } from '@storybook/react';

import FileUpload from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Text Form/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      story: { height: '400px' },
    },
  },
  argTypes: {
    maxFileSize: {
      description: 'MB 기준 단위',
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelID: 'file',
    label: '첨부파일',
    colorTheme: 'tour',
  },
};
