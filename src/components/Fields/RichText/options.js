export const BLOCKS = [
  'quote',
  'headings',
  'lists',
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

export const TOOLBAR_ITEMS = [...BLOCKS, ...MARKS, ...HISTORY];

export const INLINE_DISALLOWED_ITEMS = [...BLOCKS];
