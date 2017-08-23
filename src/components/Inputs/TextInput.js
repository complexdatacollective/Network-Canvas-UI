import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';

class TextInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    errorText: PropTypes.node,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    isNumericOnly: PropTypes.bool,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    validator: PropTypes.func,
    value: PropTypes.any,
  }

  state = {
    hasValue: false,
    isFocused: false,
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('value')) {
      let hasValue = Boolean(nextProps.value);
      if (nextProps.validator) {
        hasValue = nextProps.validator(nextProps.value);
      }
      this.setState({ hasValue });
    }
  }

  handleBlur = (e) => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  handleFocus = (e) => {
    if (this.props.disabled) {
      return;
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
      isNumericOnly,
      placeholder,
      value,
      ...rest
    } = this.props;

    const showPlaceholder = (this.state.isFocused && !this.state.hasValue) ? placeholder : null;

    return (
      <div className="input__container text__container">
        <input
          className={cx(['text', className])}
          name={name}
          type={isNumericOnly ? 'tel' : 'text'}
          onBlur={this.handleBlur}
          onChange={onChange}
          onFocus={this.handleFocus}
          placeholder={showPlaceholder}
          {...rest}
        />
        <InputLabel
          className={'text__label'}
          active={this.state.hasValue}
          name={name}
          label={label}
          errorText={errorText}
        />
      </div>
    );
  }
}

export default TextInput;
