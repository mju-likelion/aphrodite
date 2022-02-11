import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    width : 100%;
    height: 100%;
    color: #fff;
    background-color : ${theme.colors.primary.black};
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';}
  a { cursor: pointer; text-decoration: none;
  &:active, :visited {
    color: #fff;
  }
  }
  button {
    outline: none;
    border:none;
    background-color : transparent;

    cursor : pointer;
  }
`;
