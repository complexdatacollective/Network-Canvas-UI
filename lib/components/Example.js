"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Example = function Example(props) {
  return _react2.default.createElement(
    "div",
    { className: "example" },
    props.children
  );
};

var _default = Example;
exports.default = _default;
module.exports = exports["default"];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Example, "Example", "src/components/Example.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Example.js");
}();

;
//# sourceMappingURL=Example.js.map