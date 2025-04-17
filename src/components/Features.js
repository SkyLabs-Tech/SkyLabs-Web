// src/components/Features.js

import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa'; // Optional: Import LinkedIn icon if needed
import { LoadingContext } from '../contexts/LoadingContext'; // Ensure LoadingContext is correctly imported

// Define the testing app URL here for easy modification
const TESTING_APP_URL = 'https://www.canva.com/design/DAGafXVH-k4/BpbU-j7z05LpATfMqNxepg/view?utm_content=DAGafXVH-k4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd6210ddf59'; // Replace with your actual testing app URL

/* Styled Components */

const FeaturesSection = styled.section`
  padding: 100px 0;
  background-color: #1a1a1a;
  text-align: center;
  color: #3c508d;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
  max-width: 1200px;
  margin: 0 auto;
`;

const Feature = styled.div`
  width: 22%; /* Adjusted for four features */
  background-color: #333333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px; /* Space between rows */

  @media (max-width: 768px) {
    width: 45%; /* Two features per row on smaller screens */
  }

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #2e3c77; /* Icon color */
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #2d70b2;
`;

const LinkedInButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #0077b5; /* LinkedIn blue */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #1e2c75; /* Darker LinkedIn blue on hover */
  }
`;

/* New Styled Component for Testing App Button */

const TestingAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #e0e0e0; /* Light grey background */
  color: #1a1a1a;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #c0c0c0; /* Darker grey on hover */
  }

  /* Optional: Add transition for smooth hover effect */
  transition: background-color 0.3s ease;
`;

const Features = () => {
  const { showLoading } = useContext(LoadingContext);

  const handleTestingAppRedirect = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    showLoading(); // Trigger the loading screen
    // Redirect to the testing app after a short delay to allow the loading screen to render
    setTimeout(() => {
      window.location.href = TESTING_APP_URL;
    }, 1000); // 1-second delay
  };

  return (
    <FeaturesSection id="features">
      <FeaturesTitle>Our Core Services</FeaturesTitle>
      <FeaturesGrid>
        <Feature>
          <FeatureIcon>💡</FeatureIcon>
          <FeatureTitle>Tailored Customer Solutions</FeatureTitle>
          <FeatureDescription>
            We craft unique solutions tailored to the specific needs of each customer, ensuring optimal results.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>⚙️</FeatureIcon>
          <FeatureTitle>Design & Agile Development Planning</FeatureTitle>
          <FeatureDescription>
            Our agile approach combines design thinking and fast iterations to deliver solutions quickly and efficiently.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>🚀</FeatureIcon>
          <FeatureTitle>Innovating Development Processes</FeatureTitle>
          <FeatureDescription>
            By leveraging new technologies, we continuously innovate our development processes to stay ahead of the curve.
          </FeatureDescription>
        </Feature>
        {/* New Feature Added */}
        <Feature>
          <FeatureIcon>🧪</FeatureIcon>
          <FeatureTitle>Available Apps Information</FeatureTitle>
          <FeatureDescription>
           Check out our apps and contact us for demonstration and testing free of charge and no commitment.
          </FeatureDescription>
          {/* Testing App Button */}
          <TestingAppButton href={TESTING_APP_URL} onClick={handleTestingAppRedirect}>
            Learn on our solutions production ready
          </TestingAppButton>
        </Feature>
      </FeaturesGrid>
      {/* LinkedIn Button */}
      <LinkedInButton href="https://www.linkedin.com/company/skylabs-developments/" target="_blank" rel="noopener noreferrer">
        Visit us on LinkedIn <FaLinkedin style={{ marginLeft: '5px' }} />
      </LinkedInButton>
    </FeaturesSection>
  );
};

export default Features;
