import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';

class ToggleInput extends Component {
  state = {
    isChecked: false
  }

  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string,
    errorText: PropTypes.node,
    name: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    validator: PropTypes.func,
    value: PropTypes.any
  }

  componentWillMount() {
    const { checked } = this.props;
    if (checked) {
      this.setState({
        isChecked: true
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    const hasCheckedProp = nextProps.hasOwnProperty('checked');
    const hasNewDefaultProp =
      (nextProps.hasOwnProperty('defaultChecked') &&
      (nextProps.defaultChecked !== this.props.defaultChecked));

    if (hasCheckedProp || hasNewDefaultProp) {
      const isChecked = nextProps.checked || nextProps.defaultChecked || false;

      this.setState({ isChecked });
    }
  }

  isChecked() {
    return this.refs.checkbox.checked;
  }

  handleCheck = (event, isInputChecked) => {
    if (this.props.onCheck) {
      this.props.onCheck(event, this.isChecked());
    }
  }

  render() {
    const {
      checked, // eslint-disable-line no-unused-vars
      className,
      color,
      errorText,
      name,
      label,
      onCheck, // eslint-disable-line no-unused-vars
      isChecked, // eslint-disable-line no-unused-vars
      value,
      ...rest
    } = this.props;

    const toggleButtonClassName = cx({
      'toggle__button': true,
      [`toggle__button--${color}`]: !!color
    });

    return (
      <div className="toggle__container">
        <input
          className={cx(['toggle', className])}
          name={name}
          type="checkbox"
          ref="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleCheck}
          value={value}
          {...rest}
        />
        <div className="toggle__slider">
          <span className={toggleButtonClassName} />
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

export default ToggleInput;
