import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './globalStyle';
import AppRouter from './AppRouter';

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <AppRouter />
  </Router>,
  document.getElementById('root')
);