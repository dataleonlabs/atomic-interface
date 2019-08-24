import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export interface GlobalStyleProps {
    /** Current theme */
    theme?: {
        /** Background color on body */
        bodyBackgroundColor?: string;
    };
}
export declare const GlobalStyle: import("styled-components").GlobalStyleComponent<GlobalStyleProps, import("styled-components").DefaultTheme>;
declare class ThemeProvider extends React.Component {
    static defaultProps: Partial<GlobalStyleProps>;
    render(): JSX.Element;
}
export default ThemeProvider;
