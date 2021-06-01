import React from 'react';
// import './tiles.css';

const Star = () => (
  <g cx="0" cy="0">
    <rect width="300" height="300" x="0" y="0" className="cls-2" />
    <circle cx="0" cy="0" r="100" className="cls-1" />
    <circle cx="0" cy="300" r="100" className="cls-1" />
    <circle cx="300" cy="0" r="100" className="cls-1" />
    <circle cx="300" cy="300" r="100" className="cls-1" />
    <circle cx="0" cy="150" r="50" className="cls-2" />
    <circle cx="150" cy="0" r="50" className="cls-2" />
    <circle cx="300" cy="150" r="50" className="cls-2" />
    <circle cx="150" cy="300" r="50" className="cls-2" />
  </g>
);

export default Star;
