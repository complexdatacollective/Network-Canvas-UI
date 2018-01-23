import React from 'react';

const Spinner = props => (
  <div className="nc-spinner">
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
