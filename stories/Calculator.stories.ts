import type { Meta, StoryFn } from '@storybook/vue3'

import Calculator from '../src/components/Calculator.vue'
import { Calculator as CalculatorService } from '../src/modules/Calculator'

export default {
  component: Calculator,
  argTypes: {
    screen: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<typeof Calculator>

const Template: StoryFn = (args) => ({
  components: {
    Calculator
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
    } as unknown as CalculatorService

    return {
      calculator
    }
  },
  template: `
    <Calculator :calculator="calculator" />
  `
})

export const Default = Template.bind({})
Default.args = {
  screen: 'Screen'
}
