module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config, { configType }) => {
    config.output.publicPath = '/react-cool-components/';
    return config;
  },
  managerWebpack: async (config) => {
    config.output.publicPath = '/react-cool-components/';
    return config;
  },
}