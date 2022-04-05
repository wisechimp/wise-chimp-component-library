module.exports = {
  stories: ["../src/**/*.stories.@(js|ts|tsx)"],
  addons: [
    "@storybook/addons-essentials",
    "@storybook/addon-links",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
}
