import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import Slider from '../src/components/Fields/Slider';
import '../src/styles/_all.scss';

const requiredProps = {
  input: {},
};

export default { title: 'Fields/VisualAnalogScale' };

export const noOptions = () => {
  return (
    <Harness
      requiredProps={requiredProps}
      label="What do you make of that?"
      meta={{}}
    >
      {props => <Slider {...props} />}
    </Harness>
  );
};

export const interaction = () => {
  const [value, setValue] = useState(null);
  const handleBlur = (...args) => {
    setValue(...args);
    action('change')(...args);
  };

  return (
    <Harness
      requiredProps={requiredProps}
      label="What do you make of that?"
      type="scalar"
      meta={{}}
      minLabel={1}
      maxLabel={5}
      input={{
        onBlur: handleBlur,
        value,
      }}
    >
      {props => <Slider {...props} />}
    </Harness>
  );
};
