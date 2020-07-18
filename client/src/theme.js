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
      main: grey[900]
    },
    secondary: {
      main: red[100]
    }

  },
  text: {
    primary: grey[900],
    secondary: grey[50]
  },
  background: {
    paper: purple[100]
  },

});

export default theme;