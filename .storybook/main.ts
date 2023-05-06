const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
import type { StorybookConfig } from '@storybook/vue3-webpack5';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false
      }
    },
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true
      }
    },
    '@storybook/addon-mdx-gfm',
    'storybook-addon-themes'
  ],
  framework: {
    name: '@storybook/vue3-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [
          ...config.resolve?.plugins ?? [],
          new TsconfigPathsPlugin({ extensions: config.resolve?.extensions }),
        ]
      }
    };
  }
};
export default config;
