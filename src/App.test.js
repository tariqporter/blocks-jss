import React, { useState } from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from './@blocks-ds/ThemeProvider';
import App from './App';
import defaultTheme from './@blocks-ds/styles/defaultTheme';

export const Index = () => {
  const themes = {
    light: defaultTheme,
  };
  const [theme] = useState(defaultTheme);
  return (
    <ThemeProvider theme={theme}>
      <App themes={themes} />
    </ThemeProvider>
  );
};

test('renders learn react link', () => {
  const { getByText } = render(<Index />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
