/* eslint-disable react/require-default-props */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';

class TextInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    errorText: PropTypes.node,
    tooltip: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    isNumericOnly: PropTypes.bool,
    label: PropTypes.string,
    hasFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
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
      tooltip,
      name,
      label,
      onChange,
      isNumericOnly,
      hasFocus,
      placeholder,
      value,
      type,
      ...rest
    } = this.props;

    const showPlaceholder = (hasFocus && !value) ? placeholder : null;

    const inputContainerClassName = cx({
      input__container: true,
      text__container: true,
    });

    /* eslint-disable-next-line */
    console.warn('DEPRECATED: You are using a deprecated input component, located in ui/components/Inputs. Please update your component to use the new inputs found in ui/components/Fields.');

    return (
      <div className={inputContainerClassName}>
        <input
          className={cx(['text', className])}
          name={name}
          type={type}
          onChange={onChange}
          onKeyDown={this.handleKeyDown}
          placeholder={showPlaceholder}
          value={value}
          {...rest}
        />
        <InputLabel
          className={'text__label'}
          active={!!value}
          name={name}
          label={label}
          errorText={errorText}
          tooltip={tooltip}
        />
      </div>
    );
  }
}

export default TextInput;
