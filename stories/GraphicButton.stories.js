import React from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import GraphicButton from '../src/components/GraphicButton';

import '../src/styles/_all.scss';

const requiredProps = {
  // name: faker.lorem.sentence(),
  // schemaVersion: 5,
  // lastModified: faker.date.recent().toISOString(),
  // installationDate: faker.date.recent().toISOString(),
  // description: faker.lorem.sentence(),
};

export default { title: 'GraphicButton' };

export const normal = () => (
  <Harness
    requiredProps={requiredProps}
    graphicPosition="-4.5rem bottom"
    color="slate-blue--dark"
    graphicSize="auto 105%"
    onClick={action('onClick')}
  >
    {props => <GraphicButton {...props}><h2>Open</h2><h3>from Computer</h3></GraphicButton>}
  </Harness>
);
