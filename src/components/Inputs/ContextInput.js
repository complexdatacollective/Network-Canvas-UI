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

  handleCheck = (event) => {
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
      label,
      value,
      onCheck, // eslint-disable-line
      isChecked, // eslint-disable-line
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
          ref="checkbox"
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
