import { createGlobalStyle } from "styled-components/macro"

export default createGlobalStyle`
  html, body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
  }
  a:focus {
     outline: none !important;
  }

  a:visited {
     outline: none !important;
  }

  button:focus {
     outline: none;
  }
`
