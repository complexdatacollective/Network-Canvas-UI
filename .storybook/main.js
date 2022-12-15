const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  framework: "@storybook/react",
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    }
  ],
};
