import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: #130224;
    color: #fff;
    height: 100%;
    width: 100%;
  }
  
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: inherit;
  }
  
  button {
    border: none;
    box-shadow: none;
    cursor: pointer;
  }
`;
