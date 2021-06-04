import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ALLOWED_MARKDOWN_TAGS } from '../../utils/config';
import { escapeAngleBracket } from './RichText/lib/parse';

const Markdown = ({ label, className }) => (
  <ReactMarkdown
    className={className}
    allowedTypes={ALLOWED_MARKDOWN_TAGS}
    renderers={{ root: 'span' }}
    allowDangerousHtml
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
