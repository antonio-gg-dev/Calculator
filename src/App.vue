<template>
  <div class="app__container">
    <ThemeBar
      :theme-switcher="themeSwitcher"
    />

    <TheCalculator
      :calculator="calculator"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheCalculator from '@/components/TheCalculator.vue'
import { Calculator } from '@/modules/Calculator'
import { ThemeSwitcher } from '@/modules/ThemeSwitcher'
import ThemeBar from '@/components/ThemeBar.vue'

export default defineComponent({
  components: {
    ThemeBar,
    TheCalculator
  },
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
    grid-template-rows: auto 1fr;

    @screen md {
      grid-template-rows: 1fr;
      grid-template-columns: auto 1fr;
    }
  }
}
</style>
