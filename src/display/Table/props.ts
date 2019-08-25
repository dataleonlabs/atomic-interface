import { QueryProps } from "../../utils/Query/props";
import { TableColumnWidthInfo } from "@devexpress/dx-react-grid";
import { PagingPanelProps } from "@devexpress/dx-react-grid-bootstrap4";

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
  [column: string]: JSX.Element | string | number | boolean | string[] | number[] | boolean[] | object | object[] | Values
}


export interface TableColumnProps {

  /** Label field */
  label?: string

  /** Width column */
  field: 'name' | 'email' | 'description' | 'email' | 'title' | string

  /** Width column */
  width?: number

  togglingEnabled?: boolean

  /* tslint:disable */
  formatter?: (cell: string, row: any) => JSX.Element
  /* tslint:enable */

  /** Header name */
  children?: string | JSX.Element

  /** Sortable table display */
  sortable?: boolean

  /** Allows you to specify the column alignment. */
  align?: 'left' | 'center' | 'right'

  /**
   * The Grid cuts off values that do not fit in a cell.
   * Set the column extensions’ wordWrapEnabled property 
   * to true to enable word wrap for these columns.
   */
  wordWrapEnabled?: boolean
}

export interface TableAdvancedColumnProps extends TableColumnProps {
}

export interface TableProps {
  
  // id
  id?: string

  /** data rows */
  data?: Values[]

  /** Display in table */
  children: JSX.Element | JSX.Element[]

  // Add striped css
  striped?: boolean

  /** Display or hide the selected column */
  selectable?: boolean

  /** Perform the following steps to enable the Select All capability */
  showSelectAll?: boolean

  /** Ordering item */
  columnOrdering?: string[]

  /** onColumnOrdering */
  onColumnOrdering?: (p: string[]) => void

  /** Resizing */
  columnResizing?: boolean;

  /** fixedLeftColumns */
  fixedLeftColumns?: string[]

  /** fixedRightColumns */
  fixedRightColumns?: string[]

  /** pass the column widths to the TableColumnResizing */
  onColumnResizing?: (columns: TableColumnWidthInfo[]) => void

  /** In controlled mode, pass the hidden column names to the */
  hiddenColumnNames?: string[]

  /** In controlled mode, pass the hidden column names to the */
  onHiddenColumnNames?: () => void

  /** Set the TableSelection plugin’s selectByRowClick property to true to check/uncheck a checkbox by a row click as demonstrated in the following example */
  selectByRowClick?: boolean;

  /** Display or hide the selected column */
  onSelected?: (rows: string[]) => void

  /** Selected item */
  disabledSelected?: string[] | number[]

  /** Sortable table display */
  sortable?: boolean

  /** onSorted event */
  onSorted?: (params: { direction: string, field: string }) => void

  /* Scrollable tables can be enabled with the scrollable prop.
  This defines the height of the <Body> element. */
  scrollable?: number

  /** display the header or not */
  hideHeader?: boolean

  /** loading */
  loading?: boolean

  /** Add for advanced */
  rowSize?: 'default' | 'small' | 'large'
  
  /* Pagination */
  pagination?: false | {

    /** Current page */
    currentPage?: number,

    /** Total element in databases */
    total?: number,

    /** Trigger when table change */
    onChange?: (page: number) => void

    pageSize?: number

    onSizeChange?: (size: number) => void

    /** pageSizes */
    pageSizes?: PagingPanelProps['pageSizes']
  }

  /** no content indication */
  noContentIndication?: JSX.Element | string

  /** Add drag and drop feature */
  draggable?: boolean

  /** Drag end event */
  onDragEnd?: (values: Values[]) => void

  /** see toolbar */
  showToolbar?: boolean

  /** Search element */
  searchable?: boolean

  onSearch?: (value: string) => void

}

export interface TableCollectionProps extends TableProps, QueryProps {
  children: any | undefined;
}