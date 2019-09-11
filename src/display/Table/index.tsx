import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { TableProps as Props } from './props'
import { StyledTable } from "./style";
import {
  Grid,
  VirtualTable as TableBase,
  TableHeaderRow,
  PagingPanel,
  TableSelection,
  DragDropProvider,
  TableColumnResizing,
  TableColumnVisibility,
  TableColumnReordering,
  TableFixedColumns,
  Toolbar,
  ColumnChooser,
  SearchPanel,
  TableBandHeader,
} from '@devexpress/dx-react-grid-bootstrap4';

import {
  Column,
  TableColumnWidthInfo,
  SortingState,
  IntegratedSorting,
  Sorting,
  IntegratedPaging,
  PagingState,
  IntegratedSelection,
  SelectionState,
  VirtualTableState,
  SearchState
} from "@devexpress/dx-react-grid";
import { ArrowUp, ArrowDown } from "react-feather";
import TableAdvanced from "./TableAdvanced";


const TableComponent = ({ ...restProps }) => (
  <TableBase.Table
    {...restProps}
    className="table-striped"
  />
);

export interface State {

  /** Selected item */
  selected: any[]

  /** sort field */
  sortField: string

  /** sort type */
  sortDirection: 'asc' | 'desc'
}


/**
 * Table
 */
