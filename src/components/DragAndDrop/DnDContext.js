import { isArray } from 'lodash';
import React, { createContext, useContext, useState, useReducer, useEffect, useCallback } from 'react';

const targetAcceptsSource = (target, source) => {
  if (target.accepts && isArray(target.accepts)) {
    return target.accepts.reduce((current, candidate) => {
      if (candidate === source.type) {
        return true;
      }

      return current;
    }, false);
  }

  if (target.accepts === source.type) {
    return true;
  }

  return false;
};

const DnDContext = createContext();

const DnDProvider = (props) => {
  const [targets, setTargets] = useState([]);
  const [obstacles, setObstacles] = useState([]);
  const [source, setDragSource] = useState(null);

  // When source changes, update targets to be active.
  // useEffect(() => {
  //   eff
  // }, [source]);

  const handleUpsert = (target) => {
    if (!target.uuid) {
      console.error('No UUID provided for drop target!');
      return;
    }

    console.log('upsert', target);
    const existing = targets.find((existingTarget) => existingTarget.uuid === target.uuid);

    if (existing) {
      console.log('existing');
      setTargets(targets.map((t) => {
        if (t === existing) {
          return target;
        }

        return t;
      }));

      return;
    }
    console.log('not existing');

    setTargets([...targets, target]);
  };

  const handleRemoveTarget = (uuid) => {
    setTargets((currentTargets) => currentTargets.filter((target) => target.uuid === uuid));
  };

  const getTarget = (uuid) => targets.find((target) => target.uuid === uuid);

  const getUUIDTarget = (uuid) => {
    const existing = getTarget(uuid);

    return existing && existing.target;
  };

  const getActiveState = (uuid) => useCallback(() => {
    if (!source) { return false; }
    const draggingType = source.type;
    const thisAccepts = getTarget(uuid).accepts;

    return draggingType === thisAccepts;
  }, [source, uuid]);

  // const isSourceOverObstacle = useCallback(() => {
  //   const {top, bottom, left, right } = getSourcePosition();
  // }, source, targets);

  const dndData = {
    targets,
    obstacles,
    source,
    setSource: setDragSource,
    // overObstable: isSourceOverObstacle(),
    // overDropTarget: isSourceOverDropTarget(),
    upsertTarget: handleUpsert,
    removeTarget: handleRemoveTarget,
    getActiveState,
  };

  console.log(dndData);

  return <DnDContext.Provider value={dndData} {...props} />;
};

const useDnDContext = () => useContext(DnDContext);

export { DnDProvider, useDnDContext };
