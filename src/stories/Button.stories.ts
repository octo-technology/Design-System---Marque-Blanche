import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { options: ['contained', 'outlined', 'subtle'] },
    type: { options: ['primary', 'destructive'] },
    label: {
      options: ['Sans icone', 'Icone droite', 'Icone gauche'],
      mapping: {
          'Sans icone': { text: 'Button' },
          'Icone droite': { text: 'Button', icon: { name: 'fa fa-smile', position: 'right' } },
          'Icone gauche': { text: 'Button', icon: { name: 'fa fa-smile', position: 'left' } },
      },
    }
  },
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    type: 'primary',
    label: {
      text: 'Button'
    },
  },
};

export const Destructive: Story = {
  args: {
    type: 'destructive',
    label: {
      text: 'Button'
    },
  },
};


export const Large: Story = {
  args: {
    label: {
      text: 'Button'
    },
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: {
      text: 'Button'
    },
    size: 'small',
  },
};

