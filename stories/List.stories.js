import React, { useState } from 'react';
import faker from 'faker';
import { v4 as uuid } from 'uuid';
import ItemList from '../src/components/List/ItemList';
import '../src/styles/_all.scss';
import Node from '../src/components/Node';
import SessionCard from '../src/components/Cards/SessionCard';
import ProtocolCard from '../src/components/Cards/ProtocolCard';
import DataCard from '../src/components/Cards/DataCard';

const TestCard = (attributes) => (
  <div
    style={{
      background: 'Tomato',
      // height: '200px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <h5>{attributes.name}</h5>
    <ul>
      <li>{attributes.caseId}</li>
      <li>{attributes.startedAt}</li>
      <li>{attributes.updatedAt}</li>
      <li>{attributes.progress}</li>
    </ul>
  </div>
);

const TestSessionCard = (attributes) => <SessionCard {...attributes} />;

const TestProtocolCard = (attributes) => <ProtocolCard {...attributes} />;

const TestDataCard = (attributes) => <DataCard {...attributes} label="Joshua" data={attributes} />;

const mockItems = (length = 100) => [...Array(length)].map(() => (
  {
    id: uuid(),
    attributes: {
      id: uuid(),
      label: faker.name.firstName(),
      caseId: faker.name.firstName(),
      protocolName: faker.name.firstName(),
      progress: 50,
      startedAt: faker.date.recent().toUTCString(),
      exportedAt: faker.date.recent().toUTCString(),
      updatedAt: faker.date.recent().toUTCString(),
    },
  }
)).sort((item1, item2) => item1.attributes.name > item2.attributes.name);

export default {
  title: 'Components/ItemList',
  argTypes: {
    items: {
      options: ['10,000', 1000, 100, 10, 2],
      mapping: {
        '10,000': mockItems(10000),
        1000: mockItems(1000),
        100: mockItems(100),
        10: mockItems(10),
        2: mockItems(2),
      },
      control: { type: 'radio' },
    },
    itemComponent: {
      options: ['TestCard', 'DataCard', 'Node', 'SessionCard', 'ProtocolCard'],
      mapping: {
        TestCard,
        Node,
        DataCard: TestDataCard,
        SessionCard: TestSessionCard,
        ProtocolCard: TestProtocolCard,
      },
      control: { type: 'radio' },
    },
    useItemSizing: {
      type: 'boolean',
    },
  },
  args: {
    items: 100,
    useItemSizing: true,
    itemComponent: 'DataCard',
  },
};

const Template = (args) => {
  const [things, setThings] = useState([]);

  setTimeout(() => {
    console.log('setting');
    setThings(args.items);
  }, 3000);

  return (
    <div
      style={{
        display: 'flex',
        height: '400px',
        width: '500px',
        '--base-font-size': '12px',
        resize: 'both',
        overflow: 'auto',
      }}
    >
      <ItemList
        {...args}
        // items={things}
        // itemComponent={(props) => <Node label={props.name} />}
        // itemClickHandler
        // emptyComponent
        // mode=[] // details, list, cards
        cardColumnBreakpoints={{
          800: 2,
          1200: 3,
        }}
      />
    </div>
  );

}

export const Primary = Template.bind({});
