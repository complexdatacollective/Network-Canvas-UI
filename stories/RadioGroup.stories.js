import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import RadioGroup from '../src/components/Fields/RadioGroup';
import '../src/styles/_all.scss';

const requiredProps = {
  input: {},
};

export default { title: 'RadioGroup' };

export const interaction = () => {
  const [value, setValue] = useState('foo');
  const handleChange = (...args) => {
    setValue(...args);
    action('change')(...args);
  };

  return (
    <Harness
      requiredProps={requiredProps}
      label="What do you make of that?"
      options={[
        { label: 'foo', value: 'foo' },
        { label: 'bar', value: 'bar' },
        { label: 'bazz', value: 'bazz' },
      ]}
      input={{
        onChange: handleChange,
        value,
      }}
    >
      {props => <RadioGroup {...props} />}
    </Harness>
  );
};
