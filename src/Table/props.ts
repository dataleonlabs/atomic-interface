import React from 'react'


/**
 * This component using react-bootstrap-table 2 https://react-bootstrap-table.github.io/react-bootstrap-table2/
 * @example
 * <Table>
 *    <Column field="id">Id</Column>
 *    <Column field="name">Product Name</Column>
 * </Table>
 */

export interface TableColumnProps {
  /** Header name */
  children: string
}

export interface TableProps {

  /** Display in table */
  children: React.ReactNode[]
}