import React, { Component } from 'react';

class TypographyPage extends Component {
  render() {
    return (
      <div className="grid__container">
        <h1>Network Canvas | Typography</h1>
        <div className="grid__item">
          <h1 className="type--title-1">H1</h1>
          <h2 className="type--title-2">H2</h2>
          <h3 className="type--title-3">H3</h3>
          <h4 className="type--title-4">H4</h4>
          <h5 className="type--title-5">H5</h5>
        </div>
      </div>
    );
  }
}

export default TypographyPage;
