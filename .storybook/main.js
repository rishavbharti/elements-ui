module.exports = {
  stories: [
    '../src/docs/**/*.stories.mdx',
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
