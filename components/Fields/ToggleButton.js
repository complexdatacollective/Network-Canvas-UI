import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';

class ToggleButton extends PureComponent {
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
      'form-field',
      'form-field-toggle-button',
      className,
      {
        'form-field-toggle-button--disabled': disabled,
      },
    );

    return (
      <div className="form-field-container">
        <h4>
          What could be more important than this?
        </h4>
        <label className={componentClasses} htmlFor={this.id}>
          <div>
            <input
              className="form-field-toggle-button__input"
              id={this.id}
              {...input}
              {...rest}
              type="checkbox"
            />
            <div className="form-field-toggle-button__button">
              <span className="form-field-toggle-button__button" />
            </div>
            <div className="form-field-toggle-button__label">
              {label || this.props.input.value}
            </div>
          </div>
        </label>
      </div>
    );
  }
}

export default ToggleButton;
