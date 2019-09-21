import React from 'react';
import { createGlobalStyle, ThemeProvider as ThemeProviderBase } from 'styled-components';

export interface GlobalStyleProps {

  /** Current theme */
  theme?: {

    /** Background color on body */
    bodyBackgroundColor?: string
  }
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`

`
class ThemeProvider extends React.Component {

  public static defaultProps: Partial<GlobalStyleProps> = {
    theme: {
      bodyBackgroundColor: '#ffffff'
    }
  }

  public render() {
    const { children, ...theme } = this.props;
    return (
      <ThemeProviderBase theme={theme as any}>
        <>
          <GlobalStyle theme={theme} />
          {this.props.children}
        </>
      </ThemeProviderBase>
    );
  }
}

export default ThemeProvider
