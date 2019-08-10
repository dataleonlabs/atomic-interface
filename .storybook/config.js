// .storybook/config.ts
import React from 'react'
import { configure, addDecorator }from '@storybook/react';
const req = require.context('../src', true, /\.stories\.tsx$/);

import { GlobalStyle } from "../src/utils/ThemeProvider"

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  );
}

configure(() => {
  req.keys().sort().forEach(filename => req(filename));
}, module);

addDecorator(withGlobalStyles);


