import React from 'react';
import './tiles.css';

const Tee = () => (
  <g cx="0" cy="0" transform="rotate(90 150 150)">
    <rect width="300" height="300" x="0" y="0" className="cls-1" />
    <path
      d="M 100 0 A 100 100 0 0 1 0 100 L 0 200 L 300 200 L 300 100 A 100 100 0 0 1 200 0 z"
      className="cls-2"
    />
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

export default Tee;
