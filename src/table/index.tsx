import React from 'react';
import { TableProps as Props, Values } from './props'
import { CustomInput } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
  DraggableRow,
  DraggableCell,
  DraggableContainer
} from './style'

/**
 * Include tables styling at the root of your application
 */
import '@zendeskgarden/react-tables/dist/styles.css';

const {
  Table: TableBase,
  Head,
  HeaderRow,
  HeaderCell,
  SortableCell,
  Body,
  Row,
  Cell
} = require('@zendeskgarden/react-tables');


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
    hideHeader: false,
    pagination: true,
    disabledSelected: [],
    selectable: false,
    sortable: false,
    striped: false,
    draggable: false,
  }

  state = {
    selected: {},
    items: [{
      id: 1,
      firstName: 'test',
      lastName: 'test',
    }, {
      id: 2,
      firstName: 'test2',
      lastName: 'test2',
      }, {
        id: 3,
        firstName: 'test2',
        lastName: 'test2',
      }, {
        id: 4,
        firstName: 'test2',
        lastName: 'test2',
      }],
    sortField: '',
    sortDirection: 'asc' as State['sortDirection']
  }

  async componentDidMount() {
    if (this.props.draggable === true) {
      this.setState({
        items: this.props.data,
      })
    }
  }

  /**
   * Ordering array
   */
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
  public isSelectAllIndeterminate (selectedRows: State['selected'], rows: Values[]) {
    const numSelectedRows = Object.keys(selectedRows).length;
    return numSelectedRows > 0 && numSelectedRows < rows.length;
  };

  /**
  * isSelectAllChecked
  * @param selectedRows selected rows
  * @param rows  current rows
  */
  public isSelectAllChecked (selectedRows: State['selected'], rows: Values[]) {
    return Object.keys(selectedRows).length === rows.length;
  };

  /**
   * Get defautt value
   */
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
  wrapperSortable = (component: JSX.Element, child: any) => {
    if ((this.props.sortable === true) && (child.props.sortable !== false)) {
      return (
        <SortableCell
            scope="col"
            key={child.props.field}
            minimum {...child.props}
            width={`${(child.props.width || this.getDefaultWidth())}%`}
            onClick={() => {

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
            }}
            sort={
              (this.state.sortField === child.props.field) ?
              this.state.sortDirection : 'asc'
            }
          >
          {child.props.children || child.props.field}
        </SortableCell>
      )
    }
    return component;
  }

  onDragEnd = (result: any) => {
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
  private colonns = () => {
    const columns: JSX.Element[] = [];

    if (this.props.draggable === true) {
      columns.push(
        <HeaderCell minimum key={'key-col-0'} />
      )
    }
    // If selected row
    if (this.props.selectable === true) {
      columns.push(
        <HeaderCell width={`4%`}>
          <CustomInput
            type={'checkbox'}
            id={'id0'}
            checked={this.isSelectAllChecked(this.state.selected, this.props.data)}
            onChange={(e: any) => {
              if (e.target.checked) {
                const selected = this.props.data.reduce((accum, value) => {
                  if ((this.props.disabledSelected || []).indexOf(value.id as any) === -1) {
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
            }}
          />
        </HeaderCell>
      )
    }



    React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        if (child.props && child.props.field) {
          const column = this.wrapperSortable(
            <HeaderCell key={child.props.field} minimum {...child.props} width={`${(child.props.width || this.getDefaultWidth())}%`}>
                {child.props.children || child.props.field}
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
  private cells = (row: any) => {
    const cells: JSX.Element[] = [];

    // If selected row
    if (this.props.selectable === true) {
      cells.push(
        <Cell width={`4%`}>
          <CustomInput
            type={'checkbox'}
            disabled={(this.props.disabledSelected || []).indexOf(row.id) > -1 ? true : false}
            id={row.id}
            checked={this.state.selected[row.id] ? true : false}
            onChange={(e: any) => {
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
            }}
          />
        </Cell>
      )
    }

    React.Children.map(this.props.children, child => {
      if (React.isValidElement(child)) {
        if (child.props && child.props.field) {
          let cellValue = row[child.props.field];
          
          // format cell value
          if ((typeof child.props.formatter === 'function')) {
            cellValue = child.props.formatter(cellValue, row);
          }

          const cell = (
            <Cell key={child.props.field} truncate {...child.props} width={`${(child.props.width || this.getDefaultWidth())}%`}>
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
   * Render cell
   */
  private cellsDragable = (row: any, snapshot: any, provided: any, index: number) => {
    const cells: JSX.Element[] = [];

    cells.push(
      <DraggableCell minimum key={`dnd-cell-${index}`}>
        <DraggableContainer id={`dnd-${index}`} {...provided.dragHandleProps}>
          ::
          </DraggableContainer>
      </DraggableCell>
    )

    // If selected row
    if (this.props.selectable === true) {
      cells.push(
        <DraggableCell width={`4%`} isDragging={snapshot.isDragging}>
          <CustomInput
            type={'checkbox'}
            disabled={(this.props.disabledSelected || []).indexOf(row.id) > -1 ? true : false}
            id={row.id}
            checked={this.state.selected[row.id] ? true : false}
            onChange={(e: any) => {
              const selected = Object.assign({}, this.state.selected);

              if (e.target.checked) {
                selected[row.id] = true;
              } else {
                delete selected[row.id];
              }

              this.setState({ selected });
            }}
          />
        </DraggableCell>
      )
    }

    React.Children.map(this.props.children, child => {
      if (React.isValidElement(child)) {
        if (child.props && child.props.field) {
          let cellValue = row[child.props.field];

          // format cell value
          if ((typeof child.props.formatter === 'function')) {
            cellValue = child.props.formatter(cellValue, row);
          }

          const cell = (
            <DraggableCell key={`dnd-cell-${index}-${child.props.field}`} truncate {...child.props} isDragging={snapshot.isDragging} width={`${(child.props.width || this.getDefaultWidth())}%`}>
              {cellValue}
            </DraggableCell>
          );
          cells.push(cell);
        }
      }
    });

    return cells;
  }

  render() {
    if (this.props.draggable === true) {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <TableBase scrollable={this.props.scrollable ? `${this.props.scrollable}px` : undefined} size={this.props.rowSize === 'default' ? undefined : this.props.rowSize}>
            {(this.props.hideHeader !== true) && (
              <Head>
                <HeaderRow>
                  {this.colonns()}
                </HeaderRow>
              </Head>
            )}
            <Droppable droppableId="droppable">
              {(provided: any, droppableSnapshot: any) => {
                return (
                  <Body ref={provided.innerRef} isDraggingOver={droppableSnapshot.isDraggingOver}>
                    {this.state.items.map((item: any, index: any) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided: any, snapshot: any) => (
                          <DraggableRow
                            ref={provided.innerRef}
                            {...provided.draggableProps}

                            isDragging={snapshot.isDragging}
                            isDraggingOver={droppableSnapshot.isDraggingOver}
                            hovered={snapshot.isDragging}
                            focused={
                              droppableSnapshot.isDraggingOver ? snapshot.isDragging : undefined
                            }
                            {...provided.draggableProps.style}
                            {...provided.draggableProps}
                          >
                            <>
                              {this.cellsDragable(item, snapshot, provided, index)}
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
      );      
    }


    return (
      <TableBase scrollable={this.props.scrollable ? `${this.props.scrollable}px`: undefined} size={this.props.rowSize === 'default' ? undefined : this.props.rowSize}>
          {(this.props.hideHeader !== true) && (
            <Head>
              <HeaderRow>
                {this.colonns()}
              </HeaderRow>
            </Head>
          )}
          <Body>
            {this.props.data.map((row: any, index) => (
              <Row key={index} selected={this.state.selected[row.id]} striped={this.props.striped && index % 2 === 0}>
                {this.cells(row)}
              </Row>
            ))}
          </Body>
        </TableBase>
    );
  }
}

export default Table;