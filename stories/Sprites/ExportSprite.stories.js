/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../../src/styles/_all.scss';
import ExportSprite from '../../src/components/Sprites/ExportSprite';

export default {
  title: 'Components/Sprites/ExportSprite',
  args: {
    size: 500,
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 100,
        max: 500,
        step: 100,
      },
    },
  },
};

const Template = ({
  size,
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    <ExportSprite size={size} />
  </div>
);

export const Normal = Template.bind({});
