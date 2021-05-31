/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import useResizeAware from 'react-resize-aware';
import useCanvas from '../hooks/useCanvas';

function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    // console.log(ratio);
    const context = canvas.getContext('2d');
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
}

const defaultPredraw = (context, canvas) => {
  // console.log('defaultPredraw');
  context.save();
  resizeCanvas(canvas);
  const { width, height } = context.canvas;
  context.clearRect(0, 0, width, height);
};

const defaultPostdraw = (context) => {
  // console.log('defaultPostdraw');
  // index += 1;
  context.restore();
};

const Canvas = (props) => {
  const { draw, predraw = defaultPredraw, postdraw = defaultPostdraw, ...rest } = props;
  const canvasRef = useCanvas(draw, { predraw, postdraw });

  const [resizeListener, sizes] = useResizeAware();

  useEffect(() => {
    resizeCanvas(canvasRef.current);
  }, [canvasRef, sizes]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {resizeListener}
      <canvas ref={canvasRef} {...rest} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Canvas;
