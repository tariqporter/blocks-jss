import React, { useState } from 'react';
import Button from './Button';
import { withStyles } from './withStyles';
import ThemeSelect from './ThemeSelect';
import { ThemeProvider } from 'react-jss';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

const styles = theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
});

function App(props) {
  const { classes } = props;
  const themes = {
    light: defaultTheme,
    dark: darkTheme,
  };
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', padding: 50 }}>
        <Button className={classes.button}>blocks-ds button</Button>
        <Button className={classes.button}>Second button</Button>
        <ThemeSelect themes={themes} setTheme={setTheme} />
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