class Table extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    data: [],
    disabledSelected: [],
    draggable: false,
    hideHeader: false,
    pagination: false,
    selectable: false,
    sortable: false,
    striped: false,
    loading: false,
    fixedLeftColumns: [],
    fixedRightColumns: [],
    selectByRowClick: false,
    showToolbar: true,
    showSelectAll: true
  }

  public state = {
    selected: [],
    sortDirection: this.props.orderWay || 'asc' as State['sortDirection'],
    sortField: this.props.orderBy||''
  }

  /**
   * Render columns
   */
  public columns = () => {
    const columns: Column[] = [];
    React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as any;
        if (childProps && childProps.field) {
          columns.push({
            title: childProps.children,
            name: childProps.field,
          });
        }
      }
    });
    return columns;
  }

	/**
  * Render tableColumnExtensions
  */
  public tableColumnExtensions = () => {
    const columns: TableColumnWidthInfo[] = [];
    React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as any;
        if (childProps && childProps.field) {
          columns.push({
            columnName: childProps.field,
            ...childProps,
          });
        }
      }
    });
    return columns;
  }

  /* istanbul ignore next */
  public SortingIcon = ({ direction }: any) /* istanbul ignore next */ => {
    return (
      <span style={{ paddingLeft: '5px' }}>
        {direction === 'asc' ? <ArrowUp size={17} /> : <ArrowDown size={17} />}
      </span>
    )
  };

  /* istanbul ignore next */
  public SortLabel = ({ onSort, children, direction }: any) /* istanbul ignore next */ => (
    <div onClick={onSort} style={{ cursor: 'pointer' }} className={`${direction ? /* istanbul ignore next */ 'text-primary' :/* istanbul ignore next */  ''}`}>
      {children}
      {(direction && /* istanbul ignore next */ this.SortingIcon({ direction }))}
    </div>
  );

  /* istanbul ignore next */
  public Toolbar = ({ children }: any) /* istanbul ignore next */ => (
    <div className="card-header py-2 d-flex position-relative dx-g-bs4-toolbar">
      {children}
      {this.props.toolbarComponent && <div className="Toolbar-custom">
        {this.props.toolbarComponent}
      </div>}
    </div>
  );

  /**
   * Render cell
   */
  public rows = () => {
    const rows: any[] = [];

    (this.props.data || /* istanbul ignore next  */[]).map((row: any) => {

      let counter = 0;
      React.Children.map(this.props.children, child => {
        if (React.isValidElement(child)) {
          counter++;
        }
      });

      React.Children.map(this.props.children, (child: any, index: number) => {
        if (React.isValidElement(child)) {
          const childProps = child.props as any;
          if (childProps && childProps.field) {
            let cellValue = row[childProps.field];

            // format cell value
            if ((typeof childProps.formatter === 'function') && (typeof row[childProps.field] === 'string')) /* istanbul ignore next */ {
              cellValue = childProps.formatter(cellValue, row);
            }

            row[childProps.field] = cellValue;
            if (counter === (index + 1)) {
              rows.push(row);
            }
          }
        }
      });
    })

    return rows;
  }

  /* istanbul ignore next */
  public onSortingChange = (sorting: Sorting[]) /* istanbul ignore next */ => {
    /* istanbul ignore next */
    if (typeof this.props.onSorted === 'function') /* istanbul ignore next */ {
      this.props.onSorted({
        direction: sorting[0].direction,
        field: sorting[0].columnName
      });
    }

    /* istanbul ignore next */
    this.setState({
      sortDirection: sorting[0].direction,
      sortField: sorting[0].columnName,
    });
  }

  /* istanbul ignore next */
  public setSelection = (items: any[]) /* istanbul ignore next */ => {
    /* istanbul ignore next */
    if (typeof this.props.onSelected === 'function') /* istanbul ignore next */ {
      const ids: string[] = [];
      (items || /* istanbul ignore next  */[]).map((index: number) => {
        ids.push((this.props.data || [])[index][this.props.id || 'id'] as string);
      })
      this.props.onSelected(ids);
    }
    this.setState({ selected: items });
  }

  /* istanbul ignore next */
  public getRemoteRows = () => /* istanbul ignore next */ {
    //
  }

  public render() {

    if (this.props.draggable === true) {
      return (
        <TableAdvanced {...this.props} />
      )
    }

    const columnExtensions = this.tableColumnExtensions();
    const columnNamesExtensions = columnExtensions.map(v => v.columnName);
    return (
      <StyledTable hideHeader={this.props.hideHeader}>
        <Grid
          rows={this.props.loading ? [] : this.rows()}
          columns={this.columns()}
        >
          {this.props.sortable && /* istanbul ignore next */ <SortingState
            defaultSorting={[{ columnName: columnExtensions[0].columnName, direction: 'asc' }]}
            sorting={[{ columnName: this.state.sortField, direction: this.state.sortDirection }]}
            onSortingChange={this.onSortingChange}
          />}
          {this.props.sortable && /* istanbul ignore next */ <IntegratedSorting />}

          {this.props.pagination && /* istanbul ignore next */ <PagingState
            currentPage={this.props.pagination.currentPage || /* istanbul ignore next */  0}
            onCurrentPageChange={this.props.pagination.onChange}
            pageSize={this.props.pagination.pageSize}
            onPageSizeChange={this.props.pagination.onSizeChange}
          />}
          {this.props.pagination && /* istanbul ignore next */ <IntegratedPaging />}

          {this.props.selectable && /* istanbul ignore next */ <SelectionState
            selection={this.state.selected}
            onSelectionChange={this.setSelection}
          />}
          {this.props.selectable && /* istanbul ignore next */ <IntegratedSelection />}

          {this.props.columnOrdering && /* istanbul ignore next */ <DragDropProvider />}

          {this.props.loading && <VirtualTableState
            loading={this.props.loading}
            totalRowCount={9}
            pageSize={9}
            skip={9}
            getRows={this.getRemoteRows}
            infiniteScrolling={false}
          />}

          {this.props.searchable && /* istanbul ignore next */ <SearchState
            onValueChange={this.props.onSearch}
          />}

          {this.props.striped ?
            <TableBase tableComponent={TableComponent} columnExtensions={columnExtensions} />
            :
            <TableBase columnExtensions={columnExtensions} />
          }

          {this.props.columnResizing && /* istanbul ignore next */ <TableColumnResizing
            columnWidths={columnExtensions}
            onColumnWidthsChange={this.props.onColumnResizing}
          />}

          {this.props.columnOrdering && /* istanbul ignore next */ <TableColumnReordering
            defaultOrder={this.props.columnOrdering.length === 0 ? columnNamesExtensions : this.props.columnOrdering}
            onOrderChange={this.props.onColumnOrdering}
          />}

          <TableHeaderRow
            showSortingControls={this.props.sortable === true}
            sortLabelComponent={this.SortLabel}
          />

          {this.props.hiddenColumnNames && /* istanbul ignore next */ <TableColumnVisibility
            hiddenColumnNames={this.props.hiddenColumnNames}
            onHiddenColumnNamesChange={this.props.onHiddenColumnNamesChange}
            columnExtensions={columnNamesExtensions as any}
          />}

          {this.props.pagination && /* istanbul ignore next */ <PagingPanel pageSizes={this.props.pagination.pageSizes || [10, 30, 100]} />}
          {this.props.selectable && /* istanbul ignore next */ <TableSelection
            selectByRowClick={this.props.selectByRowClick}
            showSelectAll={this.props.showSelectAll}
            highlightRow={true}
          />}

          {this.props.columnBands && /* istanbul ignore next */ <TableBandHeader
            columnBands={this.props.columnBands}
          />}

          {(this.props.fixedLeftColumns || this.props.fixedRightColumns) && /* istanbul ignore next */ <TableFixedColumns
            leftColumns={this.props.fixedLeftColumns}
            rightColumns={this.props.fixedRightColumns}
          />}

          {this.props.showToolbar && (this.props.hiddenColumnNames || this.props.searchable) && /* istanbul ignore next */ <Toolbar rootComponent={this.Toolbar} />}
          {this.props.showToolbar && this.props.hiddenColumnNames && /* istanbul ignore next */ <ColumnChooser />}
          {this.props.showToolbar && this.props.searchable && /* istanbul ignore next */ <SearchPanel />}
        </Grid>
      </StyledTable>
    );
  }
}

export default Table;