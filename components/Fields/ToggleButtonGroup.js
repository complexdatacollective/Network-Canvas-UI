import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { get, isString } from 'lodash';
import ToggleButton from './ToggleButton';

const toString = value => (isString(value) ? value : JSON.stringify(value));
const getValue = option => get(option, 'value', option);
const getLabel = option => get(option, 'label', toString(getValue(option)));


class ToggleButtonGroup extends PureComponent {
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
    console.log(option);
    console.log(this.isOptionChecked(option));
    const newValue = this.isOptionChecked(option) ?
      this.value.filter(value => value !== option) :
      [...this.value, option];

    console.log(newValue);
    this.props.input.onChange(newValue);
  }

  isOptionChecked = (option) => {
    const value = this.props.input.value || [];
    const included = value.includes(option);
    return included;
  }

  renderOption = (option, index) => {
    const optionLabel = getLabel(option);
    const optionValue = getValue(option);

    return (
      <ToggleButton
        className="form-field-togglebutton-group__option"
        key={index}
        input={{
          value: optionValue,
          checked: this.isOptionChecked(optionValue),
          onChange: this.handleClickOption,
        }}
        label={optionLabel}
        color={`cat-color-seq-${index + 1}`}
      />
    );
  };

  render() {
    const {
      options,
      className,
    } = this.props;

    const classNames = cx(
      'form-field-togglebutton-group',
      'form-field-container',
      className,
    );

    return (
      <div className={classNames}>
        <h4>
          What could be more important than this?
        </h4>
        <div className="form-field form-field__inline">
          { options.map(this.renderOption) }
        </div>
      </div>
    );
  }
}

export default ToggleButtonGroup;
