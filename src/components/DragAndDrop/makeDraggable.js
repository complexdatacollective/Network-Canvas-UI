/* eslint-disable react/no-find-dom-draggableRef, react/sort-comp, react/jsx-props-no-spreading */

import React, { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
import DragPreview from './DragPreview';
import DragManager, { VERTICAL_SCROLL } from './DragManager';
import { useDnDContext } from './DnDContext';

const makeDraggable = (WrappedComponent) => (props) => {
  const {
    enabled = true,
    type,
    preview,
    ...rest
  } = props;

  const [isDragging, setIsDragging] = useState(false);

  const {
    setSource,
  } = useDnDContext();

  const draggableRef = useRef();
  const previewRef = useRef();
  let dragManager = null;
  let previewEl = null;

  const cleanupDragManager = () => {
    if (dragManager) {
      dragManager.unmount();
      dragManager = null;
    }
  };

  const cleanupPreview = () => {
    if (previewEl) {
      previewEl.cleanup();
      previewEl = null;
    }
  };

  const createPreview = () => {
    if (!preview) {
      previewEl = new DragPreview(draggableRef.current);
      return;
    }

    previewEl = new DragPreview(previewRef.current);
  };

  const updatePreview = ({ x, y }) => {
    if (previewEl) {
      previewEl.position({ x, y });
    }
  };

  const setValidMove = (valid) => {
    if (!previewEl) return;
    previewEl.setValidMove(valid);
  };

  const onDragStart = (movement) => {
    createPreview();

    console.log('onDragStart', movement);

    setSource({
      type,
    });

    // store.dispatch(
    //   actions.dragStart({
    //     ...movement,
    //     meta: meta(),
    //   }),
    // );

    setIsDragging(true);
  };

  const throttledDragAction = throttle(({ x, y, ...other }) => {
    console.log('Drag',x,y);
    // store.dispatch(
    //   actions.dragMove({
    //     x, y, setValidMove, ...other,
    //   }),
    // );
  }, 60);

  const onDragMove = ({ x, y, ...other }) => {
    updatePreview({ x, y });
    // throttledDragAction({ x, y, ...other });
  };

  const onDragEnd = (movement) => {
    cleanupPreview();
    setIsDragging(false);

    setSource(null);

    // store.dispatch(
    //   actions.dragEnd(movement),
    // );
  };

  useEffect(() => {
    if (draggableRef.current && enabled) {
      dragManager = new DragManager({
        el: draggableRef.current,
        onDragStart,
        onDragMove,
        onDragEnd,
        // scrollDirection,
      });
    }

    return () => {
      cleanupPreview();
      cleanupDragManager();
    };
  }, [draggableRef]);

  const styles = () => (isDragging ? { visibility: 'hidden' } : {});

  return (
    <>
      <div style={styles()} className="draggable" ref={draggableRef}>
        <WrappedComponent
          {...rest}
          allowDrag={enabled}
          // scrollDirection={scrollDirection}
        />
      </div>
      { preview && (
        <div
          ref={previewRef}
          style={{
            display: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {preview}
        </div>
      )}
    </>
  );
};

export default makeDraggable;
