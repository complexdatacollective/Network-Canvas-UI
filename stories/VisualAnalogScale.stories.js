import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import VisualAnalogScale from '../src/components/Fields/VisualAnalogScale';
import '../src/styles/_all.scss';

const requiredProps = {
  input: {},
};

export default { title: 'Fields/VisualAnalogScale' };

export const interaction = () => {
  const [value, setValue] = useState(null);
  const handleBlur = (...args) => {
    setValue(...args);
    action('change')(...args);
  };

  return (
    <Harness
      requiredProps={requiredProps}
      label="What do you *make* of that?"
      type="scalar"
      meta={{}}
      parameters={{
        minLabel: 'not much',
        maxLabel: 'a *lot*',
      }}
      input={{
        onBlur: handleBlur,
        value,
      }}
    >
      {props => <VisualAnalogScale {...props} />}
    </Harness>
  );
};
