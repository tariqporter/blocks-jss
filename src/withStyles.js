import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import jss, { SheetsManager } from 'jss';
import global from 'jss-plugin-global';
import defaultTheme from './styles/defaultTheme';

jss.use(global());
// const manager = new SheetsManager();
const map = new WeakMap();

export const withStyles = (styles, options = {}) => Component => {
  const { name } = options;

  const WithStyles = React.forwardRef(function WithStyles(props, ref) {
    const theme = useTheme();
    // console.log(Component);

    // if (!map.has(Component)) {
    //   map.set(Component);
    // }

    const themedStyles = styles(theme || defaultTheme);
    // console.log(themedStyles);

    let useStyles;
    if (map.has(Component)) {
      //
      const prefixedStyles = Object.keys(themedStyles).reduce((acc, k) => {
        acc[`.${name}-${k}`] = themedStyles[k];
        return acc;
      }, {});
      const globalStyles = { '@global': prefixedStyles };
      useStyles = createUseStyles(globalStyles, { name: 'test', meta: 'test' });
      map.set(Component, useStyles);
      // useStyles = map.get(Component);
    } else if (name) {
      const prefixedStyles = Object.keys(themedStyles).reduce((acc, k) => {
        acc[`.${name}-${k}`] = themedStyles[k];
        return acc;
      }, {});
      const globalStyles = { '@global': prefixedStyles };
      // useStyles = createUseStyles(globalStyles, { name: 'test', meta: 'test' });
      const sheet1 = jss
        .createStyleSheet(globalStyles, { index: 5, meta: 'sheet-1' })
        .attach();
      console.log(sheet1);
      // map.set(Component, useStyles);
      // const sheet = jss
      //   .createStyleSheet(globalStyles, { meta: 'sheet-1' })
      //   .attach();
      // console.log(sheet);
    } else {
      useStyles = createUseStyles(themedStyles, {
        name: 'test2',
        meta: 'test2',
      });
      map.set(Component, useStyles);
    }
    // console.log(useStyles);

    const { ...other } = props;

    const classes = useStyles(props);
    const globalClasses = Object.keys(themedStyles).reduce((acc, k) => {
      acc[k] = `${name}-${k}`;
      return acc;
    }, {});

    return (
      <Component
        ref={ref}
        classes={name ? globalClasses : classes}
        {...other}
      />
    );
  });

  return WithStyles;
};
