import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory from 'react-bootstrap-table2-filter'
import overlayFactory from 'react-bootstrap-table2-overlay'
import { TableProps as Props, Values } from './props'
import StyledTable from './style'
import { DragDropContext } from 'react-beautiful-dnd';

/**
 * wrap for drag and drop
 * @param component 
 * @param props 
 */
const wrapperDragAndDrop = (component: JSX.Element, props: Props) => {
  if (props.dragAndDrop === true) {

    const onBeforeDragStart = () => {
      /*...*/
    };

    const onDragStart = () => {
      /*...*/
    };
    const onDragUpdate = () => {
      /*...*/
    };
    const onDragEnd = () => {
      // the only one that is required
    };

    return (
      <DragDropContext
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        {component}
      </DragDropContext>
    )
  }
  return component;
}
export interface State {

  /** Selected item */
  selected: string[]

  // element selected
  elementSelected: Values[] | null
}

/**
 * Table
 */
class Table extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    hideHeader: false,
    pagination: true,
    selectable: false,
    dragAndDrop: false,
  }

  state = {
    selected: [],
    elementSelected: []
  }

  selectRow() {
    const hideSelectColumn =
      this.props.selectColumn === undefined ? false : !this.props.selectColumn
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: false,
      hideSelectColumn,
      selected: this.state.selected,
      onSelectAll: (isSelect: boolean, results: any[]) => {
        this.setState(
          {
            selected: isSelect === true ? results.map((el: any) => el.id, []) : [],
            elementSelected: isSelect === true ? results : [],
          },
          () => {
            if (typeof this.props.onSelected === 'function') {
              this.props.onSelected(this.state.elementSelected, this.state.selected)
            }
          },
        )
      },
      onSelect: (row: any) => {
        // We need to add the id rather than the object in the state.selected
        // so that react-bootstrap-tables can display the
        // selected lines or the unselected lines
        // We send the elementSelected to the onSelected so that it contains
        // the object
        const element: string = row.id;
        let index: number = -1;
        for (let i = 0; i < this.state.selected.length; i++) {
          if (this.state.selected[i] === element) {
            index = i;
            break;
          }
        }

        // If the selected line is not in the Editor then add them
        if (index === -1) {
          this.setState(
            {
              selected: [...this.state.selected, row.id],
              elementSelected: [...this.state.elementSelected, row],
            },
            () => {
              if (typeof this.props.onSelected === 'function') {
                this.props.onSelected(
                  this.state.elementSelected,
                  this.state.selected,
                )
              }
            },
          )
        } else {
          // If the selected line is in the Editor then remove them
          this.setState(
            {
              selected: this.state.selected.filter((el: any) => el !== row.id),
              elementSelected: this.state.elementSelected.filter(
                (el: any) => el.id !== row.id,
              ),
            },
            () => {
              if (typeof this.props.onSelected === 'function') {
                this.props.onSelected(
                  this.state.elementSelected,
                  this.state.selected,
                )
              }
            },
          )
        }
      },
    }

    return selectRow;
  }

  /**
   * Render columns
   */
  private colonns() {
    const columns: Values[] = [];
    React.Children.map(this.props.children, child => {
      if (React.isValidElement(child)) {
        if (child.props && child.props.field) {
          const cl = {
            ...child.props,
            dataField: child.props.field,
            text: child.props.children || child.props.field,
          };
          delete cl.children;
          delete cl.field;

          columns.push(cl);
        }
      }
    });

    return columns;
  }

  /**
   * Render columns
   */
  private pagination() {
    let paginationOptions: any = {
      page: 1,
    }
    if (this.props.pagination) {
      paginationOptions = {
        hideSizePerPage: true,
        alwaysShowAllBtns: true,
        nextPageText: 'Next',
        prePageText: 'Prev',
        sizePerPageList: [
          {
            value: 10,
          },
        ],
      }

      if (typeof this.props.pagination === 'object') {
        paginationOptions = { ...paginationOptions, ...this.props.pagination }
      }
    }

    return paginationOptions;
  }

  public render() {
    return (
      <StyledTable>
        {wrapperDragAndDrop(<BootstrapTable
          keyField='id'
          hover={true}
          bootstrap4={true}
          selectRow={this.selectRow()}
          data={this.props.data || []}
          columns={this.colonns()}
          noDataIndication={
            this.props.noDataIndication || 'Not found'
          }
          filter={filterFactory()}
          loading={this.props.loading || false}
          overlay={overlayFactory({
            spinner: true,
            spinnerSize: '40px',
            color: '#086ad8',
            background: 'rgba(192,192,192,0.3)',
          })}

          pagination={
            (!this.props.pagination || (this.props.data.length === 0))
              ? undefined
              : paginationFactory(this.pagination())
          }

          remote={{
            pagination: (!this.props.pagination || (this.props.data.length === 0 )) ? false : true,
            filter: true,
            sort: true,
          }}

          headerClasses={this.props.hideHeader ? 'HideHeader' : undefined}
          onTableChange={
            this.props.onChange === undefined
              ? undefined
              : this.props.onChange
          }
        />, this.props)}
      </StyledTable>
    )
  }
}

export default Table;