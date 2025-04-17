// src/components/Header.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaComments, FaChevronDown } from 'react-icons/fa'; // Added FaLinkedin if needed

/* Styled Components */
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Ensure vertical alignment */
  padding: 20px 50px;
  background-color: #1a1a1a;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px; /* Adjust height as needed */
  margin-right: 10px; /* Spacing between logo and text */
`;

const LogoText = styled.h1`
  color: rgba(118, 99, 162, 0.88);
  margin: 0; /* Remove default margin */
  font-size: 1.5rem; /* Adjust font size as needed */

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
`;

const NavLink = styled(ScrollLink)`
  color: #b39ddb;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    border-bottom: 2px solid #b39ddb;
  }
`;

/* Styled Components for Feedback Dropdown */
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #b39ddb;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  right: 0; /* Align dropdown to the right */
  background-color: #2a2a2a;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
`;

const DropdownItem = styled(ScrollLink)`
  color: #ffffff;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #575757;
  }

  &.active {
    background-color: #575757;
  }
`;

/* Styled Button for "Try Our App" */
const TryAppButton = styled.button`
  color: #b39ddb;
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

const Header = ({ onTryApp }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('.feedback-dropdown')) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <HeaderContainer>
      <LogoContainer>
        {/* Option B: Reference the logo from public */}
        <LogoImage src="/logo.png" alt="Logo" />
        <LogoText>SkyLabs Developments</LogoText>
      </LogoContainer>

      <Nav>
        <NavLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-70}
          activeClass="active"
        >
          Home
        </NavLink>
        <NavLink
          to="features"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-70}
          activeClass="active"
        >
          Features
        </NavLink>
        <NavLink
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-70}
          activeClass="active"
        >
          Contact
        </NavLink>

        {/* Try Our App Button */}
        <TryAppButton onClick={onTryApp}>
          Try Our App
        </TryAppButton>

        {/* Feedback Dropdown */}
        <DropdownContainer className="feedback-dropdown">
          <DropdownButton onClick={toggleDropdown}>
            <FaComments style={{ marginRight: '5px' }} />
            Feedback <FaChevronDown style={{ marginLeft: '5px' }} />
          </DropdownButton>
          <DropdownContent show={dropdownOpen}>
            <DropdownItem
              to="feedback-section-1"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              onClick={() => setDropdownOpen(false)}
              activeClass="active"
            >
              <FaComments style={{ marginRight: '10px' }} />
              General Feedback
            </DropdownItem>
            <DropdownItem
              to="feedback-section-2"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              onClick={() => setDropdownOpen(false)}
              activeClass="active"
            >
              <FaComments style={{ marginRight: '10px' }} />
              Feature Requests
            </DropdownItem>
            <DropdownItem
              to="feedback-section-3"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              onClick={() => setDropdownOpen(false)}
              activeClass="active"
            >
              <FaComments style={{ marginRight: '10px' }} />
              Bug Reports
            </DropdownItem>
          </DropdownContent>
        </DropdownContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;