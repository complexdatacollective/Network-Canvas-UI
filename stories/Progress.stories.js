import React from 'react';
import faker from 'faker';
import Harness from './helpers/Harness';
import Progress from '../src/components/Progress';

import '../src/styles/_all.scss';

const requiredProps = {
  value: faker.random.number({
    min: 1,
    max: 100,
  }),
};

export default { title: 'Components/Progress' };

export const normal = () => (
  <Harness
    requiredProps={requiredProps}
  >
    {props => <Progress {...props} />}
  </Harness>
);

export const indeterminate = () => (
  <Harness
    requiredProps={requiredProps}
    value={null}
  >
    {props => <Progress {...props} />}
  </Harness>
);
