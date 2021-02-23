import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ALLOWED_MARKDOWN_LABEL_TAGS } from '../../../utils/config';

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
        <ReactMarkdown
          source={label}
          allowedTypes={ALLOWED_MARKDOWN_LABEL_TAGS}
        />
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
