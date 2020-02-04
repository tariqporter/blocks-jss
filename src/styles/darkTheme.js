import transitions from './transitions';
import shadows from './shadows';

export default {
  palette: {
    primary: {
      main: '#ff0000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#009f6f',
    },
    text: {
      primary: '#008b61',
      secondary: '#00704f',
    },
    action: {
      hoverOpacity: 1,
      selectedOpacity: 1,
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
