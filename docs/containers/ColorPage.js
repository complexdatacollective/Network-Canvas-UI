import React, { Component } from 'react';

class ColorPage extends Component {
  render() {
    // color key maps to color values in scss map in _default.scss
    const colors = [
      {
        name: 'Network Canvas Coral',
        color: 'nc-coral'
      },
      {
        name: 'Mustard',
        color: 'mustard'
      },
      {
        name: 'Light Sea Green',
        color: 'sea-green'
      },
      {
        name: 'Navy Taupe',
        color: 'navy-taupe'
      },
      {
        name: 'Cyber Grape',
        color: 'cyber-grape'
      },
      {
        name: 'Rich Black',
        color: 'rich-black'
      },
      {
        name: 'Sea Serpent',
        color: 'sea-serpent'
      },
      {
        name: 'Purple Pizazz',
        color: 'purple-pizazz'
      },
      {
        name: 'Paradise Pink',
        color: 'paradise-pink'
      },
      {
        name: 'Cerulean Blue',
        color: 'cerulean-blue'
      },
      {
        name: 'Kiwi',
        color: 'kiwi'
      },
      {
        name: 'Neon Carrot',
        color: 'neon-carrot'
      },
      {
        name: 'Barbie Pink',
        color: 'barbie-pink'
      },
      {
        name: 'Tomato',
        color: 'tomato'
      },
      {
        name: 'Charcoal',
        color: 'charcoal'
      },
      {
        name: 'Platinum',
        color: 'platinum'
      },
      {
        name: 'Dark Platinum',
        color: 'dark-platinum'
      }
    ];

    return (
      <div className="grid__container">
        <h1>Network Canvas | Colors</h1>
        <div className="grid__item">
          {colors.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`color__blob color--${item.color}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPage;
