import type { Meta, StoryFn } from '@storybook/vue3'

import Button from '../src/components/Button.vue'

export default {
  component: Button,
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'select'
      },
      options: [
        'number',
        'operation',
        'clear'
      ]
    }
  }
} as Meta<typeof Button>

const Template: StoryFn = (args) => ({
  components: {
    Button
  },
  setup: () => ({
    args
  }),
  template: `
    <Button v-bind="args">
      {{ args.label }}
    </Button>
  `
})

export const Number = Template.bind({})
Number.args = {
  label: '0',
  variant: 'number'
}

export const Operation = Template.bind({})
Operation.args = {
  label: '+',
  variant: 'operation'
}

export const Clear = Template.bind({})
Clear.args = {
  label: 'C',
  variant: 'clear'
}
