import React from 'react';
import { TableCollectionProps as Props } from './props';
declare class Collection extends React.Component<Props> {
    columns: () => any;
    render(): JSX.Element;
}
export default Collection;
