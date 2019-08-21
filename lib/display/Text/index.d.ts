import * as React from 'react';
import { TextProps as Props } from './props';
export declare const truncate: (text: any, n?: number, isCapitalizeFirstLetter?: boolean) => any;
export declare const truncateMiddle: (fullStr: any, strLen: number, separator: string, isCapitalizeFirstLetter?: boolean) => any;
export declare const getText: (props: any) => any[];
/**
 * Text
 */
export default class Text extends React.Component<Props> {
    static defaultProps: Partial<Props>;
    render(): JSX.Element;
}
