import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input {
    font-family: Inter, sans-serif;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: #444;
  }
`
