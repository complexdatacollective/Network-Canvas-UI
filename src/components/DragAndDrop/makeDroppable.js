/* eslint-disable react/no-find-dom-node, react/jsx-props-no-spreading */

import React, { useEffect, useMemo, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useDnDContext } from './DnDContext';
import useResizeObserver from 'use-resize-observer';
import v4 from 'uuid/v4';

const makeDroppable = (WrappedComponent) => (props) => {
  const {
    onDrop = () => console.log('onDrop'),
    accepts = null,
    ...rest
  } = props;
  const componentRef = useRef(null);
  const { width, height } = useResizeObserver({ ref: componentRef });

  const uuid = useMemo(() => v4(), []);

  const {
    upsertTarget,
    removeTarget,
    isActive,
  } = useDnDContext();

  const activeStatus = isActive(uuid)();

  console.log('activeStatus', activeStatus);

  const updateTarget = () => {
    console.log('updateTarget');
    if (!componentRef || !(height && width)) { return; }

    const { x, y } = componentRef.current.getBoundingClientRect();

    upsertTarget({
      uuid,
      accepts,
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

  const classes = cx(
    'droptarget',
    {
      'droptarget--active': activeStatus,
    },
  );

  return (
    <div
      className={classes}
      style={{
        background: activeStatus ? 'yellow' : 'green',
      }}
      ref={componentRef}
    >
      <WrappedComponent
        {...rest}
      />
    </div>

  );
};

// const dropTarget = (WrappedComponent) => {
//   class DropTarget extends Component {
//     componentDidMount() {
//       if (!this.component) { return; }
//       this.node = findDOMNode(this.component);
//       this.update();
//     }

//     componentWillUnmount() {
//       this.removeTarget();
//       clearTimeout(this.interval);
//       cancelAnimationFrame(this.animationFrame);
//     }

//     removeTarget = () => {
//       const { id } = this.props;
//       store.dispatch(
//         actions.removeTarget(id),
//       );
//     }

//     update = () => {
//       this.updateTarget();

//       this.interval = setTimeout(
//         () => {
//           this.animationFrame = requestAnimationFrame(this.update);
//         },
//         1000 / maxFramesPerSecond,
//       );
//     }

//     updateTarget = () => {
//       if (!this.node) { return; }

//       const {
//         id,
//         onDrop,
//         onDrag,
//         onDragEnd,
//         accepts,
//         meta,
//       } = this.props;

//       const boundingClientRect = getAbsoluteBoundingRect(this.node);

//       store.dispatch(
//         actions.upsertTarget({
//           id,
//           onDrop,
//           onDrag,
//           onDragEnd,
//           accepts,
//           meta: meta(),
//           width: boundingClientRect.width,
//           height: boundingClientRect.height,
//           y: boundingClientRect.top,
//           x: boundingClientRect.left,
//         }),
//       );
//     }

//     render() {
//       const {
//         accepts,
//         meta,
//         ...props
//       } = this.props;

//       return (
//         <WrappedComponent
//           ref={(component) => { this.component = component; }}
//           {...props}
//         />
//       );
//     }
//   }
//   return DropTarget;
// };

// DropTarget.propTypes = {
//   id: PropTypes.string.isRequired,
//   onDrop: PropTypes.func,
//   onDrag: PropTypes.func,
//   onDragEnd: PropTypes.func,
//   accepts: PropTypes.func,
//   meta: PropTypes.func,
// };

// DropTarget.defaultProps = {
//   meta: () => ({}),
//   accepts: () => false,
//   onDrop: () => {},
//   onDrag: () => {},
//   onDragEnd: () => {},
// };

export default makeDroppable;
