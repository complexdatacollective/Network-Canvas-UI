import React from 'react';
import '../src/styles/_all.scss';

export default { title: 'Palette' };

const swatchStyles = {
  display: 'inline-flex',
  margin: '0 1rem 1rem 0',
  borderRadius: '100%',
  width: '7rem',
  height: '7rem',
  fontSize: '10px',
  color: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  webkitUserSelect: 'text',
  msUserSelect: 'text',
  userSelect: 'text',
};

const Swatch = ({ color }) => {
  const style = {
    ...swatchStyles,
    backgroundColor: `var(--color-${color})`,
  };

  return (
    <div style={style}>--color-{color}</div>
  );
};

const colors = [
  'neon-coral',
  'neon-coral--dark',
  'mustard',
  'mustard--dark',
  'sea-green',
  'sea-green--dark',
  'white',
  'slate-blue',
  'slate-blue--dark',
  'navy-taupe',
  'cyber-grape',
  'rich-black',
  'charcoal',
  'platinum',
  'platinum--dark',
  'sea-serpent',
  'sea-serpent--dark',
  'purple-pizazz',
  'purple-pizazz--dark',
  'paradise-pink',
  'paradise-pink--dark',
  'cerulean-blue',
  'cerulean-blue--dark',
  'kiwi',
  'kiwi--dark',
  'neon-carrot',
  'neon-carrot--dark',
  'barbie-pink',
  'barbie-pink--dark',
  'tomato',
  'tomato--dark',
];

export const all = () => {
  return colors.map(color => (
    <Swatch color={color} />
  ));
};
