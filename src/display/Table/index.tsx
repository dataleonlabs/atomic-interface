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
	VirtualTableState
} from "@devexpress/dx-react-grid";

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
class TableAdvanced extends React.Component<Props, State> {

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
		showSelectAll: true
	}

	public state = {
		selected: [],
		sortDirection: 'asc' as State['sortDirection'],
		sortField: ''
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
						if ((typeof childProps.formatter === 'function')) /* istanbul ignore next */ {
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

	public onSortingChange = (sorting: Sorting[]) => {
		if (typeof this.props.onSorted === 'function') {
			this.props.onSorted({
				direction: sorting[0].direction,
				field: sorting[0].columnName
			});
		}

		this.setState({
			sortDirection: sorting[0].direction,
			sortField: sorting[0].columnName,
		});
	}

	public setSelection = (items: any[]) => {
		if (typeof this.props.onSelected === 'function') {
			const ids: string[] = [];
			(items || /* istanbul ignore next  */[]).map((index: number) => {
				ids.push((this.props.data || [])[index][this.props.id || 'id'] as string);
			})
			this.props.onSelected(ids);
		}
		this.setState({ selected: items });
	}

	public getRemoteRows = () => {
		//
	}

	public render() {
		const columnExtensions = this.tableColumnExtensions();
		return (
			<StyledTable hideHeader={this.props.hideHeader}>
				<Grid
					rows={this.props.loading ? [] : this.rows()}
					columns={this.columns()}
				>
					
					{this.props.sortable && <SortingState
						defaultSorting={[{ columnName: columnExtensions[0].columnName, direction: 'asc' }]}
						sorting={[{ columnName: this.state.sortField, direction: this.state.sortDirection }]}
						onSortingChange={this.onSortingChange}
					/>}
					{this.props.sortable && <IntegratedSorting />}

					{this.props.pagination && <PagingState
						currentPage={this.props.pagination.currentPage || 0}
						onCurrentPageChange={this.props.pagination.onChange}
						pageSize={this.props.pagination.pageSize}
						onPageSizeChange={this.props.pagination.onSizeChange}
					/>}
					{this.props.pagination && <IntegratedPaging />}

					{this.props.selectable && <SelectionState
						selection={this.state.selected}
						onSelectionChange={this.setSelection}
					/>}
					{this.props.selectable && <IntegratedSelection />}

					{this.props.columnOrdering && <DragDropProvider />}

					{this.props.loading && <VirtualTableState
						loading={this.props.loading}
						totalRowCount={9}
						pageSize={9}
						skip={9}
						getRows={this.getRemoteRows}
						infiniteScrolling={false}
					/>}
				
					{this.props.striped ?
						<TableBase tableComponent={TableComponent} columnExtensions={columnExtensions} />
						:
						<TableBase columnExtensions={columnExtensions} />
					}

					{this.props.columnResizing && <TableColumnResizing
						columnWidths={columnExtensions}
						onColumnWidthsChange={this.props.onColumnResizing}
					/>}

					{this.props.columnOrdering && <TableColumnReordering
						order={this.props.columnOrdering.length === 0 ? columnExtensions.map(v => v.columnName) : this.props.columnOrdering}
							onOrderChange={this.props.onColumnOrdering}
						/>}
					
					<TableHeaderRow
						showSortingControls={this.props.sortable === true}
					/>

					{this.props.hiddenColumnNames && <TableColumnVisibility
						hiddenColumnNames={this.props.hiddenColumnNames}
						onHiddenColumnNamesChange={this.props.onHiddenColumnNames}
					/>}

					{this.props.pagination && <PagingPanel pageSizes={this.props.pagination.pageSizes || [10, 30, 100]} />}
					{this.props.selectable && <TableSelection
						selectByRowClick={this.props.selectByRowClick}
						showSelectAll={this.props.showSelectAll}
						highlightRow={true}
					/>}

					{(this.props.fixedLeftColumns || this.props.fixedRightColumns) && <TableFixedColumns
						leftColumns={this.props.fixedLeftColumns}
						rightColumns={this.props.fixedRightColumns}
					/>}
					
				</Grid>
			</StyledTable>
		);
	}
}

export default TableAdvanced;