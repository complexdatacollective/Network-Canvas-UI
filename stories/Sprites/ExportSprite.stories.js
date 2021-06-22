/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../../src/styles/_all.scss';
import ExportSprite from '../../src/components/Sprites/ExportSprite';

export default {
  title: 'Components/Sprites/ExportSprite',
};

const Template = ({

}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ExportSprite />
  </div>
);

export const Normal = Template.bind({});
