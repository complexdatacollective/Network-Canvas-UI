import React, { PureComponent } from 'react';
import { uniqueId } from 'lodash';
import cx from 'classnames';
import { fieldPropTypes } from 'redux-form';
import Icon from '../Icon';

class TextArea extends PureComponent {
  static propTypes = {
    ...fieldPropTypes,
  };

  constructor(props) {
    super(props);

    this.state = { isFocussed: false };
  }

  componentWillMount() {
    this.id = uniqueId('label');
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
      <label
        htmlFor={this.id}
        className={'form-field-container'}
        hidden={hidden}
      >
        {
          (fieldLabel || label) ?
            (<h4>
              {fieldLabel || label || ''}
            </h4>)
            : ''
        }
        <div className={seamlessClasses}>
          <textarea
            id={this.id}
            className="form-field form-field-text form-field-text--area form-field-text__input"
            placeholder={label || placeholder}
            autoFocus={autoFocus} // eslint-disable-line
            type={type}
            {...input}
          />
          {invalid && touched && <div className="form-field-text__error"><Icon name="warning" />{error}</div>}
        </div>
      </label>
    );
  }
}

export default TextArea;
