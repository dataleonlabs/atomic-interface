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

  /** Width column */
  field: 'name' | 'email' | 'description' | 'email ' | string

  /** Width column */
  width?: number

  /* tslint:disable */
  formatter?: (cell: string, row: any) => JSX.Element
  /* tslint:enable */

  /** Header name */
  children: string | JSX.Element

  /** Sortable table display */
  sortable?: boolean
}

export interface TableProps {
  
  /** data rows */
  data: Values[]

  /** Display in table */
  children: JSX.Element | JSX.Element[]

  //Add striped css
  striped?: boolean

  //Add striped css
  rowSize?: 'default' | 'small' | 'large'

  /** Display or hide the selected column */
  selectable?: boolean

  /** Selected item */
  disabledSelected?: string[] | number[]

  /** Sortable table display */
  sortable?: boolean

  /* Scrollable tables can be enabled with the scrollable prop.
  This defines the height of the <Body> element. */
  scrollable?: number

  /** display the header or not */
  hideHeader?: boolean

  /** data rows */
  loading?: boolean

  /** Add drag and drop feature */
  draggable?: boolean

  /** noDataIndication */
  noDataIndication?: JSX.Element | string

  /* On select row value */
  onSelected?: (values: Values[], ids?: string[]) => void

  /** Trigger when table change */
  onChange?: (values: Values[]) => void
  
  /* Pagination */
  pagination?: boolean
}