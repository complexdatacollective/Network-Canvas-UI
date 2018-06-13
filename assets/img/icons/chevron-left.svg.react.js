import React from 'react';

export default class SVG extends React.PureComponent {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 35.5" {...this.props}>
        <polygon className="cls-2" points="0,17.7 18.4,0 24,5.8 11.5,17.7 24,29.7 18.4,35.5" />
      </svg>
    );
  }
}
