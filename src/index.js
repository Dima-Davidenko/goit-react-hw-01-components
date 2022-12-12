import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import './index.css';
import theme from './theme.json';
import App from './App';

createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App></App>
    </ThemeProvider>
  </React.StrictMode>
);
