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
import { AnimatePresence, AnimateSharedLayout, motion, useReducedMotion } from 'framer-motion';
import { VariableSizeGrid as Grid } from 'react-window';
import useResizeAware from 'react-resize-aware';
import { v4 as uuid } from 'uuid';
import cx from 'classnames';
import useGridSizer from './useGridSizer';
import { useAnimation } from 'framer-motion';

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

const getDelay = (rowHeight, containerHeight, numberOfColumns, columnIndex, rowIndex) => {
  const itemStagger = 0.05;
  const rowsToAnimate = Math.ceil(containerHeight / rowHeight());

  if (rowIndex > rowsToAnimate) {
    // return baseDelay + (columnIndex * itemStagger);
    return 0;
  }

  const colDelay = columnIndex * itemStagger;

  const rowDelay = (rowIndex % rowsToAnimate) * (itemStagger * numberOfColumns);

  return colDelay + rowDelay;
};

const getCellRenderer = (Component) => (args) => {
  const {
    columnIndex,
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
      rowHeight, containerHeight, columns, columnIndex, rowIndex,
    ), [rowHeight, containerHeight, columns, columnIndex, rowIndex],
  );

  const controls = useAnimation();

  useEffect(() => {
    console.log('us');
    controls.set({ opacity: 0, y: '75%' });
    controls.start(() => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
      },
    }));

    return () => controls.stop();
  }, []);

  return (
    <motion.div
      className="item-list__item"
      style={style}
      key={id}
      // layout
      // layoutId={id}
    >
      <motion.div
        animate={controls}
      >
        <Component
          {...attributes}
        />
      </motion.div>
    </motion.div>

  );
};

const ItemList = ({
  className,
  items,
  useItemSizing,
  itemComponent: ItemComponent,
  emptyComponent: EmptyComponent = DefaultEmptyComponent,
  cardColumnBreakpoints = {
    250: 1,
    500: 2,
    750: 3,
  }
}) => {
  const containerRef = useRef(null);
  const [resizeListener, { width, height }] = useResizeAware();

  // Instantiate useGridSizer: enhancement to react-window allowing dynamic heights
  const [gridProps, ready] = useGridSizer(
    useItemSizing,
    cardColumnBreakpoints,
    ItemComponent, // ItemComponent
    items, // items list
    width, // container width
    // minimum row height
  );

  const {
    key,
    columnCount,
    rowCount,
    columnWidth,
    rowHeight,
  } = gridProps;

  // console.log({
  //   width,
  //   columnCount,
  //   rowCount,
  //   columnWidth: columnWidth(),
  //   rowHeight,
  // });

  // const itemKey = useCallback((index) => {
  //   const dataIndex = getDataIndex(columnCount, index);

  //   // If last row is shorter than number of columns
  //   if (dataIndex >= items.length) { return null; }

  //   const key = items[dataIndex] && items[dataIndex].id;

  //   if (isNil(key)) {
  //     // Something went wrong, this is a failsafe but will force a rerender every time
  //     console.debug('`itemKey()` returned undefined in `<ItemList />`', dataIndex, items[dataIndex]); // eslint-disable-line no-console
  //     return uuid();
  //   }

  //   return key;
  // }, [columnCount, items]);

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
    <div
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
                    // itemKey={itemKey}
                    key={key}
                    columnCount={columnCount}
                    rowCount={rowCount}
                    columnWidth={columnWidth}
                    rowHeight={rowHeight}
                  >
                    {CellRenderer}
                  </Grid>
                );
              }}
            </AutoSizer>
          </AnimateSharedLayout>
        </div>
      </ListContext.Provider>

    </div>
  );
};

ItemList.propTypes = {
  useItemSizing: PropTypes.bool,
  className: PropTypes.string,
  itemComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  emptyComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ItemList.defaultProps = {
  useItemSizing: false,
  className: null,
  itemComponent: NoopComponent,
  emptyComponent: NoopComponent,
};

export default ItemList;
