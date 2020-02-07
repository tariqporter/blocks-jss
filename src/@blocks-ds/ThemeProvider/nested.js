const hasSymbol = typeof Symbol === 'function' && Symbol.for;

export default hasSymbol ? Symbol.for('blx.nested') : '__THEME_NESTED__';
