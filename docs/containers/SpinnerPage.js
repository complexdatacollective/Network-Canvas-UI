import React, { Component } from 'react';
import { Spinner } from 'Components';

class SpinnerPage extends Component {
  render() {
    return (
      <div className="grid__container">
        <h1>Network Canvas | Spinners</h1>
        <div className="grid__container">
          <h2 className="type--page-divider">Sizes</h2>
          <h3 className="type--page-title--large">Small</h3>
          <Spinner small />
          <h3 className="type--page-title--large">Standard</h3>
          <Spinner />
          <h3 className="type--page-title--large">Large</h3>
          <Spinner large />
        </div>
      </div>
    );
  }
}

export default SpinnerPage;
