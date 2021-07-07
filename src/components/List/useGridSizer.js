import { renderToString } from 'react-dom/server';
import React, {
  useMemo,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';

/**
 * This is an enhancement for react-window, which allows items in a grid
 * to have dynamic heights.
 *
 * Because items may flow, this actually renders the item in a hidden div
 * taking into account the column width.
 *
 * Each row will be sized according to the tallest item on that row.
 *
 * Usage:
 *
 * const [
 *   gridProps,
 *   ready, // has hidden div been rendered, ready to measure items
 *   setWidth, // how wide is the total container width (all columns)
 * ] = useGridSizer(true, ItemComponent, [{}, ...], 2);
 *
 * return (
 *   <Grid {...gridProps} />
 * );
 */
const useGridSizer = (
  useItemSizing,
  columnBreakpoints,
  ItemComponent,
  items,
  containerWidth,
  minimumHeight = 150,
) => {
  const id = useMemo(() => uuid(), []);
  const [hiddenSizingEl, setHiddenSizingElement] = useState(null);

  useEffect(() => {
    if (hiddenSizingEl) { return () => {}; }

    const newHiddenSizingEl = document.createElement('div');

    newHiddenSizingEl.classList.add(`hidden-sizing-element-${id}`);
    newHiddenSizingEl.style.position = 'absolute';
    newHiddenSizingEl.style.top = '0';
    newHiddenSizingEl.style.pointerEvents = 'none';
    newHiddenSizingEl.style.visibility = 'hidden';
    newHiddenSizingEl.innerHTML = renderToString(<ItemComponent />);

    document.body.appendChild(newHiddenSizingEl);

    setHiddenSizingElement(newHiddenSizingEl);

    return () => document.body.removeChild(newHiddenSizingEl);
  }, []);

  // Set ready to true only after we have rendered our hidden sizing element
  // Consumers use this to know when to expect sane values.
  const ready = useMemo(() => (
    hiddenSizingEl && containerWidth > 0
  ), [hiddenSizingEl, containerWidth]);

  const itemCount = (items && items.length) || 0;

  // When using item sizing, we calculate the item's size, using the
  // hidden sizing element, and then determine how many columns we
  // can fit within the container width.
  //
  // Row height is set to exactly the item height
  let columnCount;
  let columnWidth;
  let rowCount;
  let rowHeight;

  if (useItemSizing) {
    columnCount = useMemo(() => {
      if (!hiddenSizingEl) { return 1; }
      const { width } = hiddenSizingEl.getBoundingClientRect();
      const columns = Math.floor(containerWidth / width);
      return columns > 1 ? columns : 1;
    }, [ItemComponent, containerWidth]);

    rowCount = useMemo(() => (
      Math.ceil((itemCount || 0) / columnCount)
    ), [itemCount, columnCount]);

    columnWidth = useCallback(() => (
      containerWidth / columnCount
    ), [containerWidth, columnCount]);

    // Calculate row height based on height of hiddenSizingEl
    rowHeight = useCallback(
      () => {
        if (!hiddenSizingEl) { return minimumHeight; }
        const { height } = hiddenSizingEl.getBoundingClientRect();
        return height;
      },
      [hiddenSizingEl, ItemComponent],
    );
  } else {
    // When not using item sizing, we calculate the number of columns
    // based on container breakpoints, and set the row height based
    // on the hidden element height
    columnCount = useMemo(() => {
      const breakpoints = Object.keys(columnBreakpoints).sort().reverse();
      const breakpoint = breakpoints.find((bp) => bp < containerWidth);
      return columnBreakpoints[breakpoint];
    }, [itemCount, columnBreakpoints, containerWidth]);

    rowCount = useMemo(() => (
      Math.ceil((itemCount || 0) / columnCount)
    ), [itemCount, columnCount]);

    columnWidth = useCallback(() => (
      containerWidth / columnCount
    ), [containerWidth, columnCount]);

    // Calculate row height based on height of hiddenSizingEl
    rowHeight = useCallback(
      (rowIndex) => {
        if (!hiddenSizingEl) { return minimumHeight; }

        hiddenSizingEl.style.width = `${columnWidth()}px`;

        const start = rowIndex * columnCount;
        const end = start + columnCount;

        const height = items.slice(start, end)
          .reduce(
            (acc, item) => {
              return (
                hiddenSizingEl.clientHeight > acc
                  ? hiddenSizingEl.clientHeight
                  : acc
              );
            },
            0,
          );

        return height > 0 ? height : minimumHeight;
      },
      [hiddenSizingEl, items, columnWidth()],
    );
  }

  return [
    {
      key: containerWidth,
      columnCount,
      rowCount,
      columnWidth,
      rowHeight,
    },
    ready,
  ];
};

export default useGridSizer;
