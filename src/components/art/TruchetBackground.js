/* eslint-disable no-plusplus, no-param-reassign */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { random } from 'lodash';
import React from 'react';
import cross from './tiles/cross';
import frown from './tiles/frown';
import line from './tiles/line';
import plus from './tiles/plus';
import slash from './tiles/slash';
import star from './tiles/star';
import tee from './tiles/tee';

const tiles = [
  cross,
  frown,
  line,
  plus,
  slash,
  star,
  tee,
];

const getRandomTile = () => tiles[Math.floor(Math.random() * tiles.length)];

const Tile = ({ level }) => {
  const Element = getRandomTile();
  const rotations = [0, 90, 180, 270];
  const rotation = () => rotations[Math.floor(Math.random() * rotations.length)];
  return (
    <motion.div
      className={`tile  level-${level}`}
      animate={{ rotate: rotation() }}
      transition={{ repeat: Infinity, type: 'spring', repeatDelay: random(5, 120) }}
    >
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <Element />
      </svg>
    </motion.div>
  );
};

Tile.propTypes = {
  level: PropTypes.number.isRequired,
};

const Grid = ({ rows, columns, level }) => {
  const isGridItem = () => (level < 3 ? (Math.random() > 0.25) : false);
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

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  level: PropTypes.number,
};

Grid.defaultProps = {
  level: 0,
};

const TruchetBackground = (props) => {
  const {
    rows,
    columns,
  } = props;

  return (
    <div
      className="TruchetBackground"
    >
      <Grid rows={rows} columns={columns} />
    </div>
  );
};

TruchetBackground.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
};

TruchetBackground.defaultProps = {
  rows: 4,
  columns: 4,
};

export default TruchetBackground;
