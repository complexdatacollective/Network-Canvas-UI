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
      label="This input type **requires** the user to _specifically_ set a value, which can also be cleared."
      input={{
        onChange: handleChange,
        value,
      }}
      options={[
        { label: '**Yes**. This is a really long label that represents the value yes. Are there any other questions?', value: true },
        { label: 'No', value: false },
      ]}
    >
      {(props) => <Boolean {...props} />}
    </Harness>
  );
};

export const longText = () => {
  const [value, setValue] = useState('foo');

  const handleChange = (...args) => {
    setValue(...args);
    action('change')(...args);
  };

  return (
    <Harness
      label="This version has longer labels."
      input={{
        onChange: handleChange,
        value,
      }}
    >
      {(props) => <Boolean {...props} />}
    </Harness>
  );
};
