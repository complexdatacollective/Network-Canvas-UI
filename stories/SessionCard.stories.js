import React from 'react';
import faker from 'faker';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import SessionCard from '../src/components/Cards/SessionCard';
import '../src/styles/_all.scss';

const requiredProps = {
  caseId: faker.lorem.sentence(),
  updatedAt: faker.date.recent().toISOString(),
  lastExportedAt: faker.date.recent().toISOString(),
  protocolName: 'Mock Protocol',
  progress: 55,
};

export default { title: 'SessionCard' };

export const normal = () => (
  <Harness
    requiredProps={requiredProps}
    onClickHandler={action('onClickHandler')}
  >
    {props => <SessionCard {...props} />}
  </Harness>
);
