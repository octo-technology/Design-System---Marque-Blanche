import type { Meta, StoryObj } from '@storybook/vue3';
import Alert from '@/stories/Alert.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Alert',
  component: Alert,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: { options: ['toast', 'banner'] },
    type: { options: ['alert', 'success', 'info', 'warning'] },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  args: {
    type: 'alert',
    variant: 'banner',
    text: 'This is an example of a banner alert!'
  },
};


export const Toast: Story = {
  args: {
    type: 'alert',
    variant: 'toast',
    text: 'This is an example of a toast alert !'
  },
};

