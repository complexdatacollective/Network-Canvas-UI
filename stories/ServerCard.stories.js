import React from 'react';
import faker from 'faker';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import ServerCard from '../src/components/Cards/ServerCard';
import '../src/styles/_all.scss';

const requiredProps = {
  name: faker.internet.domainName(),
  address: [
    faker.internet.ip(),
    faker.internet.ipv6(),
  ],
};

export default { title: 'ServerCard' };

export const normal = () => (
  <Harness
    requiredProps={requiredProps}
    onClickHandler={action('onClickHandler')}
  >
    {props => <ServerCard {...props} />}
  </Harness>
);
