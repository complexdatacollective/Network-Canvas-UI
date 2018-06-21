import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { get, isString } from 'lodash';
import Checkbox from './Checkbox';

const toString = value => (isString(value) ? value : JSON.stringify(value));
const getValue = option => get(option, 'value', option);
const getLabel = option => get(option, 'label', toString(getValue(option)));


class CheckboxGroup extends PureComponent {
  static propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    input: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: null,
    label: null,
    options: [],
    disabled: false,
  };

  get value() {
    return this.props.input.value;
  }

  handleClickOption = (event) => {
    const option = event.target.value;
    const newValue = this.isOptionChecked(option) ?
      this.value.filter(value => value !== option) :
      [...this.value, option];

    this.props.input.onChange(newValue);
  }

  isOptionChecked = (option) => {
    const value = this.props.input.value || [];
    const included = value.includes(option.value);
    return included;
  }

  renderOption = (option, index) => {
    const optionLabel = getLabel(option);
    const optionValue = getValue(option);

    return (
      <Checkbox
        className="form-field-checkbox-group__option"
        key={index}
        input={{
          value: optionValue,
          checked: this.isOptionChecked(option),
          onChange: this.handleClickOption,
        }}
        label={optionLabel}
      />
    );
  };

  render() {
    const {
      options,
      className,
    } = this.props;

    const classNames = cx(
      'form-field-checkbox-group',
      'form-field-container',
      className,
    );

    return (
      <div className={classNames}>
        <h4>
          What could be more important than this?
        </h4>
        <div className="form-field">
          { options.map(this.renderOption) }
        </div>
      </div>
    );
  }
}

export default CheckboxGroup;
