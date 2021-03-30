/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Harness from './helpers/Harness';
import { Field as RichTextField, MODES } from '../src/components/Fields/RichText';

import '../src/styles/_all.scss';

const requiredProps = {
  label: 'This prompt text contains **markdown** _formatting_',
  input: { value: '# Heading!\n\nsomething **with markdown**\n\n- and a\n- list\n\nThat has other elements following it.\n\n1. Numbered\n1. Elements\n\n> A block quote\n\nHello' },
  meta: {},
};

export default { title: 'Fields/RichText' };

export const Renders = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log(JSON.stringify(value));
  }, [value]);

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
            <ReactMarkdown>{value}</ReactMarkdown>
          </div>
          <div style={{ margin: '2rem 0' }}>
            <h4>Raw Markdown:</h4>
            <pre>{JSON.stringify({ value }, null, 2)}</pre>
          </div>
        </>
      )}
    </Harness>
  );
};

export const Modes = () => Object.keys(MODES).map((mode) => {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log(JSON.stringify(value));
  }, [value]);

  return (
    <Harness
      requiredProps={requiredProps}
      input={{
        onChange: setValue,
        value: 'An **_inline_** value that might _represent a prompt_.',
      }}
      mode={MODES[mode]}
    >
      {(props) => (
        <>
          <RichTextField {...props} />
        </>
      )}
    </Harness>
  );
});
