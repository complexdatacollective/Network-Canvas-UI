import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ALLOWED_MARKDOWN_LABEL_TAGS } from '../../utils/config';

const MarkdownLabel = ({ label }) => (
  <ReactMarkdown
    source={label}
    allowedTypes={ALLOWED_MARKDOWN_LABEL_TAGS}
  />
);

MarkdownLabel.propTypes = {
  label: PropTypes.string,
};

MarkdownLabel.defaultProps = {
  label: '',
};

export default MarkdownLabel;
