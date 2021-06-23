/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../src/styles/_all.scss';
import Steps from '../src/components/Wizard/Steps';
import Step from '../src/components/Wizard/Step';

export default {
  title: 'Components/Wizard',
  args: {
    index: 1,
  },
  argTypes: {
    index: {
      control: {
        type: 'range',
        min: 1,
        max: 4,
      },
    },
  },
};

const Template = ({
  index,
}) => (
  <Steps index={index}>
    <Step key={1}>
      Step 1
    </Step>
    <Step key={2}>
      Step 2
    </Step>
    <Step key={3}>
      Step 3
    </Step>
  </Steps>
);

export const Normal = Template.bind({});
