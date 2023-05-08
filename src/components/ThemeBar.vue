<template>
  <div class="theme-bar__container">
    <CalculatorButton
      href="https://github.com/Tito-Kati/Calculator"
      target="_blank"
      key="github"
      variant="clear"
    >
      <FontAwesomeIcon
        :icon="faGithub"
        fixed-width
      />
    </CalculatorButton>

    <CalculatorButton
      v-for="theme in themes"
      @click="themeSwitcher.setTheme(theme)"
      :key="theme"
      variant="number"
    >
      <FontAwesomeIcon
        :icon="iconFor(theme)"
        fixed-width
      />
    </CalculatorButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Theme, ThemeSwitcher } from '@/modules/ThemeSwitcher'
import CalculatorButton from '@/components/CalculatorButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEraser, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default defineComponent({
  components: {
    FontAwesomeIcon,
    CalculatorButton
  },
  props: {
    themeSwitcher: {
      required: true,
      type: Object as PropType<ThemeSwitcher>
    }
  },
  computed: {
    themes () {
      return Theme
    },
    faGithub () {
      return faGithub
    }
  },
  methods: {
    iconFor (theme: Theme): IconDefinition {
      switch (theme) {
        case Theme.light:
          return faSun
        case Theme.dark:
          return faMoon
        case Theme.nata:
          return faEraser
      }
    }
  },
  created () {
    this.themeSwitcher.setUserTheme()
  }
})
</script>

<style scoped>

</style>
