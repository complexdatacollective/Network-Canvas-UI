import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';

class TextInput extends PureComponent {
  static propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    fieldLabel: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    input: {},
    meta: {},
    type: 'text',
    autoFocus: false,
    label: null,
    fieldLabel: null,
    placeholder: '',
    className: '',
  };

  componentWillMount() {
    this.id = uuid();
  }

  render() {
    const {
      input,
      meta: { error, active, invalid, touched },
      label,
      fieldLabel,
      className,
      type,
      autoFocus,
    } = this.props;

    const seamlessClasses = cx(
      className,
      'form-field',
      'form-field-text',
      {
        'form-field-text--has-focus': active,
        'form-field-text--has-error': invalid && touched && error,
      },
    );

    return (
      <div className="form-field-container">
        <h4>
          {fieldLabel || label || ''}
        </h4>
        <div className={seamlessClasses}>
          <input
            id={this.id}
            className="form-field-text__input"
            placeholder={label}
            autoFocus={autoFocus} // eslint-disable-line
            type={type}
            {...input}
          />
          {invalid && touched && <p className="form-field-text__error">{error}</p>}
        </div>
      </div>

    );
  }
}

export default TextInput;
