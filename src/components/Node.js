import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
  * Renders a Node.
  */

class Node extends Component {

  render() {
    const {
      color,
      inactive,
      selected,
      linking,
    } = this.props;

    const classes = classNames(
      'node',
      {
        'node--inactive': inactive,
        'node--selected': selected,
        'node--linking': linking,
      },
    );

    const nodeBaseClasses = classNames({
      'node__node-base': true,
      [`node__node-base--${color}`]: !!color,
    });

    const nodeFlashClasses = classNames({
      'node__node-flash': true,
      [`node__node-flash--${color}--dark`]: !!color,
    });

    const labelClasses = () => {
      const labelLength = this.props.label.length;
      return `node__label-text len-${labelLength}`;
    };

    const label = this.props.label;

    return (
      <div className={classes}>
        <svg
          viewBox="-1.2 -1.2 2.4 2.4"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          className="node__node"
        >
          <circle vectorEffect="non-scaling-stroke" cx="0" cy="0" r="1" className="node__node-outer-trim" />
          <circle cx="0" cy="0" r="1" fill="silver" className={nodeBaseClasses} />
          <path
            className={nodeFlashClasses}
            d="M -1 0 A 0.2,0.2 0 1,1 1,0"
            fill="grey"
            transform="rotate(135)"
          />
          <circle vectorEffect="non-scaling-stroke" cx="0" cy="0" r="1" className="node__node-trim" />
        </svg>
        <div className="node__label">
          <div
            className={labelClasses()}
            ref={(labelText) => { this.labelText = labelText; }}
          >
            {label}
          </div>
        </div>
      </div>
    );
  }
}

Node.propTypes = {
  color: PropTypes.string,
  inactive: PropTypes.bool,
  label: PropTypes.string,
  selected: PropTypes.bool,
  linking: PropTypes.bool,
};

Node.defaultProps = {
  color: '',
  inactive: false,
  label: 'Node',
  selected: false,
  linking: false,
};

export default Node;
