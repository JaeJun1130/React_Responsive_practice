import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

*{
    box-sizing:border-box;
    font-family: 'Balsamiq Sans', cursive;
}

html, body{
    overflow-x:hidden;
}

`;
