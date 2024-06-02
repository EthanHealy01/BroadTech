import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 110%;
  background: linear-gradient(270deg, #e6ffe6, #c2e9fb, #e6ffe6);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
`;

const GradientBackground = ({ children }) => {
  return (
    <Background>
      <Content>{children}</Content>
    </Background>
  );
};

export default GradientBackground;
