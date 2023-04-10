<template>
  <div class="calculator__container">
    <div style="grid-area: display;">
      {{ calculator.print() }}
    </div>

    <Button
      v-for="(_, number) in 10"
      :key="number"
      @click="calculator.addNumber(number)"
      variant="number"
      :class="`calculator__button-${number}`"
    >
      {{ number }}
    </Button>

    <Button
      v-for="(symbol, operation) in Operation"
      :key="operation"
      @click="calculator.setOperation(symbol)"
      variant="operation"
      :class="`calculator__button-${operation}`"
    >
      {{ symbol }}
    </Button>

    <Button
      key="clear"
      @click="calculator.doClear()"
      variant="clear"
      :class="`calculator__button-clear`"
    >
      C
    </Button>

    <Button
      key="backspace"
      @click="calculator.doBackspace()"
      variant="operation"
      :class="`calculator__button-backspace`"
    >
      ⌫
    </Button>

    <Button
      key="calculate"
      @click="calculator.calculate()"
      variant="operation"
      :class="`calculator__button-calculate`"
    >
      =
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import { Calculator, Operation } from '@/modules/Calculator'

export default defineComponent({
  components: { Button },
  data: () => ({
    calculator: new Calculator(),
    Operation
  })
})
</script>

<style scoped lang="scss">
.calculator {
  &__container {
    @apply m-auto grid w-fit gap-2;
    grid-template-areas:
      "display  display  display  display        display"
      "number-7 number-8 number-9 division       clear"
      "number-4 number-5 number-6 multiplication backspace"
      "number-1 number-2 number-3 subtraction    calculate"
      ".        number-0 .        addition       calculate";
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

  &__button-backspace {
    grid-area: backspace;
  }

  &__button-calculate {
    @apply aspect-auto;
    grid-area: calculate;
  }
}
</style>
