import React from 'react';
import { Props } from './props';
declare class Query extends React.Component<Props> {
    static defaultProps: Partial<Props>;
    componentDidMount(): Promise<void>;
    fetch: () => Promise<void>;
    render(): JSX.Element;
}
export default Query;
