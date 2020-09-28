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
      selectedColor,
      linking,
      handleClick,
    } = this.props;

    const classes = classNames(
      'node',
      {
        'node--inactive': inactive,
        'node--selected': selected,
        'node--linking': linking,
        [`node--${selectedColor}`]: selected && selectedColor,
      },
    );

    const labelClasses = () => {
      const labelLength = this.props.label.length;
      return `node__label-text len-${labelLength}`;
    };

    const label = this.props.label.length < 22 ? this.props.label : `${this.props.label.substring(0, 18)}\u{AD}...`; // Add ellipsis for really long labels

    return (
      <div className={classes} onClick={handleClick}>
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
  selectedColor: PropTypes.string,
  linking: PropTypes.bool,
  handleClick: PropTypes.func,
};

Node.defaultProps = {
  color: 'node-color-seq-1',
  inactive: false,
  label: 'Node',
  selected: false,
  selectedColor: '',
  linking: false,
  handleClick: null,
};

export default Node;
