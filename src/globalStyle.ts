import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
  }

  body {
    height: 200vh;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    line-height: 1;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    

     -ms-overflow-style: none; 
   scrollbar-width: none; 

    ::-webkit-scrollbar {
      display: none;
    } 
  }

  #root {
    height: 100%;
  }

`;
