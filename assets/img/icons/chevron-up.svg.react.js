import React from 'react';

export default class SVG extends React.PureComponent {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 25" {...this.props}>
        <polygon className="cls-2" transform="translate(18.000000, 12.750000) rotate(90.000000) translate(-18.000000, -12.750000) " points="6 12.7 24.4 -5 30 0.8 17.5 12.7 30 24.7 24.4 30.5" />
      </svg>
    );
  }
}
