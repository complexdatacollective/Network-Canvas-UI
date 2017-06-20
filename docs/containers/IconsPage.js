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

    const addButtonIcons = [
      'add-a-context',
      'add-a-person',
      'add-a-place',
      'add-a-relationship',
      'add-a-screen'
    ];

    const actionsIcons = [
      'error',
      'info',
      'warning',
      'edit',
      'trash-bin',
      'settings',
      'menu',
      'back-arrow',
      'next-arrow',
      'toggle-on',
      'toggle-off',
      'form-arrow-left',
      'form-arrow-right',
      'reset',
      'cancel',
      'close'
    ];

    const stagesMenuIcons = [
      'menu',
      'menu-name-generator',
      'menu-ordinal',
      'menu-category',
      'menu-sociogram',
      'menu-map',
      'menu-custom-interface',
      'menu-default-interface'
    ];

    const settingsMenuIcons = [
      'menu-new-session',
      'menu-download-data',
      'menu-purge-data',
      'menu-quit'
    ];

    const narrativePanelIcons = [
      'highlighted',
      'links',
      'contexts'
    ];

    return (
      <div className="grid__container">
        <h1 className="type--title-1">Network Canvas | Icons</h1>
        <div className="grid__item">
          <h2 className="type--title-2">All Icons</h2>
          {[
            ...addButtonIcons,
            ...actionsIcons,
            ...stagesMenuIcons,
            ...settingsMenuIcons,
            ...narrativePanelIcons
          ].map((iconName, idx) => {
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
                {stagesMenuIcons.map((menuIcon) => {
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
                {narrativePanelIcons.map((narrativeIcon) => {
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
