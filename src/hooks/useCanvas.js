import { useRef, useEffect } from 'react';

const useCanvas = (draw, { predraw, postdraw }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let requestAnimationId;
    const render = (ctx, time) => {
      predraw(ctx, canvasRef.current);
      draw(ctx, time, canvasRef.current);
      postdraw(ctx);
      requestAnimationId = requestAnimationFrame((time) => render(ctx, time));
    };
    render(context);

    return () => {
      cancelAnimationFrame(requestAnimationId);
    };
  });

  return canvasRef;
};

export default useCanvas;
