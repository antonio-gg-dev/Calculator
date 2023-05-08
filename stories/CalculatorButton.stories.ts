import type { Meta, StoryFn } from '@storybook/vue3'

import CalculatorButton from '../src/components/CalculatorButton.vue'

export default {
  component: CalculatorButton,
  argTypes: {
    default: {
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
} as Meta<typeof CalculatorButton>

const Template: StoryFn = (args) => ({
  components: {
    CalculatorButton
  },
  setup: () => ({
    args
  }),
  template: `
    <CalculatorButton
      class="w-20"
      :variant="args.variant"
    >
      {{ args.default }}
    </CalculatorButton>
  `
})

export const Number = Template.bind({})
Number.args = {
  default: '0',
  variant: 'number'
}

export const Operation = Template.bind({})
Operation.args = {
  default: '+',
  variant: 'operation'
}

export const Clear = Template.bind({})
Clear.args = {
  default: 'C',
  variant: 'clear'
}
