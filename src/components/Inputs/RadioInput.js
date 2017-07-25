import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';

class RadioInput extends Component {
  state = {
    hasValue: false,
    isFocused: false
  }

  static propTypes = {
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
      className,
      errorText,
      name,
      label,
      onChange,
      value,
      ...rest
    } = this.props;


    return (
      <div className="input__container">
        <div className="grid__stack">
          <div className="radio">

            <input
              type="radio"
              checked={value === 'cats'}
              value="cats"
              onChange={this.props.onChange}
              name="foo"
            />
            <label className="radio-label">
                cats
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              checked={value === 'dogs'}
              value="dogs"
              onChange={this.props.onChange}
              name="foo"
            />
            <label className="radio-label">
                dogs
            </label>
          </div>
        </div>
        <InputLabel
          active={this.state.hasValue}
          name={name}
          label={label}
          errorText={errorText}
        />
      </div>
    );
  }
}

export default RadioInput;

