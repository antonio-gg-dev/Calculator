<template>
  <div class="app__container">
    <TheCalculator :calculator="calculator" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheCalculator from '@/components/TheCalculator.vue'
import { Calculator } from '@/modules/Calculator'
import { ThemeSwitcher } from '@/modules/ThemeSwitcher'

export default defineComponent({
  components: { TheCalculator },
  data: () => ({
    calculator: new Calculator(),
    themeSwitcher: new ThemeSwitcher()
  })
})
</script>

<style scoped lang="scss">
.app {
  &__container {
    @apply grid min-h-screen place-items-center;
  }
}
</style>
