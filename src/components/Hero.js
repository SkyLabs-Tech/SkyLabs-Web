// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
// 1) Import your image from src/assets
import heroBg from '../assets/hero-bg.jpg';

/* Styled Components */
const HeroContainer = styled.div`
  /* No additional styles needed here */
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* 2) Replace linear-gradient with your image */
  background: url(${heroBg}) center center / cover no-repeat;

  /* Change text color if needed for contrast */
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin: 15px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.a`
  padding: 10px 30px;
  background-color: #1a1a1a;
  color: rgba(116, 150, 162, 0.9);
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #333333;
  }

  @media (max-width: 768px) {
    padding: 8px 25px;
    font-size: 1rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSection id="home">
        <HeroTitle>SkyLabs Developments</HeroTitle>
        <HeroSubtitle>
          Imagination is our only limitation. Development is agile. Creation is art.
        </HeroSubtitle>
        <HeroButton href="#features">Explore Features</HeroButton>
      </HeroSection>
    </HeroContainer>
  );
};

export default Hero;
