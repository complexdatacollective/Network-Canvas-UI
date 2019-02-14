import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import Radio from './Radio';
import { asOptionObject, getValue } from './utils/options';
import Icon from '../Icon';

class RadioGroup extends Component {
  static propTypes = {
    options: PropTypes.array,
    label: PropTypes.string,
    fieldLabel: PropTypes.string,
    meta: PropTypes.object,
    optionComponent: PropTypes.func,
  };

  static defaultProps = {
    label: null,
    fieldLabel: null,
    optionComponent: Radio,
    options: [],
    meta: {},
  };

  componentWillMount() {
    this.id = uuid();
  }

  onChange = index =>
    this.props.input.onChange(getValue(this.props.options[index]));

  renderOption = (option, index) => {
    const {
      input: { value },
      optionComponent: OptionComponent,
    } = this.props;

    const { value: optionValue, label: optionLabel, ...optionRest } = asOptionObject(option);
    const selected = optionValue === value;

    return (
      <OptionComponent
        key={index}
        input={{
          value: index,
          checked: selected,
          onChange: () => this.onChange(index),
        }}
        label={optionLabel}
        {...optionRest}
      />
    );
  }

  render() {
    const {
      options,
      input: { name },
      className,
      label,
      fieldLabel,
      meta: { error, invalid, touched },
    } = this.props;

    const containerClassNames = cx(
      'form-field-container',
      {
        'form-field-radio-group--has-error': invalid && touched && error,
      },
    );

    const classNames = cx(
      'form-field',
      'form-field-radio-group',
      className,
    );

    return (
      <div className={containerClassNames}>
        <h4>
          {fieldLabel || label || ''}
        </h4>
        <div className={classNames} name={name}>
          { options.map(this.renderOption) }
        </div>
        {invalid && touched && <div className="form-field-radio-group__error"><Icon name="warning" />{error}</div>}
      </div>
    );
  }
}

export { RadioGroup };

export default RadioGroup;
