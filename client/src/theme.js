import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey, blue, purple, yellow, green } from '@material-ui/core/colors'

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
      light: grey[100]
    },
    secondary: {
      main: blue[100]
    },
    error: {
      main: red[100]
    },
    warning: {
      main: yellow[100]
    },
    success: {
      main: green[100]
    },

  },
  // spacing: 1,
  shadows: ["none"]

});

export default theme;