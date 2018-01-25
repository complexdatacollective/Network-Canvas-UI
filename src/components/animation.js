// TODO: This is going to be used to generate the respective variables in sass
// at a later date

const animationScaleFactor = 1;

export default {
  duration: {  // in ms
    fast: animationScaleFactor * 300,
    standard: animationScaleFactor * 500,
    slow: animationScaleFactor * 1000,
  },
  easing: {
    ios: [0.23, 1, 0.32, 1],
    android: [0.4, 0, 0.2, 1],
    default: [0.4, 0, 0.2, 1],
  },
};
