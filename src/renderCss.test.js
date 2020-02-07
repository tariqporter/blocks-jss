import React from 'react';
import ThemeProvider from './@blocks-ds/ThemeProvider';
import { Button } from './@blocks-ds';
import defaultTheme from './@blocks-ds/styles/defaultTheme';
import ReactDOMServer from 'react-dom/server';
import ServerStyleSheets from './@blocks-ds/ServerStyleSheets';
import fs from 'fs';

const Index = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
    </ThemeProvider>
  );
};

test('render css', complete => {
  const sheets = new ServerStyleSheets();
  ReactDOMServer.renderToString(sheets.collect(<Index />));
  const css = sheets.toString();
  fs.writeFile('./src/@blocks-ds/css/blocks.css', css, complete);
});

export default Index;
