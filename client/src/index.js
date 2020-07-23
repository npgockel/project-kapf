import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme"
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </header>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

