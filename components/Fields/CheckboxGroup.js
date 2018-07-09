import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Checkbox from './Checkbox';
import { asOptionObject, getValue } from './utils/options';

class CheckboxGroup extends PureComponent {
  static propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    label: PropTypes.string,
    fieldLabel: PropTypes.string,
    input: PropTypes.object.isRequired,
    optionComponent: PropTypes.node,
    meta: PropTypes.object,
  };

  static defaultProps = {
    className: null,
    label: null,
    fieldLabel: null,
    options: [],
    disabled: false,
    optionComponent: Checkbox,
    meta: {},
  };

  get value() {
    return this.props.input.value;
  }

  handleClickOption = (index) => {
    const option = getValue(this.props.options[index]);
    const newValue = this.isOptionChecked(option) ?
      this.value.filter(value => value !== option) :
      [...this.value, option];

    this.props.input.onChange(newValue);
  }

  isOptionChecked = (option) => {
    const value = this.props.input.value || [];
    const included = value.includes(option);
    return included;
  }

  renderOption = (option, index) => {
    const OptionComponent = this.props.optionComponent;
    const { value: optionValue, label: optionLabel, ...optionRest } = asOptionObject(option);

    return (
      <OptionComponent
        className="form-field-checkbox-group__option"
        key={index}
        input={{
          value: index,
          checked: this.isOptionChecked(optionValue),
          onChange: () => this.handleClickOption(index),
        }}
        label={optionLabel}
        {...optionRest}
      />
    );
  };

  render() {
    const {
      options,
      className,
      fieldLabel,
      label,
      meta: { error, invalid, touched },
    } = this.props;

    const classNames = cx(
      'form-field-checkbox-group',
      'form-field-container',
      {
        'form-field-checkbox-group--has-error': invalid && touched && error,
      },
      className,
    );

    return (
      <div className={classNames}>
        <h4>
          {fieldLabel || label || ''}
        </h4>
        {invalid && touched && <p className="form-field-checkbox-group__error">{error}</p>}
        <div className="form-field">
          { options.map(this.renderOption) }
        </div>
      </div>
    );
  }
}

export default CheckboxGroup;
