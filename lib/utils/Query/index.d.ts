import React from 'react';
import { Props, Stats } from './props';
declare class Query extends React.Component<Props, Stats> {
    static defaultProps: Partial<Props>;
    state: {
        contentRendered: null;
        onRendering: boolean;
    };
    componentDidMount(): Promise<void>;
    fetch: () => Promise<void>;
    render(): JSX.Element | null;
}
export default Query;
