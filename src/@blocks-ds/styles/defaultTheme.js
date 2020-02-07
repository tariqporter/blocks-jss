import transitions from './transitions';
import shadows from './shadows';

export default {
  type: 'light',
  palette: {
    primary: {
      main: '#009f6f',
      border: '#009f6f',
      hover: '#008b61',
      active: '#00704f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      border: '#fff',
      hover: '#ecf5f1',
      active: '#d5f0e5',
      contrastText: '#009f6f',
    },
    action: {
      hoverOpacity: 1,
      selectedOpacity: 1,
      disabledOpacity: 0.35,
    },
    background: {
      default: '#fff',
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
  },
  spacing: factor => 8 * factor,
  transitions,
  shadows,
};
