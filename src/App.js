import React, { useEffect } from 'react';
import ThemeSelect from './ThemeSelect';
import { makeStyles, useTheme, Button } from './@blocks-ds';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: 8,
  },
  customButton: {
    color: theme.type === 'light' ? '#fff' : '#000',
    backgroundColor: theme.type === 'light' ? '#1976d2' : '#90caf9',
    '&:hover': {
      backgroundColor: 'rgb(17, 82, 147)',
    },
  },
}));

function App(props) {
  const { themes, changeTheme } = props;
  const theme = useTheme();
  const classes = useStyles(props);

  useEffect(() => {
    document.body.style['background-color'] = theme.palette.background.default;
  }, [theme]);

  return (
    <div>
      <Button className={classes.button}>Primary</Button>
      <Button className={classes.button} color="secondary">
        Secondary
      </Button>
      <Button className={classes.button} classes={{ root: classes.customButton }} color="secondary">
        Custom
      </Button>
      <Button className={classes.button} disabled href="https://blocks.cbrebuild.com" target="_blank">
        Go To Blocks
      </Button>
      <ThemeSelect themes={themes} changeTheme={changeTheme} />
    </div>
  );
}

export default App;
