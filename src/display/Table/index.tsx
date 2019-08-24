import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { TableProps as Props, Values } from './props'
import { CustomInput } from 'reactstrap';
import Loader from './loader';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
  DraggableRow,
  DraggableCell,
  DraggableContainer,
  StyledNoContent,
  StyledRow,
  StyledHeaderRow,
} from './style'

/**
 * Include tables styling at the root of your application
 */
import '@zendeskgarden/react-tables/dist/styles.css';
import '@zendeskgarden/react-pagination/dist/styles.css';
import { makeId } from "../../utils/index";

const {
  Table: TableBase,
  Head,
  HeaderRow,
  HeaderCell,
  SortableCell,
  Body,
  Cell
} = require('@zendeskgarden/react-tables');

const { Pagination } = require('@zendeskgarden/react-pagination');
const { ThemeProvider } = require('@zendeskgarden/react-theming');


export interface State {

  /** Selected item */
  selected: { [key: string]: string }

  items: any[]

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
  }

  public state = {
    items: [],
    selected: {},
    sortDirection: 'asc' as State['sortDirection'],
    sortField: ''
  }

  public async componentDidMount() {
    if (this.props.draggable === true) {
      this.setState({
        items: this.props.data || [],
      })
    }
  }

  public async componentDidUpdate(prevProps: any) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        items: this.props.data || [],
      })
    }
  }

  /**
   * Ordering array
   */
  /* istanbul ignore next */
  public reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * isSelectAllIndeterminate
   * @param selectedRows selected rows
   * @param rows  current rows
   */
  /* istanbul ignore next */
  public isSelectAllIndeterminate(selectedRows: State['selected'], rows: Values[]) {
    const numSelectedRows = Object.keys(selectedRows).length;
    return numSelectedRows > 0 && numSelectedRows < rows.length;
  };

  /**
   * isSelectAllChecked
   * @param selectedRows selected rows
   * @param rows  current rows
   */
  /* istanbul ignore next */
  public isSelectAllChecked(selectedRows: State['selected'], rows: Values[]) {
    return Object.keys(selectedRows).length === rows.length;
  };

  /**
   * Get defautt value
   */
  /* istanbul ignore next */
  public getDefaultWidth = () => {
    let defaultWidth = 100;
    if (this.props.selectable === true) {
      defaultWidth -= 4;
    }

    if (Array.isArray(this.props.children)) {
      defaultWidth = (100 / (this.props.children.length));
    }

    return defaultWidth;
  }

  /**
   * wrap for drag and drop
   * @param component 
   * @param props 
   */
  public wrapperSortable = (component: JSX.Element, child: any) /* istanbul ignore next */ => {
    /* istanbul ignore next  */
    if ((this.props.sortable === true) && (child.props.sortable !== false)) {
      const onClick = () => {

        if (this.state.sortField !== child.props.field) {
          return this.setState({ sortDirection: 'desc', sortField: child.props.field });
        }

        const { sortDirection } = this.state;
        if (sortDirection === 'asc') {
          this.setState({ sortDirection: 'desc', sortField: child.props.field });
        } else {
          this.setState({ sortDirection: 'asc', sortField: child.props.field });
        }

        if (typeof this.props.onSorted === 'function') {
          this.props.onSorted({ direction: sortDirection, field: child.props.field });
        }
      };

      return (
        <SortableCell
          scope="col"
          key={child.props.field}
          minimum={true} {...child.props}
          width={`${(child.props.width || this.getDefaultWidth())}%`}
          onClick={onClick}
          sort={
            (this.state.sortField === child.props.field) ?
              this.state.sortDirection : 'asc'
          }
        >
          {child.props.children || /* istanbul ignore next */ child.props.field}
        </SortableCell>
      )
    }
    return component;
  }

  /* istanbul ignore next */
  public onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = this.reorder(this.state.items, result.source.index, result.destination.index);
    this.setState(
      {
        items
      },
      () => {
        const elt = document.getElementById(result.draggableId);
        if (elt) {
          elt.focus();
        }

        if (typeof this.props.onDragEnd === 'function') {
          this.props.onDragEnd(items);
        }
      }
    );
  }


  /**
   * Render columns
   */
  public colonns = () => {
    const columns: JSX.Element[] = [];

    if (this.props.draggable === true) {
      columns.push(
        <HeaderCell minimum={true} key={`key-col-0-${makeId()}`} />
      )
    }
    // If selected row
    if (this.props.selectable === true) {
      const onChange = /* istanbul ignore next */ (e: any): any => {
        if (e.target.checked) {
          const selected = (this.props.data || []).reduce((accum, value) => {
            const disabledSelected = (this.props.disabledSelected || []) as any[];
            if (disabledSelected.includes(value.id as any) === false) {
              accum[value.id as string] = true;
            } else {
              accum[value.id as string] = false;
            }
            return accum;
          }, {}) as Values;

          this.setState({ selected: Object(selected) });
          if (typeof this.props.onSelected === 'function') {
            this.props.onSelected(Object.keys(selected));;
          }
        } else {
          if (typeof this.props.onSelected === 'function') {
            this.props.onSelected([]);;
          }

          this.setState({ selected: {} });
        }
      }
      columns.push(
        <HeaderCell width={`4%`} key={`key-selc-0-${makeId()}`}>
          <CustomInput
            type={'checkbox'}
            id={'id0'}
            checked={this.isSelectAllChecked(this.state.selected, this.props.data || [])}
            onChange={onChange}
          />
        </HeaderCell>
      )
    }



    React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as any;
        if (childProps && childProps.field) {
          const column = this.wrapperSortable(
            <HeaderCell key={childProps.field} minimum={true} {...childProps} width={`${(childProps.width || this.getDefaultWidth())}%`}>
              {childProps.children}
            </HeaderCell>
            , child);
          columns.push(column);
        }
      }
    });

    return columns;
  }

  /**
   * Render cell
   */
  public cells = (row: any) => {
    const cells: JSX.Element[] = [];

    // If selected row
    if (this.props.selectable === true) {
      /* istanbul ignore next */
      const disabledSelected = (this.props.disabledSelected || []) as any[];
      const onChange = /* istanbul ignore next */ (e: any) => {
        const selected = Object.assign({}, this.state.selected);

        if (e.target.checked) {
          selected[row.id] = true;
        } else {
          delete selected[row.id];
        }

        if (typeof this.props.onSelected === 'function') {
          this.props.onSelected(Object.keys(selected));;
        }
        this.setState({ selected });
      }
      cells.push(
        <Cell width={`4%`} key={`key-cell-0-${makeId()}`}>
          <CustomInput
            type={'checkbox'}
            disabled={disabledSelected.includes(row.id) === true ? true : /* istanbul ignore next */ false}
            id={row.id}
            checked={this.state.selected[row.id] ? /* istanbul ignore next */ true : false}
            onChange={onChange}
          />
        </Cell>
      )
    }

    React.Children.map(this.props.children, child => {
      if (React.isValidElement(child)) {
        const childProps = child.props as any;
        if (childProps && childProps.field) {
          let cellValue = row[childProps.field];

          // format cell value
          if ((typeof childProps.formatter === 'function')) /* istanbul ignore next */ {
            cellValue = childProps.formatter(cellValue, row);
          }

          const cell = (
            <Cell key={childProps.field} truncate={true} {...childProps} width={`${(childProps.width || this.getDefaultWidth())}%`}>
              {cellValue}
            </Cell>
          );
          cells.push(cell);
        }
      }
    });

    return cells;
  }

  /**
   * Render cell cellsDragable
   */
  public cellsDragable = (row: any, snapshot: any, provided: any, index: number) => {
    const cells: JSX.Element[] = [];

    cells.push(
      <DraggableCell minimum={true} key={`dnd-cell-${index}-${makeId()}`}>
        <DraggableContainer id={`dnd-${index}-${makeId()}`} {...provided.dragHandleProps}>
          ::
          </DraggableContainer>
      </DraggableCell>
    )

    // If selected row
    if (this.props.selectable === true) {
      const disabledSelected = (this.props.disabledSelected || /* istanbul ignore next */[]) as any[];
      const onChange = /* istanbul ignore next */ (e: any) => {
        const selected = Object.assign({}, this.state.selected);

        if (e.target.checked) {
          selected[row.id] = true;
        } else {
          delete selected[row.id];
        }

        this.setState({ selected });
      };
      cells.push(
        <DraggableCell key={`key-drag-0-${makeId()}`} width={`4%`} isDragging={snapshot.isDragging}>
          <CustomInput
            type={'checkbox'}
            disabled={disabledSelected.includes(row.id) === true ? /* istanbul ignore next */ true : false}
            id={row.id}
            checked={this.state.selected[row.id] ? /* istanbul ignore next */ true : false}
            onChange={onChange}
          />
        </DraggableCell>
      )
    }

    React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as any;
        if (childProps && childProps.field) {
          let cellValue = row[childProps.field];

          // format cell value
          if ((typeof childProps.formatter === 'function')) /* istanbul ignore next */ {
            cellValue = childProps.formatter(cellValue, row);
          }

          const cell = (
            <DraggableCell key={`dnd-cell-${index}-${childProps.field}-${makeId()}`} truncate={true} {...childProps} isDragging={snapshot.isDragging} width={`${(childProps.width || this.getDefaultWidth())}%`}>
              {cellValue}
            </DraggableCell>
          );
          cells.push(cell);
        }
      }
    });

    return cells;
  }

  public render() {
    let contentPagination = <></>;

    // Disable pagination
    if (typeof this.props.pagination === 'object') {
      contentPagination = (
        <>
          <div style={{ height: 16 }} />
          <Pagination
            totalPages={Math.floor((this.props.pagination.total /* istanbul ignore next */ || 0) / 10)}
            currentPage={this.props.pagination.currentPage}
            onStateChange={this.props.pagination.onChange}
          />
        </>
      )
    }

    if (this.props.loading === true) {
      return (
        <>
          {(this.props.hideHeader !== true) && (
            <Head>
              <StyledHeaderRow>
                {this.colonns()}
              </StyledHeaderRow>
            </Head>
          )}
          <Loader />
        </>
      )
    }

    if (this.props.draggable === true) {
      return (
        <ThemeProvider>
          <>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <TableBase scrollable={this.props.scrollable ? /* istanbul ignore next */ `${this.props.scrollable}px` : /* istanbul ignore next */ undefined} size={this.props.rowSize === 'default' ? /* istanbul ignore next */ undefined : this.props.rowSize}>
                {(this.props.hideHeader !== true) && (
                  <Head>
                    <HeaderRow>
                      {this.colonns()}
                    </HeaderRow>
                  </Head>
                )}
                <Droppable droppableId={`droppable-${makeId()}`}>
                  {(provided: any, droppableSnapshot: any) => {
                    return (
                      <Body ref={provided.innerRef} isDraggingOver={droppableSnapshot.isDraggingOver}>
                        {this.state.items.map((item: any, index: any) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(prov: any, snapshot: any) => (
                              <DraggableRow
                                ref={prov.innerRef}
                                {...prov.draggableProps}

                                isDragging={snapshot.isDragging}
                                isDraggingOver={droppableSnapshot.isDraggingOver}
                                hovered={snapshot.isDragging}
                                focused={
                                  droppableSnapshot.isDraggingOver ? /* istanbul ignore next */ snapshot.isDragging : undefined
                                }
                                {...prov.draggableProps.style}
                                {...prov.draggableProps}
                              >
                                <>
                                  {this.cellsDragable(item, snapshot, prov, index)}
                                </>
                              </DraggableRow>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Body>
                    );
                  }}
                </Droppable>
              </TableBase>
            </DragDropContext>
            {(((this.props.data || /* istanbul ignore next  */ []).length === 0)) && (
              <StyledNoContent>{this.props.noContentIndication || 'Not found'}</StyledNoContent>
            )}
            {contentPagination}
          </>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider>
        <>
          <TableBase scrollable={this.props.scrollable ? /* istanbul ignore next */ `${this.props.scrollable}px` : undefined} size={this.props.rowSize === 'default' ? /* istanbul ignore next */ undefined : this.props.rowSize}>
            {(this.props.hideHeader !== true) && (
              <Head>
                <StyledHeaderRow>
                  {this.colonns()}
                </StyledHeaderRow>
              </Head>
            )}
            <Body>
              {(this.props.data || /* istanbul ignore next  */ []).map((row: any, index) => (
                <StyledRow key={index} selected={this.state.selected[row.id]} striped={this.props.striped && index % 2 === 0}>
                  {this.cells(row)}
                </StyledRow>
              ))}
            </Body>
          </TableBase>
          {(((this.props.data || /* istanbul ignore next  */ []).length === 0)) && (
            <StyledNoContent>{this.props.noContentIndication || 'Not found'}</StyledNoContent>
          )}
          {contentPagination}
        </>
      </ThemeProvider>
    );
  }
}

export default Table;