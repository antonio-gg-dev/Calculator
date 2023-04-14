<template>
  <div class="calculator__container">
    <div
      class="calculator__display"
      data-test="display"
    >
      {{ calculator.print() }}
    </div>

    <Button
      v-for="(_, number) in 10"
      :key="number"
      @click="calculator.addNumber(number)"
      variant="number"
      :class="`calculator__button-${number}`"
      :data-test="`number-${number}`"
    >
      {{ number }}
    </Button>

    <Button
      v-for="(symbol, operation) in Operation"
      :key="operation"
      @click="calculator.setOperation(symbol)"
      variant="operation"
      :class="`calculator__button-${operation}`"
      :data-test="`operation-${operation}`"
    >
      {{ symbol }}
    </Button>

    <Button
      key="clear"
      @click="calculator.clear()"
      variant="clear"
      :class="`calculator__button-clear`"
      data-test="clear"
    >
      C
    </Button>

    <Button
      key="erase"
      @click="calculator.erase()"
      variant="operation"
      :class="`calculator__button-erase`"
      data-test="erase"
    >
      ⌫
    </Button>

    <Button
      key="calculate"
      @click="calculator.calculate()"
      variant="operation"
      :class="`calculator__button-calculate`"
      data-test="calculate"
    >
      =
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Button from './Button.vue'
import { Calculator, Operation } from '../modules/Calculator'

export default defineComponent({
  components: { Button },
  props: {
    calculator: {
      required: true,
      type: Object as PropType<Calculator>
    }
  },
  data: () => ({
    Operation
  })
})
</script>

<style scoped lang="scss">
.calculator {
  &__container {
    @apply grid w-fit gap-4;
    grid-template-areas:
      "display  display  display  display        display"
      "number-7 number-8 number-9 division       clear"
      "number-4 number-5 number-6 multiplication erase"
      "number-1 number-2 number-3 subtraction    calculate"
      ".        number-0 .        addition       calculate";
  }

  &__display {
    @apply px-6 pb-5 text-right text-4xl leading-none;
    grid-area: display;
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

  &__button-clear {
    grid-area: clear;
  }

  &__button-erase {
    grid-area: erase;
  }

  &__button-calculate {
    @apply aspect-auto;
    grid-area: calculate;
  }
}
</style>
