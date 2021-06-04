import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import PropTypes from 'prop-types';
import { ALLOWED_MARKDOWN_TAGS } from '../../utils/config';
import { escapeAngleBracket } from './RichText/lib/parse';

const Markdown = ({ label, className, allowedElements = ALLOWED_MARKDOWN_TAGS }) => (
  <ReactMarkdown
    className={className}
    allowedElements={allowedElements}
    components={{ root: 'span' }}
    rehypePlugins={[rehypeRaw, rehypeSanitize]}
    unwrapDisallowed
  >
    {escapeAngleBracket(label)}
  </ReactMarkdown>
);

Markdown.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Markdown.defaultProps = {
  className: 'markdown',
};

export default Markdown;
