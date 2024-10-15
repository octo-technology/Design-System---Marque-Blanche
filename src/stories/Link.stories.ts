import type { Meta, StoryObj } from '@storybook/vue3'
import Link from '@/stories/Link.vue'

const meta: Meta<typeof Link> = {
  component: Link
}

export default meta;

type Story = StoryObj<typeof Link>

export const Internal: Story = {
  args: {
    text: "Lien",
    url: '#',
    target: '_self'
  }
}

export const NewTab: Story = {
  args: {
    text: "Lien dans un nouvel onglet",
    url: '#',
    target: "_blank"
  }
}
