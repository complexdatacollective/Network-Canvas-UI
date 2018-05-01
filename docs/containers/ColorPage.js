import React, { Component } from 'react';
import { colors } from '../constants';

class ColorPage extends Component {
  render() {
    return (
      <div className="grid__container">
        <h1>Network Canvas | Colors</h1>
        <div className="grid__item">
          {colors.map((item, idx) => (
            <div
              key={idx}
             className={`color__blob color--${item.color}`}
            />
            ))}
        </div>
      </div>
    );
  }
}

export default ColorPage;
