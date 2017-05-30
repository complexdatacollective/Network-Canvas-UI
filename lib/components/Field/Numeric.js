"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Numeric = function Numeric(field) {
  return React.createElement(
    "div",
    null,
    React.createElement("input", _extends({ type: "number", placeholder: field.label }, field.input)),
    field.meta.invalid && React.createElement(
      "div",
      null,
      field.meta.error
    )
  );
};

exports.default = Numeric;
module.exports = exports["default"];
//# sourceMappingURL=Numeric.js.map