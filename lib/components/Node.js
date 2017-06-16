'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * Renders a Node.
  */
var Node = function Node(props) {
  var label = props.label,
      selected = props.selected;


  var classes = (0, _classnames2.default)('node', { 'node--selected': selected });

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      'svg',
      {
        viewBox: '-1.05 -1.05 2.1 2.1',
        xmlns: 'http://www.w3.org/2000/svg',
        width: '100',
        height: '100',
        className: 'node__node'
      },
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
      label
    )
  );
};

Node.propTypes = {
  label: _propTypes2.default.string,
  selected: _propTypes2.default.bool
};

Node.defaultProps = {
  label: 'Node',
  selected: false
};

exports.default = Node;
module.exports = exports['default'];
//# sourceMappingURL=Node.js.map