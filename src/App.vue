<template>
  <div class="app__container">
    <CalculatorComponent :calculator="calculator" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalculatorComponent from '@/components/Calculator.vue'
import { Calculator as CalculatorService } from '@/modules/Calculator'

export default defineComponent({
  components: { CalculatorComponent },
  data: () => ({
    calculator: new CalculatorService()
  })

})
</script>

<style scoped lang="scss">
.app {
  &__container {
    @apply grid min-h-screen place-items-center p-6;
  }
}
</style>
