/* eslint-disable no-plusplus, no-param-reassign */
import React from 'react';
import cross from '../../assets/images/tiles/cross';
import frown from '../../assets/images/tiles/frown';
import line from '../../assets/images/tiles/line';
import plus from '../../assets/images/tiles/plus';
import slash from '../../assets/images/tiles/slash';
import star from '../../assets/images/tiles/star';
import tee from '../../assets/images/tiles/tee';

const tiles = [
  // cross,
  frown,
  line,
  // plus,
  slash,
  // star,
  tee,
];

const getRandomTile = () => tiles[Math.floor(Math.random() * tiles.length)];

const Tile = ({ level }) => {
  const Element = getRandomTile();
  const rotations = ['0deg', '90deg', '180deg', '270deg'];
  const rotation = rotations[Math.floor(Math.random() * rotations.length)];
  return (
    <div
      className={`tile  level-${level}`}
      style={{
        transform: `rotate(${rotation})`,
      }}
    >
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgb(45,41,85)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(58,58,117)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <Element />
      </svg>
    </div>
  );
};

const Grid = ({ rows, columns, level }) => {
  const isGridItem = () => (level < 2 ? (Math.random() > 0.5) : false);
  const gridContent = () => {
    const test = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const key = `${i}-${j}`;
        if (isGridItem()) {
          const newLevel = level + 1;
          test.push(<Grid key={key} rows={2} columns={2} level={newLevel} />);
        } else {
          test.push(<Tile key={key} level={level} />);
        }
      }
    }

    return test;
  };

  const styles = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  return (
    <div
      className={`grid level-${level}`}
      style={styles}
    >
      {gridContent()}
    </div>
  );
};

const TruchetBackground = (props) => {
  console.log('Truchet', props);
  return (
    <div
      className="TruchetBackground"
    >
      <Grid rows={16} columns={16} level={0} />
    </div>
  );
};

export default TruchetBackground;
