import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { red, blue, purple, yellow, green } from '@material-ui/core/colors'



const theme = createMuiTheme({
  backgroundImage: {
    url: "Artboard1.png"
  },
  palette: {
    primary: {
      main: red[100]
    },
  },
  spacing: {

  }
});


ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

