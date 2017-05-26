import React, { Component } from 'react';

import { Button, Icon } from 'Components';

import { colors } from '../constants';

class ButtonsPage extends Component {
  render() {
    return (
      <div className="grid__container">
        <h1>Network Canvas | Buttons</h1>
        <div className="grid__item">
          {colors.map((color, idx) => {
            return (
              <div key={idx}>
                <Button
                  size="small"
                  color={color.color}
                >
                  Creating
                </Button>
                <Button
                  color={color.color}
                  icon="close"
                  content="Close"
                />
                <Button
                  color={color.color}
                  icon={<Icon name="links" />}
                  iconPosition="right"
                >
                  Links
                </Button>
              </div>
            );
          })}

        </div>
        <i className="icon" />
      </div>
    );
  }
}

export default ButtonsPage;
