<template>
  <div class="app__container">
    <CalculatorComponent :calculator="calculator" />
    <input
      v-for="theme in Themes"
      @click="themeSwitcher.setTheme(theme)"
      :key="theme"
      type="button"
      :value="theme"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalculatorComponent from '@/components/Calculator.vue'
import { Calculator as CalculatorService } from '@/modules/Calculator'
import { Theme, ThemeSwitcher } from '@/modules/ThemeSwitcher'
import Button from '@/components/Button.vue'

export default defineComponent({
  computed: {
    Themes () {
      return Theme
    }
  },
  components: { CalculatorComponent },
  data: () => ({
    calculator: new CalculatorService(),
    themeSwitcher: new ThemeSwitcher()
  }),
  created () {
    this.themeSwitcher.setUserTheme()
  }
})
</script>

<style scoped lang="scss">
.app {
  &__container {
    @apply grid min-h-screen place-items-center;
  }
}
</style>
