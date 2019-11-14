import React from 'react';

const Track = ({ source, target, getTrackProps }) => (
  <div
    className="form-field-slider__track"
    style={{
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  >
    <div className="form-field-slider__track-line" />
  </div>
);

export default Track;
