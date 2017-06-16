import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
  * Renders a Node.
  */
const Node = (props) => {
  const {
    label,
    selected,
  } = props;

  const classes = classNames('node', { 'node--selected': selected });

  return (
    <div className={classes}>
      <svg
        viewBox="-1.05 -1.05 2.1 2.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        className="node__node"
      >
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
  label: PropTypes.string,
  selected: PropTypes.bool,
};

Node.defaultProps = {
  label: 'Node',
  selected: false,
};

export default Node;
