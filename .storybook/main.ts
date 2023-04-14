const custom = require('../node_modules/@vue/cli-service/webpack.config.js');
import type { StorybookConfig } from "@storybook/vue3-webpack5";
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", {
    name: '@storybook/addon-styling',
    options: {
      postCss: true
    }
  }, "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules
      },
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
