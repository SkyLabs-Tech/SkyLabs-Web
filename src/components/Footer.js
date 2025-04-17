// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px 50px;
  background-color: #1a1a1a;
  color: #b39ddb;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} SkyLabs Developments. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
