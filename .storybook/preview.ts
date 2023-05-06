import '../src/style.scss'
import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'Light',
      list: [
        { name: 'Light', class: 'light', color: '#f2f4f8' },
        { name: 'Dark', class: 'dark', color: '#20242d' }
      ],
    }
  },
};

export default preview;
