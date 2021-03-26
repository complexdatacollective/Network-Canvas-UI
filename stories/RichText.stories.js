/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import { Field as RichTextField, MODES } from '../src/components/Fields/RichText';

import '../src/styles/_all.scss';

const slateTransformer = new SlateTransformer();

const requiredProps = {
  // label: 'This prompt text contains **markdown** _formatting_',
  // placeholder: 'This is my placeholder',
  // meta: {},
};

export default { title: 'Fields/RichText' };

export const Renders = () => {
  const [markdown, setMarkdown] = useState(() => {
    const slate = slateTransformer.fromMarkdown('**hello** there!');
    return slate.document.children;
  });

  const renderedMD = () => {
    const slate = slateTransformer.fromMarkdown(markdown);
    return slate.document.children;
  };

  return (
    <Harness
      requiredProps={requiredProps}
    >
      {props => (
        <>
          <RichTextField {...props} mode={MODES.full} />
          <div style={{ margin: '2rem 0' }}>
            <h4>Rendered Markdown:</h4>
            <ReactMarkdown>{renderedMD()}</ReactMarkdown>
          </div>
        </>
      )}
    </Harness>
  );
};
