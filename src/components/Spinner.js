import React from 'react';

const Spinner = ({name}) => (
  <div className="spinner">
    <div className="circle-container">
      <div className="half-circle" />
      <div className="half-circle rot" />
    </div>
    <div className="circle-container">
      <div className="half-circle" />
      <div className="half-circle rot" />
    </div>
    <div className="circle-container">
      <div className="half-circle" />
      <div className="half-circle rot" />
    </div>
    <div className="circle-container">
      <div className="half-circle" />
      <div className="half-circle rot" />
    </div>
  </div>
);

export default Spinner;
