import { createMuiTheme } from '@material-ui/core/styles';

const themeName = 'Cold Purple Limed Spruce Banded Butterflyfish';
const palette = {
  primary: { main: '#2C3E50' },
  secondary: { main: '#37474F' }
};

export default createMuiTheme({
  palette,
  themeName,
  typography: {
    useNextVariants: true
  }
});
