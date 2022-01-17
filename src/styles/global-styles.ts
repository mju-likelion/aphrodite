import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html, body {
    max-width : 1024px;
    height: 100%;
    color: #fff;
    margin: 0 auto;
    background-color : #141517;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';}
  a { cursor: pointer; text-decoration: none; }
`;
