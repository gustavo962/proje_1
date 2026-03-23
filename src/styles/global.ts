import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#e66767',
  lightPink: '#fff4ee',
  beige: '#f8f2ec',
  cream: '#ffe9d9',
  dark: '#4b4b4b',
  white: '#ffffff',
  overlay: 'rgba(0, 0, 0, 0.72)',
  border: '#e66767'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${colors.beige};
    color: ${colors.dark};
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
`