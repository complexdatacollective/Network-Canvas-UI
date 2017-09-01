import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import scaleTextToFit from '../utils/scaleTextToFit';

/**
  * Renders a Node.
  */

class Node extends Component {

  componentDidMount() {
    scaleTextToFit(this.labelText, { unit: 'em', increment: 0.0005 });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.label !== this.props.label) {
      scaleTextToFit(this.labelText, { unit: 'em', increment: 0.0005 });
    }
  }

  render() {
    const {
      inactive,
      selected,
      placeholder,
    } = this.props;

    const classes = classNames(
      'node',
      {
        'node--inactive': inactive,
        'node--selected': selected,
        'node--placeholder': placeholder,
      },
    );

    const label = placeholder ? '+' : this.props.label;

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
        <div className="node__label">
          <div className="node__label-text" ref={(labelText) => { this.labelText = labelText; }}>{label}</div>
        </div>
      </div>
    );
  }
}

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
