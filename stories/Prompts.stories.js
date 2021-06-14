/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import '../src/styles/_all.scss';
import Prompts from '../src/components/Prompts/Prompts';

const mockPrompts = [
  {
    id: '123',
    text: `Within the **past 6 months**, who have you felt close to, or discussed important personal matters with?`,
  },
  {
    id: '456',
    text: 'This is a really long prompt that should be wrapped first over multiple lines but will then ultimately be truncated with ellipses because nobody should ever need to write this much for any reason at all',
  },
  {
    id: '789',
    text: `Third prompt`,
  },
];

export default {
  title: 'Systems/Prompts',
};

const Template = (args) => {
  const {
    prompts,
    speakable,
  } = args;

  const [currentIndex, setCurrentIndex] = useState(0);

  const setIndexWithWrap = (index) => setCurrentIndex(Math.abs(index) % prompts.length);
  console.log('current', currentIndex);
  return (
    <>
      <Prompts prompts={prompts} speakable={speakable} currentPrompt={prompts[currentIndex].id} />
      <div style={{
        position: 'absolute',
        bottom: '0',
        padding: '2rem',
      }}
      >
        <button type="button" onClick={() => setIndexWithWrap(currentIndex - 1)}>Previous</button>
        <button type="button" onClick={() => setIndexWithWrap(currentIndex + 1)}>Next</button>
      </div>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  prompts: mockPrompts,
};

export const Speakable = Template.bind({});
Speakable.args = {
  prompts: mockPrompts,
  speakable: true,
};

export const Single = Template.bind({});
Single.args = {
  prompts: [mockPrompts[0]],
};
