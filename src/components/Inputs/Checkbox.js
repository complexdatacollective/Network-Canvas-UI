import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    errorText: PropTypes.node,
    name: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    validator: PropTypes.func,
    value: PropTypes.any,
  }

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
      errorText,
      name,
      label,
      onCheck, // eslint-disable-line no-unused-vars
      isChecked, // eslint-disable-line no-unused-vars
      value,
      ...rest
    } = this.props;

    return (
      <div className="checkbox__container">
        <input
          className={cx(['checkbox', className])}
          name={name}
          type="checkbox"
          ref="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleCheck}
          value={value}
          {...rest}
        />
        <InputLabel
          name={name}
          label={label}
          errorText={errorText}
        />
      </div>
    );
  }
}

export default Checkbox;
