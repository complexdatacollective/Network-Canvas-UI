import { css } from 'docz-plugin-css';

export default {
  themeConfig: {
    logo: {
      src: 'assets/images/logo.png',
    },
    styles: {
      body: {
        fontFamily: 'Quicksand, Open Sans, sans-serif',
        fontSize: '16px',
        lineHeight: 1.5,
      },
    },
  },
  plugins: [
    css({
      preprocessor: 'sass',
    }),
  ],
};
