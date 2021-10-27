import React from 'react';
import faker from 'faker';
import { v4 as uuid } from 'uuid';
import ItemList from '../src/components/List/ItemList';
import '../src/styles/_all.scss';
import Node from '../src/components/Node';
import SessionCard from '../src/components/Cards/SessionCard';
import ProtocolCard from '../src/components/Cards/ProtocolCard';
import makeDraggable from '../src/dnd/draggable';

const Card = () => (
  <div
    style={{
      background: 'Tomato',
      height: '200px',
      width: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <h5>Hello</h5>
  </div>
);

const DraggableCard = makeDraggable(Card);

export default {
  title: 'Systems/makeDraggable',
  argTypes: {
  },
  args: {
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
    <DraggableCard />
  </div>
);

export const Primary = Template.bind({});
