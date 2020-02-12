import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import cx from 'classnames';
import Icon from '../Icon';

class TextArea extends PureComponent {
  static propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    fieldLabel: PropTypes.string,
    className: PropTypes.string,
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

  constructor(props) {
    super(props);

    this.state = { isFocussed: false };
  }

  componentWillMount() {
    this.id = uniqueId('label');
  }

  render() {
    const {
      meta: { active, error, invalid, touched },
      label,
      placeholder,
      fieldLabel,
      className,
      type,
      autoFocus,
      hidden,
      input,
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
        name={input.name}
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
            placeholder={placeholder || label}
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
