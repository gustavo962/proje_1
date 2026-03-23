import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
  }

  body {
    background-color: #f5f6fa;
    color: #2f3640;
  }

  button {
    cursor: pointer;
    border: none;
  }
`

export default EstiloGlobal