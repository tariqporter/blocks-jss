import React from 'react';
import { withStyles } from './withStyles';

const styles = theme => ({
  root: {},
});

const ThemeSelect = React.forwardRef(function Button(props, ref) {
  const { themes, setTheme } = props;

  const changeTheme = e => {
    const id = e.target.value;
    setTheme(themes[id]);
  };

  return (
    <select onChange={changeTheme}>
      {Object.keys(themes).map(theme => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
});

export default withStyles(styles)(ThemeSelect);
