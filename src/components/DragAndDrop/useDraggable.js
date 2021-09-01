import { useState, useEffect, useMemo } from 'react';
import { useDnDContext } from './DnDContext';
import DragManager from './DragManager';
import DraggablePreview from './DragPreview';

const useDraggable = (
  componentRef,
  previewRef,
  type,
  payload,
  previewComponent
) => {
  const [isDragging, setIsDragging] = useState(false);

  let dragManager = null;
  let previewEl = null;

  const {
    setSource,
    overObstable,
    overDropTarget,
  } = useDnDContext();

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
    // if (!previewComponent) {
    //   previewEl = new DraggablePreview(componentRef.current);
    //   return;
    // }

    previewEl = new DraggablePreview(componentRef.current);
  };

  const updatePreview = ({ x, y }) => {
    if (previewEl) {
      previewEl.position({ x, y });
    }
  };

  const onDragStart = (movement) => {
    createPreview();

    console.log('onDragStart', movement);

    setSource({
      type,
    });

    setIsDragging(true);
  };

  const onDragMove = ({ x, y, ...other }) => {
    updatePreview({ x, y });
    // throttledDragAction({ x, y, ...other });
  };

  const onDragEnd = (movement) => {
    cleanupPreview();
    setIsDragging(false);

    setSource(null);
  };

  const styles = useMemo(() => (isDragging ? { visibility: 'hidden' } : {}), [isDragging]);

  useEffect(() => {
    if (componentRef.current) {
      dragManager = new DragManager({
        el: componentRef.current,
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
  }, [componentRef]);

  return {
    styles,
    isDragging,
    positionIsValid: !overObstable,
    positionIsDroppable: overDropTarget,
  };
};

export default useDraggable;
