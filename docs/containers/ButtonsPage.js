import React, { Component } from 'react';

class ButtonsPage extends Component {
  render() {
    return (
      <div className="grid__container">
        <h1>Network Canvas | Buttons</h1>
        <div className="grid__item">
          <button className="button">Create</button>
        </div>
        <i className="icon" />
      </div>
    );
  }
}

export default ButtonsPage;
