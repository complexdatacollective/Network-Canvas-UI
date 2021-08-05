import React, {
  useContext,
  useMemo,
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import AutoSizer from 'react-virtualized-auto-sizer';
import { useAnimation, AnimatePresence, AnimateSharedLayout, motion, useReducedMotion } from 'framer-motion';
import { VariableSizeGrid as Grid } from 'react-window';
import useResizeAware from 'react-resize-aware';
import { v4 as uuid } from 'uuid';
import cx from 'classnames';
import useGridSizer from './useGridSizer';

const useListAnimation = () => {
  const animation = useMemo(() => {
    const veryFast = getCSSVariableAsNumber('--animation-duration-very-fast-ms') / 1000;
    const fast = getCSSVariableAsNumber('--animation-duration-fast-ms') / 1000;
    const standard = getCSSVariableAsNumber('--animation-duration-standard-ms') / 1000;
    const slow = getCSSVariableAsNumber('--animation-duration-slow-ms') / 1000;

    const easing = getCSSVariableAsObject('--animation-easing-js');

    return {
      duration: {
        veryFast,
        fast,
        standard,
        slow,
      },
      easing,
    };
  }, []);

  return animation;
};

const DefaultEmptyComponent = () => (
  <div className="searchable-list__placeholder">
    No results.
  </div>
);

const ListContext = React.createContext({ items: [], columns: 0 });

const NoopComponent = () => null;

const getDataIndex = (columns, { rowIndex, columnIndex }) => (
  (rowIndex * columns) + columnIndex
);

/**
 * @function getDelay
 * Calculates an animation delay for each cell based on its position as well as the
 * current scrolling state of the list.
 *
 * @param {boolean} isScrolling - is the list currently scrolling?
 * @param {number} rowHeight - pixel height of the current row
 * @param {number} containerHeight - pixel height of the list
 * @param {number} numberOfColumns - number of vertical divisions
 * @param {number} columnIndex - the column index of the current item
 * @param {number} rowIndex - the row index of the current item
 * @returns number
 */
const getDelay = (
  isScrolling,
  rowHeight,
  containerHeight,
  numberOfColumns,
  columnIndex,
  rowIndex,
) => {
  const itemStagger = 0.05; // Gap between items
  const rowsToAnimate = Math.ceil(containerHeight / rowHeight()); // Don't animate past viewport
  const baseDelay = 0.001; // Always make delay non-zero

  // Don't delay at all if we are scrolling. This prevents list animation when scrolling back up
  if (isScrolling) { return 0; }

  // Calculate the delay based on the cell's row and column position
  const colDelay = columnIndex * itemStagger;
  const rowDelay = (rowIndex % rowsToAnimate) * (itemStagger * numberOfColumns);

  return baseDelay + colDelay + rowDelay;
};

/**
 * @function getCellRenderer
 * Function called for each item when rendering the grid
 * @param {*} Component - A component for use when rendering
 * @returns function
 */
const getCellRenderer = (Component) => (args) => {
  const {
    columnIndex,
    isScrolling,
    rowIndex,
    style,
  } = args;

  const {
    items,
    columns,
    rowHeight,
    containerHeight,
  } = useContext(ListContext);

  const dataIndex = getDataIndex(columns, { rowIndex, columnIndex });

  const item = items[dataIndex];
  const reducedMotion = useReducedMotion();

  if (!item) { return null; }

  const { id, attributes } = item;

  const delay = useMemo(
    () => getDelay(
      isScrolling, rowHeight, containerHeight, columns, columnIndex, rowIndex,
    ), [isScrolling, rowHeight, containerHeight, columns, columnIndex, rowIndex],
  );

  const animation = useAnimation();

  // Here is where we define and manage our initial mounting animation for this cell
  useEffect(() => {
    animation.start({
      opacity: 1,
      y: 0,
      transition: {
        delay,
      },
    });
    return () => animation.stop();
  }, []);

  const classes = cx(
    'item-list__item',
  );

  return (
    <motion.div
      initial={!isScrolling && {
        opacity: 0,
        y: '75%',
      }}
      animate={animation}
      className={classes}
      style={style}
      key={id}
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
    >
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes}
      />
    </motion.div>
  );
};

const ItemList = ({
  className,
  items,
  useItemSizing,
  itemComponent: ItemComponent,
  emptyComponent: EmptyComponent = DefaultEmptyComponent,
  cardColumnBreakpoints,
}) => {
  const containerRef = useRef(null);
  const [resizeListener, { width, height }] = useResizeAware();

  const listUUID = useMemo(() => uuid(), [items, ItemComponent, useItemSizing]);

  // Instantiate useGridSizer: enhancement to react-window allowing dynamic heights
  const [gridProps, ready] = useGridSizer(
    useItemSizing,
    cardColumnBreakpoints,
    ItemComponent,
    items,
    width, // container width from resizeAware
  );

  const {
    key,
    columnCount,
    rowCount,
    columnWidth,
    rowHeight,
  } = gridProps;

  const CellRenderer = useMemo(
    () => getCellRenderer(ItemComponent),
    [ItemComponent, columnCount],
  );

  const context = useMemo(() => ({
    items,
    columns: columnCount,
    rowHeight,
    containerHeight: height,
  }), [items, rowHeight, columnCount]);

  const classNames = cx(
    'item-list',
    className,
  );

  // If items is provided but is empty show the empty component
  const showEmpty = items.length === 0;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={listUUID}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          when: 'beforeChildren',
        }}
        className={classNames}
        ref={containerRef}
      >
        <ListContext.Provider value={context}>
          <div className="item-list__container">
            <AnimateSharedLayout>
              {resizeListener}
              { showEmpty && <EmptyComponent />}
              <AutoSizer>
                {(containerSize) => {
                  // If auto sizer is not ready, items would be sized incorrectly
                  if (!ready) { return null; }
                  return (
                    <Grid
                      className="item-list__grid"
                      height={containerSize.height}
                      width={containerSize.width}
                      key={key}
                      columnCount={columnCount}
                      rowCount={rowCount}
                      columnWidth={columnWidth}
                      rowHeight={rowHeight}
                      useIsScrolling
                    >
                      {CellRenderer}
                    </Grid>
                  );
                }}
              </AutoSizer>
            </AnimateSharedLayout>
          </div>
        </ListContext.Provider>

      </motion.div>
    </AnimatePresence>
  );
};

ItemList.propTypes = {
  useItemSizing: PropTypes.bool,
  className: PropTypes.string,
  itemComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  emptyComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  cardColumnBreakpoints: PropTypes.object,
  items: PropTypes.array.isRequired,
};

ItemList.defaultProps = {
  useItemSizing: false,
  className: null,
  itemComponent: NoopComponent,
  emptyComponent: NoopComponent,
  cardColumnBreakpoints: {
    250: 1,
    500: 2,
    750: 3,
  },
};

export default ItemList;
