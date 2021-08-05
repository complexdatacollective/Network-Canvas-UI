import React, { useState, useEffect } from 'react';
import faker from 'faker';
import { v4 as uuid } from 'uuid';
import ItemList from '../src/components/List/ItemList';
import '../src/styles/_all.scss';
import Node from '../src/components/Node';
import SessionCard from '../src/components/Cards/SessionCard';

const TestCard = ({ name }) => (
  <div
    style={{
      background: 'Tomato',
      height: '200px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {name}
  </div>
);

const TestSessionCard = ({ name }) => <SessionCard loading />;

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
      options: ['TestCard', 'Node', 'SessionCard'],
      mapping: {
        TestCard,
        Node: ({ name }) => <Node label={name} />,
        SessionCard: TestSessionCard,
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
      cardColumnBreakpoints={{
        900: 2,
        1000: 3,
      }}
    />
  </div>
);

export const Primary = Template.bind({});
