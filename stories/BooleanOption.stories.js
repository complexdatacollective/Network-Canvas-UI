import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import BooleanOption from '../src/components/Boolean/BooleanOption';
import '../src/styles/_all.scss';

import './Boolean.stories.scss';

export default { title: 'Fields/BooleanOption' };

const requiredProps = {
  label: 'This is the **boolean** option.',
  value: true,
};

export const renders = () => {
  return (
    <Harness
      requiredProps={requiredProps}
    >
      {(props) => <BooleanOption {...props} />}
    </Harness>
  );
};

export const customClass = () => {
  return (
    <Harness
      requiredProps={requiredProps}
      classes="red"
    >
      {(props) => <BooleanOption {...props} />}
    </Harness>
  );
};
