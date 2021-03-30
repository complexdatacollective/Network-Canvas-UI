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

export const TOOLBAR_MODES = {
  full: [...BLOCKS, ...MARKS, ...HISTORY],
  inline: [...MARKS, ...HISTORY],
};
