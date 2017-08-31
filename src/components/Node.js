import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
  * Renders a Node.
  */
const Node = (props) => {
  const {
    inactive,
    selected,
    placeholder,
  } = props;

  const classes = classNames(
    'node',
    {
      'node--inactive': inactive,
      'node--selected': selected,
      'node--placeholder': placeholder,
    },
  );

  const label = placeholder ? '+' : props.label;

  return (
    <div className={classes}>
      <svg
        viewBox="-1.5 -1.5 3 3"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        className="node__node"
      >
        <circle vectorEffect="non-scaling-stroke" cx="0" cy="0" r="1" className="node__node-outer-trim" />
        <circle cx="0" cy="0" r="1" fill="silver" className="node__node-base" />
        <path
          className="node__node-flash"
          d="M -1 0 A 0.2,0.2 0 1,1 1,0"
          fill="grey"
          transform="rotate(135)"
        />
        <circle vectorEffect="non-scaling-stroke" cx="0" cy="0" r="1" className="node__node-trim" />
      </svg>
      <div className="node__label">{label}</div>
    </div>
  );
};

Node.propTypes = {
  inactive: PropTypes.bool,
  label: PropTypes.string,
  selected: PropTypes.bool,
  placeholder: PropTypes.bool,
};

Node.defaultProps = {
  inactive: false,
  label: 'Node',
  selected: false,
  placeholder: false,
};

export default Node;
