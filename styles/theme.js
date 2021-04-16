import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#483080;',
    },
    secondary: {
      main: '#E95670',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    white: {
      default: "#fff"
    }
  },
});

export default theme;
