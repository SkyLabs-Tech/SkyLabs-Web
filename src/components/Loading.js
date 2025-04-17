// src/components/Loading.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.9); /* Semi-transparent background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3000; /* Above other components */
`;

const LoadingSpinner = styled(FaSpinner)`
  color: rgba(225, 211, 192, 0.88);
  font-size: 4rem;
  animation: ${spin} 2s linear infinite;
`;

const LoadingMessage = styled.p`
  color: rgba(225, 211, 192, 0.88);
  font-size: 1.5rem;
  margin-top: 20px;
`;

const Loading = () => {
  return (
    <LoadingOverlay>
      <LoadingSpinner />
      <LoadingMessage>Loading SkyLabs Developments...</LoadingMessage>
    </LoadingOverlay>
  );
};

export default Loading;
