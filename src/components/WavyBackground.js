import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
`;

export const WavyBackground = ({
  children,
  colors,
  waveWidth,
  backgroundFill,
  blur = 5,
  speed = 'ls',
  waveOpacity = 0.7,
  ...props
}) => {
  const canvasRef = useRef(null);

  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.01;
      case 'fast':
        return 0.05;
      default:
        return 0.02;
    }
  };

  const init = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    ctx.filter = `blur(${blur}px)`;
    let nt = 0;

    const waveColors = colors ?? ['#ffffff', '#00ff00'];

    const drawWave = (n) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 20;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 10) {
          const y =
            Math.sin(x * 0.02 + nt + i) * 150 +
            Math.cos(x * 0.03 + nt + i * 10) * 150 +
            h * 0.5;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.fillStyle = backgroundFill || 'black';
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(6);
      setTimeout(() => {
        requestAnimationFrame(render);
      }, 1000 / 30); // Throttle to 30 FPS
    };

    render();

    window.onresize = function () {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container {...props}>
      <Canvas
        ref={canvasRef}
        id="canvas"
        style={{
          filter: `blur(${blur}px)`,
        }}
      ></Canvas>
      <Content>{children}</Content>
    </Container>
  );
};
