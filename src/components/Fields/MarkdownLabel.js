import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ALLOWED_MARKDOWN_LABEL_TAGS, ALLOWED_MARKDOWN_INLINE_LABEL_TAGS } from '../../utils/config';

const MarkdownLabel = ({ label, className, inline }) => (
  <ReactMarkdown
    className={className}
    allowedTypes={inline ? ALLOWED_MARKDOWN_INLINE_LABEL_TAGS : ALLOWED_MARKDOWN_LABEL_TAGS}
    renderers={{ root: 'span' }}
  >
    {label}
  </ReactMarkdown>
);

MarkdownLabel.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

MarkdownLabel.defaultProps = {
  className: 'form-field-label',
  inline: false,
};

export default MarkdownLabel;
