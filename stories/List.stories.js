import React, { useState, useEffect } from 'react';
import faker from 'faker';
import { v4 as uuid } from 'uuid';
import Toggle from '../src/components/Fields/Toggle';
import ItemList from '../src/components/List/ItemList';
import '../src/styles/_all.scss';
import Node from '../src/components/Node';

const TestCard = ({ name }) => {
  return (
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
};

const mockItems = () => [...Array(20)].map((item, index) => (
  {
    id: uuid(),
    attributes: {
      name: faker.name.firstName(),
    },
  }
)).sort((item1, item2) => {
  return item1.attributes.name > item2.attributes.name;
});

const requiredProps = {
};

export default {
  title: 'Components/ItemList',
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => {
  const [items, setItems] = useState(mockItems());
  const [useItemSizing, setUseItemSizing] = useState(false);

  return (
  <>
    <div
      style={{
        display: 'flex',
        height: '400px',
        width: '100%',
        border: '1px solid tomato',
        '--base-font-size': '12px',
      }}
    >
      <ItemList
        items={items}
        itemComponent={(props) => <Node label={props.name} />}
        // itemComponent={TestCard}
        useItemSizing={useItemSizing}
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
    <button
      onClick={
        () => {
          const reversed = [...items].reverse();
          setItems(reversed);
        }
      }
    >
      Reverse</button>
    <button onClick={() => setItems(mockItems())} >New Items</button>
    <Toggle
      label="Use item sizing"
      input={{
        onChange: () => setUseItemSizing(!useItemSizing),
        value: !!useItemSizing,
      }}
    />
  </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};
