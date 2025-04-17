// src/contexts/LoadingContext.js

import React, { createContext, useState } from 'react';

// Create the context
export const LoadingContext = createContext();

// Create the provider component
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // Function to show loading
  const showLoading = () => setLoading(true);

  // Function to hide loading
  const hideLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
