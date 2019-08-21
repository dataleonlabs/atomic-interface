import { QueryProps } from "../../utils/Query/props";
/**
 * This component using garden.zendesk https://garden.zendesk.com/react-components/tables
 * @example
 * <Table>
 *    <Column field="id">Id</Column>
 *    <Column field="name">Product Name</Column>
 * </Table>
 */
export interface Values {
    /** Width column */
    [column: string]: JSX.Element | string | number | boolean | string[] | number[] | boolean[] | object | object[] | Values;
}
export interface TableColumnProps {
    /** Label field */
    label?: string;
    /** Width column */
    field: 'name' | 'email' | 'description' | 'email ' | string;
    /** Width column */
    width?: number;
    formatter?: (cell: string, row: any) => JSX.Element;
    /** Header name */
    children?: string | JSX.Element;
    /** Sortable table display */
    sortable?: boolean;
}
export interface TableProps {
    /** data rows */
    data?: Values[];
    /** Display in table */
    children: JSX.Element | JSX.Element[];
    striped?: boolean;
    rowSize?: 'default' | 'small' | 'large';
    /** Display or hide the selected column */
    selectable?: boolean;
    /** Display or hide the selected column */
    onSelected?: (rows: string[]) => void;
    /** Selected item */
    disabledSelected?: string[] | number[];
    /** Sortable table display */
    sortable?: boolean;
    /** onSorted event */
    onSorted?: (params: {
        direction: string;
        field: string;
    }) => void;
    scrollable?: number;
    /** display the header or not */
    hideHeader?: boolean;
    /** data rows */
    loading?: boolean;
    /** Add drag and drop feature */
    draggable?: boolean;
    /** Drag end event */
    onDragEnd?: (values: Values[]) => void;
    /** noDataIndication */
    noDataIndication?: JSX.Element | string;
    pagination?: false | {
        /** Current page */
        currentPage?: number;
        /** Total element in databases */
        total?: number;
        /** Trigger when table change */
        onChange?: (page: number) => void;
    };
    /** no content indication */
    noContentIndication?: string;
}
export interface TableCollectionProps extends TableProps, QueryProps {
    children: any | undefined;
}
