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
    hasFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.any,
  }

  handleKeyDown = (e) => {
    if (this.props.isNumericOnly) {
      if (!(
        e.metaKey || // cmd/ctrl
        e.key in ['ArrowRight', 'ArrowLeft'] || // arrow keys
        e.which === 8 || // delete key
        /[0-9]/.test(String.fromCharCode(e.which)) // numbers
      )) {
        e.preventDefault();
      }
    }
    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
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
      hasFocus,
      placeholder,
      value,
      ...rest
    } = this.props;

    const showPlaceholder = (hasFocus && !value) ? placeholder : null;

    return (
      <div className="input__container text__container">
        <input
          className={cx(['text', className])}
          name={name}
          type={isNumericOnly ? 'tel' : 'text'}
          onChange={onChange}
          onKeyDown={this.handleKeyDown}
          placeholder={showPlaceholder}
          {...rest}
        />
        <InputLabel
          className={'text__label'}
          active={value}
          name={name}
          label={label}
          errorText={errorText}
        />
      </div>
    );
  }
}

export default TextInput;
