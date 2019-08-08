import React from 'react';
import { createGlobalStyle, ThemeProvider as ThemeProviderBase } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`
class ThemeProvider extends React.Component {
  render() {
    const { children, ...theme } = this.props;
    return (
      <ThemeProviderBase theme={theme}>
        <>
          <GlobalStyle  />
          {this.props.children}
        </>
      </ThemeProviderBase>
    );
  }
}


export default ThemeProvider
