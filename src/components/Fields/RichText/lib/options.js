export const BLOCKS = [
  'quote',
  'headings',
  'lists',
  'thematic_break',
];

export const MARKS = [
  'bold',
  'italic',
];

export const HISTORY = [
  'history',
];

export const MODES = {
  full: 'full',
  inline: 'inline',
};

export const ALWAYS_DISALLOWED = ['strike', 'code'];

export const TOOLBAR_ITEMS = [...BLOCKS, ...MARKS, ...HISTORY];

export const INLINE_DISALLOWED_ITEMS = [...BLOCKS];
