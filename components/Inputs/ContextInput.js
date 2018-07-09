/* eslint-disable react/require-default-props */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class ContextInput extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string,
    defaultChecked: PropTypes.bool,
    errorText: PropTypes.node,
    name: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onCheck: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    isChecked: PropTypes.func,
    value: PropTypes.any,
  }

  state = {
    isChecked: false,
  }

  componentWillMount() {
    const { checked } = this.props;
    if (checked) {
      this.setState({
        isChecked: true,
      });
    }

    /* eslint-disable-next-line */
    console.warn('DEPRECATED: You are using a deprecated input component, located in ui/components/Inputs. Please update your component to use the new inputs found in ui/components/Fields.');
  }

  componentWillReceiveProps(nextProps) {
    const hasCheckedProp = Object.prototype.hasOwnProperty.call(nextProps, 'checked');
    const hasNewDefaultProp =
      (Object.prototype.hasOwnProperty.call(nextProps, 'defaultChecked') &&
      (nextProps.defaultChecked !== this.props.defaultChecked));

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
  }

  render() {
    const {
      checked,
      className,
      color,
      errorText,
      label,
      value,
      onCheck,
      isChecked,
      ...rest
    } = this.props;

    const buttonClassName = cx({
      context__button: true,
      [`context__button--${color}`]: !!color,
    });

    return (
      <div className="context__container">
        <input
          className={cx(['context', className])}
          name={name}
          type="checkbox"
          ref={(checkbox) => { this.checkbox = checkbox; }}
          value={value}
          checked={this.state.isChecked}
          onChange={this.handleCheck}
          {...rest}
        />
        <div className={buttonClassName}>
          <span>{label}</span>
        </div>
      </div>
    );
  }
}

export default ContextInput;
