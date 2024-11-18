// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    --theme-white-text: #333;
    --theme-white-background: #fff;

    --theme-dark-text: #fff;
    --theme-dark-background: #333;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
