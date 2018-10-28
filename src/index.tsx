import * as React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    height: calc(100vh - 1.5rem - 1.5rem);

    font-size: 1.6rem;
    margin: 1.5rem;

    background: #2b2b2b;
    color: #fff;

    font-family: 'Raleway', sans-serif;
  }

  h1 {
    margin: 0;
  }

  .app {
    height: 100%;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.querySelector('.app')
);
