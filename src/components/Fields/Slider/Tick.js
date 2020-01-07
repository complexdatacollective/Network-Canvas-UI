import React from 'react';
import PropTypes from 'prop-types';

const Tick = ({ tick, getLabelForValue }) => {
  const { value, percent } = tick;
  const label = getLabelForValue(value);

  return (
    <div
      className="form-field-slider__tick"
      style={{
        position: 'absolute',
        left: `${percent}%`,
      }}
    >
      <div className="form-field-slider__tick-label">
        {label}
      </div>
    </div>
  );
};

Tick.propTypes = {
  tick: PropTypes.any.isRequired,
  getLabelForValue: PropTypes.func,
};

Tick.defaultProps = {
  tick: null,
  getLabelForValue: () => null,
};

export default Tick;
