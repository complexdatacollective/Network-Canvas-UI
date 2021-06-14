/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../src/styles/_all.scss';
import DataCard from '../src/components/Cards/DataCard';

export default {
  title: 'Components/Cards/DataCard',
  args: {
    title: 'An unstilled foxglove ',
    data: [
      { label: 'foo', value: 'bar' },
    ],
    width: 470,
    allowDrag: false,
    onClick: null,
  },
};

const Template = ({ title, data, width, allowDrag, onClick }) => (
  <div style={{ width }}>
    <DataCard
      title={title}
      data={data}
      allowDrag={allowDrag}
      onClick={onClick}
    />
  </div>
);

export const Normal = Template.bind({});

export const LongTitle = Template.bind({});
LongTitle.args = {
  title: 'This is not to discredit the idea that the literature would have us believe that a touring cement is not but a thought',
};

export const LongData = Template.bind({});
LongData.args = {
  data: [
    {
      label: 'description',
      value: 'A capital is the attack of a helmet. Varus trips show us how brians can be tails.',
    },
  ],
};

export const ManyRows = Template.bind({});
ManyRows.args = {
  data: [
    {
      label: 'name',
      value: 'a truffled surfboard',
    },
    {
      label: 'more detail',
      value: 'Some posit the hurtling witness',
    },
    {
      label: 'description',
      value: 'A capital is the attack of a helmet. Varus trips show us how brians can be tails.',
    },
    {
      label: 'feature',
      value: 'alarm is a bench',
    },
    {
      label: 'age',
      value: '42',
    },
  ],
};
