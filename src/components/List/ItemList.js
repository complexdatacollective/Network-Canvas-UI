import React, {
  useContext,
  useMemo,
  useRef,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { debounce, noop } from 'lodash';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  useAnimation,
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { VariableSizeGrid as Grid } from 'react-window';
import useResizeObserver from 'use-resize-observer';
import { v4 as uuid } from 'uuid';
import cx from 'classnames';
import useGridSizer from './useGridSizer';

const DefaultEmptyComponent = () => (
  <div className="searchable-list__placeholder">
    No results.
  </div>
);

const ListContext = React.createContext({ items: [], columns: 0 });

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
    selectedItems,
    onSelect,
    columns,
    rowHeight,
    containerHeight,
  } = useContext(ListContext);
  const dataIndex = getDataIndex(columns, { rowIndex, columnIndex });

  const item = items[dataIndex];
  const reducedMotion = useReducedMotion();

  if (!item) { return null; }

  const { id, attributes } = item;

  // const isDisabled = disabled && disabled.includes(id);
  const isSelected = selectedItems && selectedItems.includes(id);

  const delay = useMemo(
    () => getDelay(
      isScrolling, rowHeight, containerHeight, columns, columnIndex, rowIndex,
    ), [isScrolling, rowHeight, containerHeight, columns, columnIndex, rowIndex],
  );

  const animation = useAnimation();
  const shouldAnimate = !reducedMotion && !isScrolling && delay > 0;

  // Here is where we define and manage our initial mounting animation for this cell
  useEffect(() => {
    if (shouldAnimate) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          delay,
        },
      });
    }
    return () => animation.stop();
  }, []);

  const classes = cx(
    'item-list__item',
  );

  return (
    <motion.div
      initial={shouldAnimate && {
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
        id={id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes}
        onClick={() => onSelect(id)}
        // disabled={isDisabled}
        selected={isSelected}
      />
    </motion.div>
  );
};

const ItemList = ({
  className,
  items,
  selectedItems,
  onSelect,
  useItemSizing,
  itemComponent: ItemComponent,
  emptyComponent: EmptyComponent = DefaultEmptyComponent,
  cardColumnBreakpoints,
}) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const debouncedSizeUpdate = debounce(({ width: newWidth, height: newHeight }) => {
    if (height !== newHeight) {
      setHeight(newHeight);
    }
    if (width !== newWidth) {
      setWidth(newWidth);
    }
  }, 200);

  // We use the custom onResize callback of the resize observer hook to enable
  // us to debounce resize events that cause re-rendering.
  const { ref } = useResizeObserver({
    onResize: (newSizes) => debouncedSizeUpdate(newSizes),
  });

  // We use this list UUID to determine when to re-render, which triggers the exit
  // animation of the list items.
  const listUUID = useMemo(() => uuid(), [items, ItemComponent, useItemSizing]);

  // Instantiate useGridSizer: enhancement to react-window allowing dynamic heights
  const [{
    key,
    columnCount,
    rowCount,
    columnWidth,
    rowHeight,
  }, ready] = useGridSizer(
    useItemSizing,
    cardColumnBreakpoints,
    ItemComponent,
    items,
    width, // container width from resizeAware
  );

  const CellRenderer = useMemo(
    () => getCellRenderer(ItemComponent),
    [ItemComponent, columnCount],
  );

  const context = useMemo(() => ({
    items,
    selectedItems,
    onSelect,
    columns: columnCount,
    rowHeight,
    containerHeight: height,
  }), [items, selectedItems, rowHeight, columnCount]);

  const classNames = cx(
    'item-list',
    className,
  );

  // If items is provided but is empty show the empty component
  const showEmpty = items.length === 0;

  return (
    <AnimatePresence exitBeforeEnter>
      <div
        key={listUUID}
        className={classNames}
        ref={containerRef}
      >
        <ListContext.Provider value={context}>
          <div className="item-list__container" ref={ref}>
            { showEmpty && <EmptyComponent />}
            <AutoSizer>
              {(containerSize) => {
                // If auto sizer is not ready, items would be sized incorrectly
                if (!ready) { return null; }
                return (
                  <Grid
                    key={key}
                    className="item-list__grid"
                    height={containerSize.height}
                    width={containerSize.width}
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
          </div>
        </ListContext.Provider>
      </div>
    </AnimatePresence>
  );
};

ItemList.propTypes = {
  useItemSizing: PropTypes.bool,
  selectedItems: PropTypes.array,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  itemComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  emptyComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  cardColumnBreakpoints: PropTypes.object,
  items: PropTypes.array.isRequired,
};

ItemList.defaultProps = {
  useItemSizing: false,
  selectedItems: [],
  onSelect: noop,
  className: null,
  emptyComponent: () => (<h4>Empty</h4>),
  cardColumnBreakpoints: {
    250: 1,
    500: 2,
    750: 3,
  },
};

export default ItemList;
