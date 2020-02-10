/* eslint-disable no-plusplus, no-param-reassign */
import React from 'react';


// import tiles from '../img/tiles';
const TruchetBackground = (props) => {
  // 25% chance when level less than 3.
  const isGridItem = level => (level < 3 ? (Math.random() > 0.75) : false);

  const tiles = [
    'cross',
    'frown',
    'line',
    'plus',
    'slash',
    'star',
    'tee',
  ];

  const getRandomTile = () => tiles[Math.floor(Math.random() * tiles.length)];

  const constructGrid = (rows = 4, columns = 4, level = 1) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const element =
          isGridItem(level) ? constructGrid(rows, columns, level++) : getRandomTile();

        console.log(`Row: ${i}, Col: ${j}, Element: ${element} \n`);
      }
    }
  };
  console.log('truchet props:', props);
  return (
    <svg
      version="1.1"
      width="1600"
      height="1600"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1600" height="1600" x="0" y="0" fill="black" />
      { constructGrid() }
    </svg>
  );
};

export default TruchetBackground;
