import React, { useState, useEffect } from 'react';
import faker from 'faker';
import { v4 as uuid } from 'uuid';
import Toggle from '../src/components/Fields/Toggle';
import ItemList from '../src/components/List/ItemList';
import '../src/styles/_all.scss';
import Node from '../src/components/Node';

const TestCard = ({ name }) => (
  <div
    style={{
      background: 'Tomato',
      padding: '5rem',
      width: '100%',
      margin: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {name}
  </div>
);

const mockItems = (length = 100) => [...Array(length)].map(() => (
  {
    id: uuid(),
    attributes: {
      name: faker.name.firstName(),
    },
  }
)).sort((item1, item2) => item1.attributes.name > item2.attributes.name);

export default {
  title: 'Components/ItemList',
  argTypes: {
    items: {
      options: ['10,000', 1000, 100, 10],
      mapping: {
        '10,000': mockItems(10000),
        1000: mockItems(1000),
        100: mockItems(100),
        10: mockItems(10),
      },
      control: { type: 'radio' },
    },
    itemComponent: {
      options: ['TestCard', 'Node'],
      mapping: {
        TestCard,
        Node: ({ name }) => <Node label={name} />,
      },
      control: { type: 'radio' },
    },
    useItemSizing: {
      type: 'boolean',
    },
  },
  args: {
    items: 1000,
    useItemSizing: true,
    itemComponent: 'Node',
  },
};

const Template = (args) => (
  <div
    style={{
      display: 'flex',
      height: '400px',
      width: '100%',
      border: '1px solid tomato',
      '--base-font-size': '12px',
      resize: 'both',
      overflow: 'auto',
    }}
  >
    <ItemList
      {...args}
      // itemComponent={(props) => <Node label={props.name} />}
      // itemClickHandler
      // emptyComponent
      // mode=[] // details, list, cards
      // cardColumnBreakpoints={{
      //   1: 250,
      //   2: 500,
      //   3: 750,
      // }}
    />
  </div>
);

export const Primary = Template.bind({});
