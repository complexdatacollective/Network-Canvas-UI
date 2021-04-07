import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MarkdownLabel from './MarkdownLabel';
import Boolean from '../Boolean/Boolean';

const BooleanField = ({
  label,
  noReset,
  className,
  input,
  disabled,
  options,
}) => {
  const componentClasses = cx(
    'form-field-container form-field-boolean',
    className,
    {
      'form-field-boolean--disabled': disabled,
    },
  );

  return (
    <div className={componentClasses}>
      {label && <MarkdownLabel label={label} />}
      <div className="form-field-boolean__control">
        <Boolean
          options={options}
          value={input.value}
          onChange={input.onChange}
          noReset={noReset}
        />
      </div>
    </div>
  );
};

const valuePropTypes = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
  PropTypes.number,
]);

BooleanField.propTypes = {
  label: PropTypes.node,
  noReset: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
      ]).isRequired,
      value: valuePropTypes,
      classes: PropTypes.string,
    }),
  ),
};

BooleanField.defaultProps = {
  className: '',
  noReset: false,
  label: null,
  disabled: false,
  options: [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ],
};

export default BooleanField;
