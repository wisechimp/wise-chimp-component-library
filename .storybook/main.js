module.exports = {
  addons: [
    '@storybook/addons-essentials',
    '@storybook/addon-links',
    '@storybook/preset-scss'
  ],
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(js|ts|tsx)'],
  core: {
    builder: 'webpack5'
  }
}