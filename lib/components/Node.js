'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  * Renders a Node.
  */

var Node = function (_Component) {
  _inherits(Node, _Component);

  function Node() {
    _classCallCheck(this, Node);

    return _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).apply(this, arguments));
  }

  _createClass(Node, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.label !== this.props.label) {
        console.log('changed');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          inactive = _props.inactive,
          selected = _props.selected,
          placeholder = _props.placeholder;


      var classes = (0, _classnames2.default)('node', {
        'node--inactive': inactive,
        'node--selected': selected,
        'node--placeholder': placeholder
      });

      var labelClasses = function labelClasses() {
        var labelLength = _this2.props.label.length;
        return 'node__label-text len-' + labelLength;
      };

      var label = placeholder ? '+' : this.props.label;

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          'svg',
          {
            viewBox: '-1.5 -1.5 3 3',
            xmlns: 'http://www.w3.org/2000/svg',
            width: '100',
            height: '100',
            className: 'node__node'
          },
          _react2.default.createElement('circle', { vectorEffect: 'non-scaling-stroke', cx: '0', cy: '0', r: '1', className: 'node__node-outer-trim' }),
          _react2.default.createElement('circle', { cx: '0', cy: '0', r: '1', fill: 'silver', className: 'node__node-base' }),
          _react2.default.createElement('path', {
            className: 'node__node-flash',
            d: 'M -1 0 A 0.2,0.2 0 1,1 1,0',
            fill: 'grey',
            transform: 'rotate(135)'
          }),
          _react2.default.createElement('circle', { vectorEffect: 'non-scaling-stroke', cx: '0', cy: '0', r: '1', className: 'node__node-trim' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'node__label' },
          _react2.default.createElement(
            'div',
            {
              className: labelClasses(),
              ref: function ref(labelText) {
                _this2.labelText = labelText;
              }
            },
            label
          )
        )
      );
    }
  }]);

  return Node;
}(_react.Component);

Node.propTypes = {
  inactive: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  selected: _propTypes2.default.bool,
  placeholder: _propTypes2.default.bool
};

Node.defaultProps = {
  inactive: false,
  label: 'Node',
  selected: false,
  placeholder: false
};

exports.default = Node;
module.exports = exports['default'];
//# sourceMappingURL=Node.js.map