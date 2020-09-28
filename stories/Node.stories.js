import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import Node from '../src/components/Node';
import '../src/styles/_all.scss';
import colors from './helpers/Colors';

const requiredProps = {
  linking: true,
};

export default {
  title: 'Node',
  argTypes: { handleClick: { action: 'clicked' } },
};

export const selectable = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Harness
      requiredProps={requiredProps}
      handleClick={() => setSelected(!selected)}
    >
      {props => <Node {...props} selected />}
    </Harness>
  );
};

export const linking = () => {

  return (
    <Harness
      requiredProps={requiredProps}
      handleClick={() => setSelected(!selected)}
    >
      {props => <Node {...props} />}
    </Harness>
  );
};

export const colorVariants = () => {
  return colors.map(color => (
    <Harness
      requiredProps={requiredProps}
      color={color}
    >
      {props => <Node {...props} />}
    </Harness>
  ));
};
