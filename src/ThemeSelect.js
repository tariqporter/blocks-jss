import React from 'react';
import useTheme from './@blocks-ds/useTheme';

const ThemeSelect = React.forwardRef(function Button(props, ref) {
  const { themes, changeTheme } = props;
  const theme = useTheme();

  return (
    <select onChange={({ target: { value } }) => changeTheme(value)} value={theme.type}>
      {Object.keys(themes).map(id => (
        <option key={id} value={id}>
          {id}
        </option>
      ))}
    </select>
  );
});

export default ThemeSelect;
