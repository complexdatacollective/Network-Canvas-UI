import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';

class Checkbox extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    input: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',
    label: null,
    disabled: false,
  };

  componentWillMount() {
    this.id = uuid();
  }

  render() {
    const {
      label,
      className,
      input,
      disabled,
      ...rest
    } = this.props;

    const componentClasses = cx(
      'form-field-checkbox',
      className,
      {
        'form-field-checkbox--disabled': disabled,
      },
    );

    return (
      <label className={componentClasses} htmlFor={this.id}>
        <div>
          <input
            className="form-field-checkbox__input"
            id={this.id}
            {...input}
            {...rest}
            type="checkbox"
          />
          <div className="form-field-checkbox__checkbox" />
          <div className="form-field-checkbox__label">
            {label || this.props.input.value}
          </div>
        </div>
      </label>
    );
  }
}

export default Checkbox;
