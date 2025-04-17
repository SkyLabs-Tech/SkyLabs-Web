// src/components/AboutUs.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #1a1a1a;
  color: #315c81;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  max-width: 800px;
  margin: 0 auto 20px;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #419a32;
`;

const AboutUs = () => {
  return (
    <AboutSection id="about">
      <img
        src="/brand-image.png"
        alt="Brand Logo"
        style={{ width: '150px', marginBottom: '20px' }}
      />
      <AboutTitle>About Us</AboutTitle>
      <AboutDescription>
        At SkyLabs Developments, we believe that every challenge deserves a solution tailored to its unique needs. ...
      </AboutDescription>
      <AboutDescription>
        Our mission is to bring bold ideas to life through innovative technology and forward-thinking design. ...
      </AboutDescription>
      <AboutDescription>
        We combine the best of current technologies with our own innovations to transform ideas into reality. ...
      </AboutDescription>
      <AboutDescription>
        <strong>Industry:</strong> Business Intelligence Platforms
      </AboutDescription>
    </AboutSection>
  );
};

export default AboutUs;
