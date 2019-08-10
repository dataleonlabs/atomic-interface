var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { createGlobalStyle, ThemeProvider as ThemeProviderBase } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
export const GlobalStyle = createGlobalStyle `
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
`;
class ThemeProvider extends React.Component {
    render() {
        const _a = this.props, { children } = _a, theme = __rest(_a, ["children"]);
        return (React.createElement(ThemeProviderBase, { theme: theme },
            React.createElement(React.Fragment, null,
                React.createElement(GlobalStyle, null),
                this.props.children)));
    }
}
ThemeProvider.defaultProps = {
    theme: {
        bodyBackgroundColor: '#ffffff'
    }
};
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map