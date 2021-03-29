import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import Boolean from '../src/components/Fields/Boolean';
import '../src/styles/_all.scss';

export default { title: 'Fields/Boolean' };

export const interaction = () => {
  const [value, setValue] = useState('foo');

  const handleChange = (...args) => {
    setValue(...args);
    action('change')(...args);
  };

  return (
    <Harness
      label="What do you make of **that**?"
      input={{
        onChange: handleChange,
        value,
      }}
    >
      {(props) => <Boolean {...props} />}
    </Harness>
  );
};
