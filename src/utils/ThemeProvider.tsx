import React from 'react';
import { createGlobalStyle, ThemeProvider as ThemeProviderBase } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


export interface GlobalStyleProps {

  /** Current theme */
  theme?: {

    /** Background color on body */
    bodyBackgroundColor?: string
  }

}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
  body {
    font-family: 'IBM Plex Sans', sans-serif;
    background-color: ${(props) => props.theme && props.theme.bodyBackgroundColor};
    font-size: 0.9rem;

    /* remove rounding from cards, buttons and inputs */
    .card, .btn, .form-control, .dropdown-menu, .modal-content { border-radius: 0px; }
    .card:focus, .btn:focus, .form-control:focus, button:focus, :focus,
    .custom-control-input:focus~.custom-control-label::before {
        box-shadow: none!important;
    }

    .form-group {
      margin-bottom: 0.5rem;
    }

    * {
        outline: 0!important;
    }

    .card, .btn, .form-control, .dropdown-menu, .modal-content, .badge, .progress, .toast {
        border-radius: 0px!important;
    }

  }
`
class ThemeProvider extends React.Component {

  public static defaultProps: Partial<GlobalStyleProps> = {
    theme: {
      bodyBackgroundColor: '#ffffff'
    }
  }

  render() {
    const { children, ...theme } = this.props;
    return (
      <ThemeProviderBase theme={theme as any}>
        <>
          <GlobalStyle  />
          {this.props.children}
        </>
      </ThemeProviderBase>
    );
  }
}

export default ThemeProvider