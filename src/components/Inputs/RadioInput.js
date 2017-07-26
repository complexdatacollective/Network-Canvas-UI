import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';

class RadioInput extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    errorText: PropTypes.node,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any
  }

  render() {
    const {
      checked,
      className,
      name,
      label,
      onChange,
      value,
      ...rest
    } = this.props;

    return (
      <div className="radio__container">
        <input
          type="radio"
          className="radio"
          checked={checked}
          value={value}
          onChange={this.props.onChange}
          name={name}
        />
        <label className="radio__label">
          {label || value}
        </label>
      </div>
    );
  }
}

export default RadioInput;

