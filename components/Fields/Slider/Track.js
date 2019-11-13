import React from 'react';

const Track = ({ source, target, getTrackProps }) => (
  <div
    style={{
      position: 'absolute',
      height: 20,
      zIndex: 1,
      marginTop: 35,
      backgroundColor: 'red',
      borderRadius: 5,
      cursor: 'pointer',
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  />
);

export default Track;
