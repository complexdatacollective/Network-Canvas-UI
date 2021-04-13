/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import ReactMarkdown from 'react-markdown';
import Harness from './helpers/Harness';
import { Field as RichTextField } from '../src/components/Fields/RichText';
import { ALLOWED_MARKDOWN_LABEL_TAGS } from '../src/utils/config';

import '../src/styles/_all.scss';
import MarkdownLabel from '../src/components/Fields/MarkdownLabel';

const requiredProps = {
  label: 'This a<br>b prompt text contains **markdown** _formatting_\n\n- Across lines\n- And others',
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
            <ReactMarkdown allowedTypes={ALLOWED_MARKDOWN_LABEL_TAGS}>{value}</ReactMarkdown>
            <MarkdownLabel label={value} />
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

export const ValueUpdated = () => {
  const [value, setValue] = useState('**old** value\n');

  useEffect(() => {
    setTimeout(() => {
      setValue('**old** value\n');
    }, 3000);
  }, [value]);

  return (
    <Harness
      requiredProps={requiredProps}
      input={{
        value,
        onChange: setValue,
      }}
    >
      {(props) => (
        <>
          <RichTextField {...props} />
          <div style={{ margin: '2rem 0' }}>
            <h4>Rendered Markdown:</h4>
            <ReactMarkdown allowedTypes={ALLOWED_MARKDOWN_LABEL_TAGS}>{value}</ReactMarkdown>
            <MarkdownLabel label={value} />
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

export const Inline = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log(JSON.stringify(value));
  }, [value]);

  return (
    <Harness
      requiredProps={requiredProps}
      input={{
        onChange: setValue,
        value: 'An **inline** _prompt_ string',
      }}
      inline
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

export const disallowedTypes = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log(JSON.stringify(value));
  }, [value]);

  return (
    <Harness
      requiredProps={requiredProps}
      input={{
        onChange: setValue,
        value: 'Full editor, but quotes **not** allowed.',
      }}
      disallowedTypes={['quote', 'history']}
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

export const withError = () => {
  const [value, setValue] = useState();
  const defaultMeta = false;
  const [meta, setMeta] = useState(defaultMeta);

  const toggleError = () => {
    setMeta(!meta);
    action('toggleError')(!meta);
  };

  const renderMeta = {
    error: 'Something was not right about the input',
    invalid: meta,
    touched: meta,
  };

  useEffect(() => {
    console.log(JSON.stringify(value));
  }, [value]);

  return (
    <Harness
      requiredProps={requiredProps}
      input={{
        onChange: setValue,
        value: 'Full editor, but headings **not** allowed.',
      }}
      meta={renderMeta}
      disallowedTypes={['headings']}
    >
      {props => (
        <>
          <button onClick={toggleError}>Toggle Error</button>
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

export const EmptyValues = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log(JSON.stringify(value));
  }, [value]);

  return (
    <Harness
      requiredProps={requiredProps}
      input={{
        onChange: setValue,
        value: '  ',
      }}
    >
      {props => (
        <>
          <RichTextField {...props} />
          <div style={{ margin: '2rem 0' }}>
            <h4>Rendered Markdown:</h4>
            <ReactMarkdown allowedTypes={ALLOWED_MARKDOWN_LABEL_TAGS}>{value}</ReactMarkdown>
            <MarkdownLabel label={value} />
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
