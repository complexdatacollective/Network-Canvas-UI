import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioInput extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    errorText: PropTypes.node,
    name: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.any,
  }

  render() {
    const {
      checked,
      className,
      name,
      label,
      onChange,
      value,
      ...rest // eslint-disable-line
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
        <label className="radio__label" htmlFor={name}>
          {label || value}
        </label>
      </div>
    );
  }
}

export default RadioInput;

