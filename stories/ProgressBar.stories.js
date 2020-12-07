import React from 'react';
import faker from 'faker';
import Harness from './helpers/Harness';
import ProgressBar from '../src/components/ProgressBar';

import '../src/styles/_all.scss';

const requiredProps = {
  percentProgress: faker.random.number({
    min: 1,
    max: 100,
  }),
};

export default { title: 'Components/ProgressBar' };

export const normal = () => (
  <Harness
    requiredProps={requiredProps}
  >
    {props => <div style={{ height: '10rem' }}><ProgressBar {...props} /></div>}
  </Harness>
);

export const horizontal = () => (
  <Harness
    requiredProps={requiredProps}
    orientation="horizontal"
  >
    {props => <ProgressBar {...props} />}
  </Harness>
);

export const indeterminate = () => (
  <ProgressBar
    requiredProps={requiredProps}
    orientation="horizontal"
    percentProgress={50}
    indeterminate
  />
);

export const complete = () => (
  <Harness
    requiredProps={requiredProps}
    orientation="horizontal"
    percentProgress={100}
  >
    {props => <ProgressBar {...props} />}
  </Harness>
);
