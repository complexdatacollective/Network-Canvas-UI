import React, { Component } from 'react';

import { Icon } from 'components';

import icons from 'utils/getIcons';

class IconsPage extends Component {
  render() {
    const colors = [
      'primary',
      'sea-serpent',
      'purple-pizazz',
      'paradise-pink',
      'kiwi',
      'cerulean-blue'
    ];

    const menuIcons = [
      'menu-ng',
      'menu-ord',
      'menu-cat',
      'menu-sociogram',
      'menu-map',
      'menu-custom-interface',
      'menu-default-interface'
    ];

    const settingsIcons = [
      'menu-new-session',
      'menu-download-data',
      'menu-purge-data',
      'menu-quit'
    ];

    const narrativeIcons = [
      'highlighted',
      'links',
      'contexts'
    ];

    return (
      <div className="grid__container">
        <h1 className="type--title-1">Network Canvas | Icons</h1>
        {colors.map((color, idx) => {
          return (
            <div key={idx} className="grid__item">
              <h2 className="type--title-2">{color}</h2>
              <h3 className="type--title-4">Stages Menu</h3>
              {menuIcons.map((menuIcon) => {
                return (
                  <Icon
                    key={`${menuIcon}-${idx}`}
                    name={`${menuIcon}`}
                    color={color} />
                );
              })}
              <h3 className="type--title-4">Settings Menu</h3>
              {settingsIcons.map((settingsIcon) => {
                return (
                  <Icon
                    key={`${settingsIcon}-${idx}`}
                    name={`${settingsIcon}`}
                    color={color} />
                );
              })}
              <h3 className="type--title-4">Narrative Panel</h3>
              {narrativeIcons.map((narrativeIcon) => {
                return (
                  <Icon
                    key={`${narrativeIcon}-${idx}`}
                    name={`${narrativeIcon}`}
                    color={color} />
                );
              })}
            </div>
          );
        })}
        <div className="grid__item">
          <h2 className="type--title-2">All Icons</h2>
          {Object.keys(icons).map(iconName =>
            <Icon key={iconName} name={iconName} />
          )}
        </div>
      </div>
    );
  }
}

export default IconsPage;
