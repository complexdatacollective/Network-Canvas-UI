import React, { Component } from 'react';

import { Icon } from 'Components';

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
      'menu',
      'menu-ng',
      'menu-ord',
      'menu-cat',
      'menu-sociogram',
      'menu-map',
      'menu-custom-interface',
      'menu-default-interface',
      'menu-new-session',
      'menu-download-data',
      'menu-purge-data',
      'menu-quit'
    ];

    const actionsIcons = [
      'back-arrow',
      'next-arrow',
      'cancel',
      'close',
      'edit',
      'form-arrow-left',
      'form-arrow-right',
      'reset',
      'toggle-on',
      'toggle-off',
      'settings'
    ];

    const narrativeIcons = [
      'add-a-context',
      'add-a-person',
      'add-a-place',
      'add-a-relationship',
      'add-a-screen',
      'highlighted',
      'links',
      'contexts',
      'trash-bin',
      'warning'
    ];

    return (
      <div className="grid__container">
        <h1 className="type--title-1">Network Canvas | Icons</h1>
        <div className="grid__item">
          <h2 className="type--title-2">All Icons</h2>
          {[...menuIcons, ...actionsIcons, ...narrativeIcons].map((iconName, idx) => {
            return (
              <Icon
                key={`${iconName}-${idx}`}
                name={`${iconName}`}
              />
            );
          })}
        </div>
        <div className="grid__item">
          <h2 className="type--title-2">Icon Colours</h2>
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
                <h3 className="type--title-4">Actions Icons</h3>
                {actionsIcons.map((settingsIcon) => {
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
        </div>
      </div>
    );
  }
}

export default IconsPage;
