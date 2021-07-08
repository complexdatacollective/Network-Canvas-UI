/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../src/styles/_all.scss';
import ExportSprite from '../src/components/Sprites/ExportSprite';

export default { title: 'Sprites/Export Sprite' };

const Template = ({ ...args }) => {
  const {
    percentProgress,
    statusText,
  } = args;

  console.log('args', args);

  return (
    <>
      <ExportSprite percentProgress="60" statusText={statusText} />
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  percentProgress: 33,
  statusText: 'Exporting asdasditems...',
};
