import React, { useState } from 'react';
import faker from 'faker';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import ProtocolCard from '../src/components/Cards/ProtocolCard';
import '../src/styles/_all.scss';

const requiredProps = {
  name: faker.lorem.sentence(),
  schemaVersion: 5,
  lastModified: Date.now(),
  installationDate: Date.now(),
  description: faker.lorem.paragraph(),
};

export default { title: 'ProtocolCard' };

export const normal = () => (
  <Harness
    requiredProps={requiredProps}
    onClickHandler={action('onClickHandler')}
  >
    {props => <ProtocolCard {...props} />}
  </Harness>
);

export const longtext = () => (
  <Harness
    requiredProps={requiredProps}
    description={faker.lorem.paragraphs()}
    onClickHandler={action('onClickHandler')}
  >
    {props => <ProtocolCard {...props} />}
  </Harness>
);

export const isOutdated = () => (
  <Harness
    requiredProps={requiredProps}
    isOutdated
    onClickHandler={action('onClickHandler')}
    onStatusClickHandler={action('onStatusClickHandler')}
  >
    {props => <ProtocolCard {...props} />}
  </Harness>
);

export const isObsolete = () => (
  <Harness
    requiredProps={requiredProps}
    isObsolete
    onClickHandler={action('onClickHandler')}
    onStatusClickHandler={action('onStatusClickHandler')}
  >
    {props => <ProtocolCard {...props} />}
  </Harness>
);
