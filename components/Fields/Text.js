import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import Icon from '../Icon';

class TextInput extends PureComponent {
  static propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    fieldLabel: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf([
      'text',
      'number',
    ]),
    placeholder: PropTypes.string,
    hidden: PropTypes.bool,
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
    hidden: false,
  };

  componentWillMount() {
    this.id = uuid();
  }

  render() {
    const {
      input,
      meta: { error, active, invalid, touched },
      label,
      placeholder,
      fieldLabel,
      className,
      type,
      autoFocus,
      hidden,
    } = this.props;

    const seamlessClasses = cx(
      className,
      'form-field-text',
      {
        'form-field-text--has-focus': active,
        'form-field-text--has-error': invalid && touched && error,
      },
    );

    return (
      <div className="form-field-container" hidden={hidden}>
        {
          (fieldLabel || label) ?
            (<h4>
              {fieldLabel || label || ''}
            </h4>)
            : ''
        }
        <div className={seamlessClasses}>
          <input
            id={this.id}
            className="form-field form-field-text form-field-text__input"
            placeholder={label || placeholder}
            autoFocus={autoFocus} // eslint-disable-line
            type={type}
            {...input}
          />
          {invalid && touched && <div className="form-field-text__error"><Icon name="warning" />{error}</div>}
        </div>

      </div>

    );
  }
}

export default TextInput;
