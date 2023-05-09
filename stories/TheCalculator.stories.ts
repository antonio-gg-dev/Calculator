import type { Meta, StoryFn } from '@storybook/vue3'

import TheCalculator from '../src/components/TheCalculator.vue'
import { Calculator } from '../src/modules/Calculator'

export default {
  component: TheCalculator,
  argTypes: {
    screen: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<typeof TheCalculator>

const Template: StoryFn = (args) => ({
  components: {
    TheCalculator
  },
  setup: () => {
    const calculator = {
      print: () => args.screen,
      addNumber: () => calculator,
      erase: () => calculator,
      clear: () => calculator,
      setOperation: () => calculator,
      calculate: () => calculator,
      addDecimalSeparator: () => calculator,
      toggleSymbol: () => calculator,
      decimalSeparator: '.'
    } as unknown as Calculator

    return {
      calculator
    }
  },
  template: `
    <TheCalculator :calculator="calculator" />
  `
})

export const Default = Template.bind({})
Default.args = {
  screen: 'Screen'
}
