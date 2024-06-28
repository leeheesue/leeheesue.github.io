import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }

    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
                '@babel/preset-typescript',
              ],
              plugins: ['@emotion'],
            },
          },
        ],
      });
    }

    return config;
  },
};
export default config;
