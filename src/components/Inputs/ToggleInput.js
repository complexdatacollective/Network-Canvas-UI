/* eslint-disable react/require-default-props */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';

class ToggleInput extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    color: PropTypes.string,
    defaultChecked: PropTypes.bool,
    errorText: PropTypes.node,
    inline: PropTypes.bool,
    tooltip: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onCheck: PropTypes.func,
    onFocus: PropTypes.func,
    validator: PropTypes.func,
    value: PropTypes.any,
  };

  state = {
    isChecked: false,
  };

  componentWillMount() {
    const { checked } = this.props;
    if (checked) {
      this.setState({
        isChecked: true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const hasCheckedProp = nextProps.hasOwnProperty('checked');
    const hasNewDefaultProp =
      nextProps.hasOwnProperty('defaultChecked') &&
      nextProps.defaultChecked !== this.props.defaultChecked;

    if (hasCheckedProp || hasNewDefaultProp) {
      const isChecked = nextProps.checked || nextProps.defaultChecked || false;

      this.setState({ isChecked });
    }
  }

  isChecked() {
    return this.checkbox.checked;
  }

  handleCheck = (event) => {
    if (this.props.onCheck) {
      this.props.onCheck(event, this.isChecked());
    }
  };

  render() {
    const {
      checked, // eslint-disable-line
      className,
      containerClassName,
      color,
      errorText,
      inline,
      tooltip,
      name,
      label,
      onCheck, // eslint-disable-line
      isChecked, // eslint-disable-line
      value,
      ...rest
    } = this.props;

    const toggleButtonClassName = cx({
      toggle__button: true,
      [`toggle__button--${color}`]: !!color,
    });

    const toggleContainerClassName = cx({
      toggle__container: true,
      'toggle__container--inline': !!inline,
    }, [containerClassName]);

    return (
      <div className={toggleContainerClassName}>
        <InputLabel name={name} label={label} errorText={errorText} tooltip={tooltip} />
        <input
          className={cx(['toggle', className])}
          name={name}
          type="checkbox"
          ref={(checkbox) => {
            this.checkbox = checkbox;
          }}
          checked={this.state.isChecked}
          onChange={this.handleCheck}
          value={value}
          {...rest}
        />
        <div className="toggle__slider">
          <span className={toggleButtonClassName} />
        </div>
      </div>
    );
  }
}

export default ToggleInput;
