import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ALLOWED_MARKDOWN_LABEL_TAGS } from '../../utils/config';

const MarkdownLabel = ({ label, className }) => (
  <ReactMarkdown
    className={className}
    allowedTypes={ALLOWED_MARKDOWN_LABEL_TAGS}
  >
    {label}
  </ReactMarkdown>
);

MarkdownLabel.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MarkdownLabel.defaultProps = {
  className: 'form-field-label',
};

export default MarkdownLabel;
