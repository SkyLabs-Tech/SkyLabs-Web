import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: #f1f1f1;
    background-color: #1a1a1a;
  }

  a {
    text-decoration: none;
  }
`;