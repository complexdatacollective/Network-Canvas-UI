// nceme.js

import { create } from '@storybook/theming';

const cssVar = (property, defaultValue) =>
  getComputedStyle(document.documentElement).getPropertyValue(property) || defaultValue

export default create({
  base: 'dark',

  // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // colorPrimary: cssVar('--primary', 'red'),
  // colorSecondary: cssVar('--color-neon-coral', 'red'),

  // // // UI
  // appBg: cssVar('--background', 'red'),
  appContentBg: 'rgb(58,58,117)',
  // // // appBorderColor: 'grey',
  // appBorderRadius: cssVar('--border-radius', '1rem'),

  // // // Typography
  // fontBase: cssVar('--netcanvas-font-stack', '"Open Sans", sans-serif'),
  // // // fontCode: 'monospace',

  // // Text colors
  // textColor: cssVar('--text', 'white'),
  // textInverseColor: cssVar('--text-dark', 'black'),

  // // Toolbar default and active colors
  // // barTextColor: 'silver',
  // // barSelectedColor: 'black',
  // // barBg: 'hotpink',

  // // Form colors
  // // inputBg: 'white',
  // // inputBorder: 'silver',
  // // inputTextColor: 'black',
  // // inputBorderRadius: 4,

  // // brandTitle: 'My custom storybook',
  // // brandUrl: 'https://example.com',
  // // brandImage: 'https://placehold.it/350x150',
});
