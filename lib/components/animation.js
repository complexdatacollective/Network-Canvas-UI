"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO: This is going to be used to generate the respective variables in sass
// at a later date
exports.default = {
  duration: { // in ms
    fast: 300,
    standard: 500,
    slow: 1000
  },
  easing: {
    ios: [0.23, 1, 0.32, 1],
    android: [0.4, 0, 0.2, 1],
    default: [0.4, 0, 0.2, 1]
  }
};
module.exports = exports["default"];
//# sourceMappingURL=animation.js.map