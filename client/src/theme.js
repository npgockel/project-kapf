import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey, blue, orange, teal, lime, purple, yellow, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  palette: {
    primary: {
      main: grey[900],
      light: grey[200]
    },
    secondary: {
      main: blue[200],
      light: teal[200]
    },
    error: {
      main: red[200]
    },
    warning: {
      main: yellow[200],
      light: orange[200]
    },
    success: {
      main: green[200],
      light: lime[200]
    },
    info: {
      main: purple[200]
    },
    action: {
      hover: '#ffffff',
      hoverOpacity: 0.4
    }
  },
  // spacing: 1,
  shadows: ["none"]

});

export default theme;