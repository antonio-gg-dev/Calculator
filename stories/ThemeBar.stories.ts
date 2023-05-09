import type { Meta, StoryFn } from '@storybook/vue3'

import ThemeBar from '../src/components/ThemeBar.vue'
import { ThemeSwitcher } from '../src/modules/ThemeSwitcher'

export default {
  component: ThemeBar
} as Meta<typeof ThemeBar>

const Template: StoryFn = (_) => ({
  components: {
    ThemeBar
  },
  setup: () => {
    const themeSwitcher = {
      setTheme: () => null,
      loadUserTheme: () => null
    } as unknown as ThemeSwitcher

    return {
      themeSwitcher
    }
  },
  template: `
    <ThemeBar :theme-switcher="themeSwitcher" />
  `
})

export const Default = Template.bind({})
