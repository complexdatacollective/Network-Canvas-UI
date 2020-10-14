import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isBoolean } from 'lodash';
import uuid from 'uuid';
import Icon from '../Icon';

class Toggle extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    fieldLabel: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object,
  };

  static defaultProps = {
    className: '',
    label: null,
    title: '',
    fieldLabel: null,
    disabled: false,
    meta: {},
  };

  componentWillMount() {
    this.id = uuid();

    // Because redux forms will just not pass on this
    // field if it was never touched and we need it to
    // return `false`.
    if (!isBoolean(this.props.input.value)) {
      this.props.input.onChange(false);
    }
  }

  render() {
    const {
      label,
      fieldLabel,
      className,
      input,
      disabled,
      title,
      meta: { error, invalid, touched },
      ...rest
    } = this.props;

    const containerClassNames = cx(
      'form-field-container',
      {
        'form-field-toggle--has-error': invalid && touched && error,
      },
    );

    const componentClasses = cx(
      'form-field',
      'form-field-toggle',
      className,
      {
        'form-field-toggle--disabled': disabled,
        'form-field-toggle--has-error': invalid && touched && error,
      },
    );

    return (
      <div className={containerClassNames} name={input.name}>
        { fieldLabel &&
          <h4>{fieldLabel}</h4>
        }
        <label className={componentClasses} htmlFor={this.id} title={title}>
          <input
            className="form-field-toggle__input"
            id={this.id}
            {...input}
            {...rest}
            checked={!!this.props.input.value}
            disabled={disabled}
            type="checkbox"
            value="true"
          />
          <div className="form-field-toggle__toggle">
            <span className="form-field-toggle__button" />
          </div>
          <div className="form-field-toggle__label">
            {label || this.props.input.value}
          </div>
        </label>
        {invalid && touched && <div className="form-field-toggle__error"><Icon name="warning" />{error}</div>}
      </div>
    );
  }
}

export default Toggle;
