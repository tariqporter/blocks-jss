import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ls from 'local-storage';
import ThemeProvider from './@blocks-ds/ThemeProvider';
import App from './App';
import 'typeface-roboto';
import defaultTheme from './@blocks-ds/styles/defaultTheme';
import darkTheme from './darkTheme';
import * as serviceWorker from './serviceWorker';

export const Index = () => {
  const themes = {
    light: defaultTheme,
    dark: darkTheme,
  };
  const [theme, setTheme] = useState(themes[ls.get('theme')] || defaultTheme);
  const changeTheme = id => {
    setTheme(themes[id]);
    ls.set('theme', id);
  };
  return (
    <ThemeProvider theme={theme}>
      <App themes={themes} changeTheme={changeTheme} />
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
