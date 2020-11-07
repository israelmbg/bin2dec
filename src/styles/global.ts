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
    background: linear-gradient(
      116.16deg,
      #c0c0c5 -1.12%,
      rgba(255, 255, 255, 0) 124.52%
    ),
    #333337;
  }
`
