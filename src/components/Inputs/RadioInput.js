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
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    validator: PropTypes.func,
    value: PropTypes.any
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('value')) {
      let hasValue = Boolean(nextProps.value);
      if (nextProps.validator) {
        hasValue = nextProps.validator(nextProps.value);
      }
      this.setState({ hasValue })
    }
  }

  handleBlur = (e) => {
    this.setState({ isFocused: false })
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  handleFocus = (e) => {
    if (this.props.disabled) {
      return
    }
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  render() {
    const {
      checked,
      className,
      errorText,
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

