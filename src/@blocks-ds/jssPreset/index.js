import functions from 'jss-plugin-rule-value-function';
import global from 'jss-plugin-global';
import nested from 'jss-plugin-nested';
import expand from 'jss-plugin-expand';
import camelCase from 'jss-plugin-camel-case';
import defaultUnit from 'jss-plugin-default-unit';
import vendorPrefixer from 'jss-plugin-vendor-prefixer';
import propsSort from 'jss-plugin-props-sort';

// Subset of jss-preset-default with only the plugins the blocks-ds components are using.
function jssPreset() {
  return {
    plugins: [
      functions(),
      global(),
      nested(),
      expand(),
      camelCase(),
      defaultUnit(),
      // Disable the vendor prefixer server-side, it does nothing.
      // This way, we can get a performance boost.
      // In the documentation, we are using `autoprefixer` to solve this problem.
      typeof window === 'undefined' ? null : vendorPrefixer(),
      propsSort(),
    ],
  };
}

export default jssPreset;
