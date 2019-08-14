import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { TableProps as Props, Values } from './props';
/**
 * Include tables styling at the root of your application
 */
import '@zendeskgarden/react-tables/dist/styles.css';
import '@zendeskgarden/react-pagination/dist/styles.css';
export interface State {
    /** Selected item */
    selected: {
        [key: string]: string;
    };
    items: any[];
    /** sort field */
    sortField: string;
    /** sort type */
    sortDirection: 'asc' | 'desc';
}
/**
 * Table
 */
declare class Table extends React.Component<Props, State> {
    static defaultProps: Partial<Props>;
    state: {
        items: never[];
        selected: {};
        sortDirection: "desc" | "asc";
        sortField: string;
    };
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: any): Promise<void>;
    /**
     * Ordering array
     */
    reorder: (list: any[], startIndex: number, endIndex: number) => any[];
    /**
     * isSelectAllIndeterminate
     * @param selectedRows selected rows
     * @param rows  current rows
     */
    isSelectAllIndeterminate(selectedRows: State['selected'], rows: Values[]): boolean;
    /**
     * isSelectAllChecked
     * @param selectedRows selected rows
     * @param rows  current rows
     */
    isSelectAllChecked(selectedRows: State['selected'], rows: Values[]): boolean;
    /**
     * Get defautt value
     */
    getDefaultWidth: () => number;
    /**
     * wrap for drag and drop
     * @param component
     * @param props
     */
    wrapperSortable: (component: JSX.Element, child: any) => JSX.Element;
    onDragEnd: (result: any) => void;
    /**
     * Render columns
     */
    colonns: () => JSX.Element[];
    /**
     * Render cell
     */
    cells: (row: any) => JSX.Element[];
    /**
     * Render cell cellsDragable
     */
    cellsDragable: (row: any, snapshot: any, provided: any, index: number) => JSX.Element[];
    render(): JSX.Element;
}
export default Table;
