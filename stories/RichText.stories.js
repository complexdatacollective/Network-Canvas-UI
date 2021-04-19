/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Field as RichTextField } from '../src/components/Fields/RichText';
import { ALLOWED_MARKDOWN_TAGS } from '../src/utils/config';

import '../src/styles/_all.scss';
import MarkdownLabel from '../src/components/Fields/MarkdownLabel';

const initialValue = '# Heading!\n\nsomething **with markdown**\n\n- and a\n- list\n\nThat has other elements following it.\n\n1. Numbered\n1. Elements\n\n> A block quote\n\nHello';

export default {
  title: 'Fields/RichText',
  args: {
    hasError: false,
  },
  argTypes: {
    initialValue: { control: null },
    inline: { control: null },
  },
};

const meta = {
  invalid: false,
  touched: false,
};

const errorMeta = {
  ...meta,
  error: 'Something was not right about the input',
  invalid: true,
  touched: true,
};

const Template = ({ initialValue, hasError, ...args }) => {
  const [value, onChange] = useState(initialValue);

  const props = {
    ...args,
    input: {
      value,
      onChange,
    },
    meta: hasError ? errorMeta : meta,
  };

  return (
    <>
      <RichTextField {...props} />
      <div style={{ margin: '2rem 0' }}>
        <h4>Rendered Markdown:</h4>
        <ReactMarkdown allowedTypes={ALLOWED_MARKDOWN_TAGS}>{value}</ReactMarkdown>
        <MarkdownLabel label={value} />
      </div>
      <div style={{ margin: '2rem 0' }}>
        <h4>Raw Markdown:</h4>
        <pre>{JSON.stringify({ value }, null, 2)}</pre>
      </div>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  initialValue,
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
};

export const DisallowedTypes = Template.bind({});
DisallowedTypes.args = {
  disallowedTypes: ['quote', 'history'],
};

export const EmptyValues = Template.bind({});
EmptyValues.args = {
  initialValue: ' ',
};
