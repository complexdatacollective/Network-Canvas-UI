import { useEffect, useMemo } from 'react';
import useResizeObserver from 'use-resize-observer';
import v4 from 'uuid/v4';
import { useDnDContext } from './DnDContext';

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

export default useDroppable;
