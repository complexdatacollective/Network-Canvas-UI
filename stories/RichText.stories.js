/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import { Field as RichTextField, MODES } from '../src/components/Fields/RichText';

import '../src/styles/_all.scss';

const requiredProps = {
  label: 'This prompt text contains **markdown** _formatting_',
  placeholder: '',
  input: { value: 'something **with markdown**\n\n- and a\n- list\n\nThat has other elements following it.\n> A block quote' },
  meta: {},
};

export default { title: 'Fields/RichText' };

export const Renders = () => {
  const [things, setValue] = useState();

  return (
    <Harness
      requiredProps={requiredProps}
      input={{
        onChange: setValue,
      }}
    >
      {props => (
        <>
          <RichTextField {...props} />
          <div style={{ margin: '2rem 0' }}>
            <h4>Rendered Markdown:</h4>
            <ReactMarkdown>{things}</ReactMarkdown>
          </div>
          <div style={{ margin: '2rem 0' }}>
            <h4>Raw Markdown:</h4>
            <pre>{things}</pre>
          </div>
        </>
      )}
    </Harness>
  );
};

export const Inline = () => {
  const [things, setValue] = useState();

  return (
    <Harness
      requiredProps={requiredProps}
      input={{
        onChange: setValue,
        value: 'An **_inline_** value that might _represent a prompt_.',
      }}
      mode={MODES.single}
    >
      {props => (
        <>
          <RichTextField {...props} />
          <div style={{ margin: '2rem 0' }}>
            <h4>Rendered Markdown:</h4>
            <ReactMarkdown>{things}</ReactMarkdown>
          </div>
          <div style={{ margin: '2rem 0' }}>
            <h4>Raw Markdown:</h4>
            <pre>{things}</pre>
          </div>
        </>
      )}
    </Harness>
  );
};
