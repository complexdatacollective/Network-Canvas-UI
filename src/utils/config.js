const ALLOWED_MARKDOWN_TAGS = [
  'break',
  'emphasis',
  'heading',
  'list',
  'listItem',
  'paragraph',
  'strong',
  'text',
  'thematicBreak',
];

const ALLOWED_MARKDOWN_PROMPT_TAGS = [
  'paragraph',
  'text',
  'emphasis',
  'strong',
];

const ALLOWED_MARKDOWN_LABEL_TAGS = [
  'paragraph',
  'break',
  'emphasis',
  'strong',
  'text',
  'list',
  'listItem',
];

const ALLOWED_MARKDOWN_INLINE_LABEL_TAGS = [
  'emphasis',
  'strong',
  'text',
];

module.exports = {
  ALLOWED_MARKDOWN_TAGS,
  ALLOWED_MARKDOWN_PROMPT_TAGS,
  ALLOWED_MARKDOWN_LABEL_TAGS,
  ALLOWED_MARKDOWN_INLINE_LABEL_TAGS,
};
