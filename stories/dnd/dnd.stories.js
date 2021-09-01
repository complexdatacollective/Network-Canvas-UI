import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import makeDroppable from '../../src/components/DragAndDrop/makeDroppable';
import makeDraggable from '../../src/components/DragAndDrop/makeDraggable';
import '../../src/styles/_all.scss';
import { DnDProvider, useDnDContext } from '../../src/components/DragAndDrop/DnDContext';
import DragManager from '../../src/components/DragAndDrop/DragManager';
import DraggablePreview from '../../src/components/DragAndDrop/DragPreview';
import useResizeObserver from 'use-resize-observer';
import v4 from 'uuid/v4';
import DRAGGABLE_TYPES from '../../src/components/DragAndDrop/draggableTypes';

export default { title: 'Systems/DND' };

const useDroppable = (
  componentRef,
  typesAccepted,
  dropHandler,
) => {
  const { width, height } = useResizeObserver({ ref: componentRef });

  const uuid = useMemo(() => v4(), []);

  const {
    upsertTarget,
    removeTarget,
    getActiveState,
  } = useDnDContext();

  const isActive = getActiveState(uuid)();

  const updateTarget = () => {
    console.log('updateTarget');
    if (!componentRef || !(height && width)) { return; }

    const { x, y } = componentRef.current.getBoundingClientRect();

    upsertTarget({
      uuid,
      accepts: typesAccepted,
      width,
      height,
      y,
      x,
    });
  };

  useEffect(() => {
    updateTarget();
    return () => removeTarget(uuid);
  }, [width, height]);

  return {
    isActive,
  };
};

const TestDiv = ({
  accepts = [DRAGGABLE_TYPES.CARD, DRAGGABLE_TYPES.NODE],
  children
}) => {
  const ref = useRef(null);

  const dropHandler = (item) => {
    console.log('Dropped ', item);
  };

  const {
    isActive,
  } = useDroppable(
    ref,
    accepts,
    dropHandler,
  );

  return (
    <div
      ref={ref}
      style={{
        background: isActive ? 'yellow' : 'green',
        width: '15rem',
        height: '20rem',
        resize: 'both',
        overflow: 'auto',
      }}
    >
      <h4>Test Div</h4>
      {children}
    </div>
  );
};

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

  // const throttledDragAction = throttle(({ x, y, ...other }) => {
  //   console.log('Drag',x,y);
  //   // store.dispatch(
  //   //   actions.dragMove({
  //   //     x, y, setValidMove, ...other,
  //   //   }),
  //   // );
  // }, 60);

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

  const styles = () => (isDragging ? { visibility: 'hidden' } : {});

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
    styles: styles(),
    positionIsValid: getPositionIsValid(),
    positionIsDroppable: getPositionIsDroppable(),
  };
};

const TestCard = (props) => {
  const ref = useRef(null);
  const previewRef = useRef(null);

  const payload = {
    id: 123,
    data: 'things',
  };

  const previewComponent = () => (<div>Hello!</div>);

  const {
    styles,
    positionIsValid, // Changes when hovering obstacles
    positionIsDroppable, // Changes when hovering a valid drop target
  } = useDraggable(
    ref,
    previewRef,
    DRAGGABLE_TYPES.CARD,
    payload,
    previewComponent,
  );

  return (
    <div
      ref={ref}
      style={{
        ...styles,
        background: positionIsDroppable ? 'blue' : 'orange',
        opacity: positionIsValid ? 1 : 0,
        width: '5rem',
        height: '5rem',
      }}
      onClick={() => console.log('cleeek')}
    >
      <h4>Card</h4>
    </div>
  );
};

const Template = (args) => {
  console.log('Template');
  return (
    <>
      <DnDProvider>
        <TestDiv
          accepts={DRAGGABLE_TYPES.CARD}
          // activePlaceholder={}
          // hoverPlaceholder={}
        />
        <TestDiv
          accepts={DRAGGABLE_TYPES.NODE}
          // activePlaceholder={}
          // hoverPlaceholder={}
        />
        <div
          className="scrollable"
          style={{
            height: '15rem',
          }}
        >
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
        </div>

      </DnDProvider>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
};
