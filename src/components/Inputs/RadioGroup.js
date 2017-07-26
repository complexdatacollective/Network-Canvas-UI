import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';
import RadioInput from './RadioInput';

class RadioGroup extends Component {
  static propTypes = {
    className: PropTypes.string,
    errorText: PropTypes.node,
    name: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onRadioClick: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.any
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
      className,
      errorText,
      name,
      label,
      onRadioClick,
      options,
      value,
      ...rest
    } = this.props;



    return (
      <div className="input__container">
        <div className="grid__stack">
          {options.map((option, idx) => (
            <RadioInput
              key={idx}
              onChange={onRadioClick}
              checked={value === option}
              name={name}
              value={option}
            />
          ))}
        </div>
        <InputLabel
          name={name}
          label={label}
          errorText={errorText}
        />
      </div>
    );
  }
}

export default RadioGroup;

