import React, { useMemo, useRef } from 'react';
import '../../src/styles/_all.scss';
import { DnDProvider } from '../../src/components/DragAndDrop/DnDContext';
import DRAGGABLE_TYPES from '../../src/components/DragAndDrop/draggableTypes';
import useDroppable from '../../src/components/DragAndDrop/useDroppable';
import useDraggable from '../../src/components/DragAndDrop/useDraggable';

export default { title: 'Systems/DND' };

const TestDroppable = ({
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

const TestDraggable = (props) => {
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
    isDragging, // True when this item is being dragged
  } = useDraggable(
    ref,
    previewRef,
    DRAGGABLE_TYPES.CARD,
    payload,
    previewComponent,
  );

  console.log({ isDragging, positionIsValid});

  const opacity = useMemo(() => {
    if (!isDragging) {
      return 1;
    }

    return positionIsValid ? 1 : 0;
  }, [isDragging, positionIsValid]);

  return (
    <div
      ref={ref}
      style={{
        ...styles,
        background: positionIsDroppable ? 'blue' : 'orange',
        opacity,
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
        <TestDroppable
          accepts={DRAGGABLE_TYPES.CARD}
          // activePlaceholder={}
          // hoverPlaceholder={}
        />
        <TestDroppable
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
          <TestDraggable />
          <TestDraggable />
          <TestDraggable />
          <TestDraggable />
          <TestDraggable />
        </div>

      </DnDProvider>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
};
