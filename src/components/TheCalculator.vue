<template>
  <div class="the-calculator__container">
    <div
      class="the-calculator__display"
      data-test="display"
    >
      {{ calculator.print() }}
    </div>

    <CalculatorButton
      v-for="(_, number) in 10"
      :key="number"
      @mousedown.left="calculator.addNumber(number)"
      variant="number"
      :class="`the-calculator__button-${number}`"
      :data-test="`number-${number}`"
    >
      {{ number }}
    </CalculatorButton>

    <CalculatorButton
      v-for="(symbol, operation) in Operation"
      :key="operation"
      @mousedown.left="calculator.setOperation(symbol)"
      variant="operation"
      :class="`the-calculator__button-${operation}`"
      :data-test="`operation-${operation}`"
    >
      {{ symbol }}
    </CalculatorButton>

    <CalculatorButton
      key="decimal"
      @mousedown.left="calculator.addDecimalSeparator()"
      variant="operation"
      class="the-calculator__button-decimal"
      data-test="decimal"
    >
      {{ calculator.decimalSeparator }}
    </CalculatorButton>

    <CalculatorButton
      key="decimal"
      @mousedown.left="calculator.toggleSymbol()"
      variant="operation"
      class="the-calculator__button-symbol"
      data-test="symbol"
    >
      ±
    </CalculatorButton>

    <CalculatorButton
      key="clear"
      @mousedown.left="calculator.clear()"
      variant="clear"
      class="the-calculator__button-clear"
      data-test="clear"
    >
      C
    </CalculatorButton>

    <CalculatorButton
      key="erase"
      @mousedown.left="calculator.erase()"
      variant="operation"
      class="the-calculator__button-erase"
      data-test="erase"
    >
      <FontAwesomeIcon
        :icon="eraseIcon"
        fixedWidth
      />
    </CalculatorButton>

    <CalculatorButton
      key="calculate"
      @mousedown.left="calculator.calculate()"
      variant="operation"
      class="the-calculator__button-calculate"
      data-test="calculate"
    >
      =
    </CalculatorButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CalculatorButton from '@/components/CalculatorButton.vue'
import { Calculator, Operation } from '@/modules/Calculator'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  components: {
    FontAwesomeIcon,
    CalculatorButton
  },
  props: {
    calculator: {
      required: true,
      type: Object as PropType<Calculator>
    }
  },
  data: () => ({
    Operation
  }),
  computed: {
    eraseIcon () {
      return faDeleteLeft
    }
  },
  methods: {
    keyHandler ({ key }: KeyboardEvent) {
      if (key === '0') this.calculator.addNumber(0)
      if (key === '1') this.calculator.addNumber(1)
      if (key === '2') this.calculator.addNumber(2)
      if (key === '3') this.calculator.addNumber(3)
      if (key === '4') this.calculator.addNumber(4)
      if (key === '5') this.calculator.addNumber(5)
      if (key === '6') this.calculator.addNumber(6)
      if (key === '7') this.calculator.addNumber(7)
      if (key === '8') this.calculator.addNumber(8)
      if (key === '9') this.calculator.addNumber(9)

      if (key === 'Delete') this.calculator.clear()
      if (key === 'Backspace') this.calculator.erase()

      if (key === '*') this.calculator.setOperation(Operation.multiplication)
      if (key === '+') this.calculator.setOperation(Operation.addition)
      if (key === '/') this.calculator.setOperation(Operation.division)
      if (key === '-') this.calculator.setOperation(Operation.subtraction)

      if (key === ',') this.calculator.addDecimalSeparator()
      if (key === '.') this.calculator.addDecimalSeparator()

      if (key === '=') this.calculator.calculate()
      if (key === 'Enter') this.calculator.calculate()
    }
  },
  mounted () {
    window.addEventListener('keydown', this.keyHandler)
  },
  unmounted () {
    window.removeEventListener('keydown', this.keyHandler)
  }
})
</script>

<style scoped lang="scss">
.the-calculator {
  &__container {
    @apply grid w-screen grid-cols-5 gap-4 p-6 max-w-container bg-calculator shadow-calculator;
    grid-template-areas:
      "display  display  display  display        display"
      "number-7 number-8 number-9 division       clear"
      "number-4 number-5 number-6 multiplication erase"
      "number-1 number-2 number-3 subtraction    calculate"
      "symbol   number-0 decimal  addition       calculate";

    // theme nata
    @apply nata:rounded-2xl;
  }

  &__display {
    @apply px-6 py-5 text-right text-4xl leading-none bg-display text-display-alt shadow-display;
    grid-area: display;

    // theme nata
    @apply nata:rounded-2xl;
  }

  @for $number from 0 through 9 {
    &__button-#{$number} {
      grid-area: number-#{$number};
    }
  }

  &__button-division {
    grid-area: division;
  }

  &__button-multiplication {
    grid-area: multiplication;
  }

  &__button-subtraction {
    grid-area: subtraction;
  }

  &__button-addition {
    grid-area: addition;
  }

  &__button-symbol {
    grid-area: symbol;
  }

  &__button-decimal {
    grid-area: decimal;
  }

  &__button-clear {
    grid-area: clear;
  }

  &__button-erase {
    grid-area: erase;
  }

  &__button-calculate {
    @apply aspect-auto;
    grid-area: calculate;

    // theme nata
    @apply nata:aspect-auto;
  }
}
</style>
