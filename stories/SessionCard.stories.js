import React from 'react';
import faker from 'faker';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import SessionCard from '../src/components/Cards/SessionCard';
import '../src/styles/_all.scss';

const requiredProps = {
  caseId: faker.lorem.sentence(),
  protocolUID: 1,
  updatedAt: faker.date.recent().toISOString(),
  lastExportedAt: faker.date.recent().toISOString(),
  stageIndex: 0,
  installedProtocols: {
    1: {
      name: 'Mock Protocol',
      stages: Array(10),
    },
  },
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
