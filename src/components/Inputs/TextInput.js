import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class TextInput extends Component {
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
      placeholder,
      value,
      ...rest
    } = this.props;

    const inputLabelClassName = cx({
      'input__label': true,
      'input__label--active': this.state.hasValue
    })

    const inputErrorClassName = cx({
      'input__error': true,
      'input__error--active': this.state.hasValue
    })

    const showPlaceholder = (this.state.isFocused && !this.state.hasValue) ? placeholder : null;

    return (
      <div className="input__container">
        <input
          className={cx(['input', className])}
          name={name}
          type="text"
          onBlur={this.handleBlur}
          onChange={onChange}
          onFocus={this.handleFocus}
          placeholder={showPlaceholder}
        />
        <label className={inputLabelClassName} htmlFor={name}>
          {label}
        </label>
        <div className={inputErrorClassName}>
          "Error"
        </div>
      </div>
    );
  }
}

export default TextInput;
