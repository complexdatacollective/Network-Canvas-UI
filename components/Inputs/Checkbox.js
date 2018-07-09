/* eslint-disable react/require-default-props */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    errorText: PropTypes.node,
    tooltip: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onCheck: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    validator: PropTypes.func,
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
      checked, // eslint-disable-line no-unused-vars
      className,
      errorText,
      tooltip,
      name,
      label,
      onCheck, // eslint-disable-line no-unused-vars
      isChecked, // eslint-disable-line
      value,
      ...rest
    } = this.props;

    return (
      <div className="checkbox__container">
        <input
          className={cx(['checkbox', className])}
          name={name}
          type="checkbox"
          ref={(checkbox) => { this.checkbox = checkbox; }}
          checked={this.state.isChecked}
          onChange={this.handleCheck}
          value={value}
          {...rest}
        />
        <InputLabel
          className="checkbox__label"
          name={name}
          label={label}
          errorText={errorText}
          tooltip={tooltip}
        />
      </div>
    );
  }
}

export default Checkbox;
