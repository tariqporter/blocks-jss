import deepmerge from '../utils/deepmerge';
import noopTheme from './noopTheme';

function getStylesCreator(stylesOrCreator) {
  const themingEnabled = typeof stylesOrCreator === 'function';

  if (process.env.NODE_ENV !== 'production') {
    if (typeof stylesOrCreator !== 'object' && !themingEnabled) {
      console.error(
        [
          'blocks-ds: the `styles` argument provided is invalid.',
          'You need to provide a function generating the styles or a styles object.',
        ].join('\n')
      );
    }
  }

  return {
    create: (theme, name) => {
      let styles;
      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          if (themingEnabled === true && theme === noopTheme) {
            // TODO: prepend error message/name instead
            console.error(
              [
                'blocks-ds: the `styles` argument provided is invalid.',
                'You are providing a function without a theme in the context.',
                'One of the parent elements needs to use a ThemeProvider.',
              ].join('\n')
            );
          }
        }
        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      const overrides = theme.overrides[name];
      const stylesWithOverrides = { ...styles };

      Object.keys(overrides).forEach(key => {
        if (process.env.NODE_ENV !== 'production') {
          if (!stylesWithOverrides[key]) {
            console.warn(
              [
                'blocks-ds: you are trying to override a style that does not exist.',
                `Fix the \`${key}\` key of \`theme.overrides.${name}\`.`,
              ].join('\n')
            );
          }
        }

        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
      });

      return stylesWithOverrides;
    },
    options: {},
  };
}

export default getStylesCreator;
