import React from 'react';
import PropTypes from 'prop-types';
import BooleanOption from './BooleanOption';

const Boolean = ({
  options,
  value,
  onChange,
}) => (
  <div className="boolean">
    <div className="boolean__options">
      {options.map(({ label, value: optionValue }) => (
        <BooleanOption
          label={label}
          selected={value === optionValue}
          onClick={() => onChange(optionValue)}
        />
      ))}
    </div>
    <div className="boolean__reset">
      <div onClick={() => onChange(null)}>
        Reset answer
      </div>
    </div>
  </div>
);

const valuePropTypes = PropTypes.oneOf([
  PropTypes.bool,
  PropTypes.string,
  PropTypes.number,
]);

const optionPropTypes = PropTypes.shape({
  label: PropTypes.string,
  value: valuePropTypes,
});

Boolean.propTypes = {
  options: PropTypes.arrayOf(optionPropTypes),
  value: valuePropTypes,
  onChange: PropTypes.func,
};

Boolean.defaultProps = {
  value: null,
  options: [],
  onChange: () => {},
};

export default Boolean;
