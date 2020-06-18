import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import ToggleButtonGroup from '../src/components/Fields/ToggleButtonGroup';
import '../src/styles/_all.scss';

const requiredProps = {
  input: {},
};

export default { title: 'ToggleButtonGroup' };

export const interaction = () => {
  const [value, setValue] = useState(['foo']);
  const handleChange = (...args) => {
    setValue(...args);
    action('change')(...args);
  };

  return (
    <Harness
      requiredProps={requiredProps}
      label="What is your occupation?"
      options={[
        { label: 'Epidemiologist', value: 1 },
        { label: 'Telecommunications Technician', value: 2 },
        { label: 'Manufacturing', value: 3 },
        { label: 'Industrial-Organization Psychologist', value: 4 },
      ]}
      input={{
        onChange: handleChange,
        value,
      }}
    >
      {props => <ToggleButtonGroup {...props} />}
    </Harness>
  );
};
