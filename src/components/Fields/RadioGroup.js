import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import Radio from './Radio';
import { asOptionObject, getValue } from './utils/options';
import Icon from '../Icon';
import MarkdownLabel from './MarkdownLabel';

class RadioGroup extends Component {
  static propTypes = {
    options: PropTypes.array,
    label: PropTypes.string,
    input: PropTypes.object.isRequired,
    className: PropTypes.string,
    fieldLabel: PropTypes.string,
    meta: PropTypes.object,
    optionComponent: PropTypes.func,
  };

  static defaultProps = {
    label: null,
    fieldLabel: null,
    className: null,
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

    const anyLabel = fieldLabel || label;

    return (
      <div className={containerClassNames}>
        { anyLabel &&
          <MarkdownLabel label={anyLabel} />
        }
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
