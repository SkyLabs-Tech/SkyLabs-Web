// src/App.js

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Loading from './components/Loading';
import styled from 'styled-components';
import { LoadingProvider } from './contexts/LoadingContext';

const AppContainer = styled.div`
  margin-top: 80px; /* Adjust based on header height */
`;

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate an initial loading period (e.g., fetching data)
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <LoadingProvider>
      {initialLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <AppContainer>
            <Hero />
            <AboutUs />
            <Features />
            <ContactUs />
            <Footer />
          </AppContainer>
        </>
      )}
    </LoadingProvider>
  );
};

export default App;
