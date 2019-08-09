var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { CustomInput } from 'reactstrap';
import Loader from './loader';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DraggableRow, DraggableCell, DraggableContainer, StyledNoContent, StyledRow, StyledHeaderRow, } from './style';
/**
 * Include tables styling at the root of your application
 */
import '@zendeskgarden/react-tables/dist/styles.css';
import '@zendeskgarden/react-pagination/dist/styles.css';
const { Table: TableBase, Head, HeaderRow, HeaderCell, SortableCell, Body, Cell } = require('@zendeskgarden/react-tables');
const { Pagination } = require('@zendeskgarden/react-pagination');
const { ThemeProvider } = require('@zendeskgarden/react-theming');
/**
 * Table
 */
class Table extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            items: [],
            selected: {},
            sortDirection: 'asc',
            sortField: ''
        };
        /**
         * Ordering array
         */
        /* istanbul ignore next */
        this.reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            return result;
        };
        /**
         * Get defautt value
         */
        /* istanbul ignore next */
        this.getDefaultWidth = () => {
            let defaultWidth = 100;
            if (this.props.selectable === true) {
                defaultWidth -= 4;
            }
            if (Array.isArray(this.props.children)) {
                defaultWidth = (100 / (this.props.children.length));
            }
            return defaultWidth;
        };
        /**
         * wrap for drag and drop
         * @param component
         * @param props
         */
        this.wrapperSortable = (component, child) => {
            if ((this.props.sortable === true) && (child.props.sortable !== false)) {
                const onClick = () => {
                    if (this.state.sortField !== child.props.field) {
                        return this.setState({ sortDirection: 'desc', sortField: child.props.field });
                    }
                    const { sortDirection } = this.state;
                    if (sortDirection === 'asc') {
                        this.setState({ sortDirection: 'desc', sortField: child.props.field });
                    }
                    else {
                        this.setState({ sortDirection: 'asc', sortField: child.props.field });
                    }
                    if (typeof this.props.onSorted === 'function') {
                        this.props.onSorted({ direction: sortDirection, field: child.props.field });
                    }
                };
                return (React.createElement(SortableCell, Object.assign({ scope: "col", key: child.props.field, minimum: true }, child.props, { width: `${(child.props.width || this.getDefaultWidth())}%`, onClick: onClick, sort: (this.state.sortField === child.props.field) ?
                        this.state.sortDirection : 'asc' }), child.props.children || /* istanbul ignore next */ child.props.field));
            }
            return component;
        };
        /* istanbul ignore next */
        this.onDragEnd = (result) => {
            if (!result.destination) {
                return;
            }
            const items = this.reorder(this.state.items, result.source.index, result.destination.index);
            this.setState({
                items
            }, () => {
                const elt = document.getElementById(result.draggableId);
                if (elt) {
                    elt.focus();
                }
                if (typeof this.props.onDragEnd === 'function') {
                    this.props.onDragEnd(items);
                }
            });
        };
        /**
         * Render columns
         */
        this.colonns = () => {
            const columns = [];
            if (this.props.draggable === true) {
                columns.push(React.createElement(HeaderCell, { minimum: true, key: 'key-col-0' }));
            }
            // If selected row
            if (this.props.selectable === true) {
                const onChange = /* istanbul ignore next */ (e) => {
                    if (e.target.checked) {
                        const selected = this.props.data.reduce((accum, value) => {
                            const disabledSelected = (this.props.disabledSelected || []);
                            if (disabledSelected.includes(value.id) === false) {
                                accum[value.id] = true;
                            }
                            else {
                                accum[value.id] = false;
                            }
                            return accum;
                        }, {});
                        this.setState({ selected: Object(selected) });
                        if (typeof this.props.onSelected === 'function') {
                            this.props.onSelected(Object.keys(selected));
                            ;
                        }
                    }
                    else {
                        if (typeof this.props.onSelected === 'function') {
                            this.props.onSelected([]);
                            ;
                        }
                        this.setState({ selected: {} });
                    }
                };
                columns.push(React.createElement(HeaderCell, { width: `4%`, key: 'key-selc-0' },
                    React.createElement(CustomInput, { type: 'checkbox', id: 'id0', checked: this.isSelectAllChecked(this.state.selected, this.props.data), onChange: onChange })));
            }
            React.Children.map(this.props.children, (child) => {
                if (React.isValidElement(child)) {
                    const childProps = child.props;
                    if (childProps && childProps.field) {
                        const column = this.wrapperSortable(React.createElement(HeaderCell, Object.assign({ key: childProps.field, minimum: true }, childProps, { width: `${(childProps.width || this.getDefaultWidth())}%` }), childProps.children || /* istanbul ignore next */ childProps.field), child);
                        columns.push(column);
                    }
                }
            });
            return columns;
        };
        /**
         * Render cell
         */
        this.cells = (row) => {
            const cells = [];
            // If selected row
            if (this.props.selectable === true) {
                /* istanbul ignore next */
                const disabledSelected = (this.props.disabledSelected || []);
                const onChange = /* istanbul ignore next */ (e) => {
                    const selected = Object.assign({}, this.state.selected);
                    if (e.target.checked) {
                        selected[row.id] = true;
                    }
                    else {
                        delete selected[row.id];
                    }
                    if (typeof this.props.onSelected === 'function') {
                        this.props.onSelected(Object.keys(selected));
                        ;
                    }
                    this.setState({ selected });
                };
                cells.push(React.createElement(Cell, { width: `4%`, key: 'key-cell-0' },
                    React.createElement(CustomInput, { type: 'checkbox', disabled: disabledSelected.includes(row.id) === true ? true : /* istanbul ignore next */ false, id: row.id, checked: this.state.selected[row.id] ? /* istanbul ignore next */ true : false, onChange: onChange })));
            }
            React.Children.map(this.props.children, child => {
                if (React.isValidElement(child)) {
                    const childProps = child.props;
                    if (childProps && childProps.field) {
                        let cellValue = row[childProps.field];
                        // format cell value
                        if ((typeof childProps.formatter === 'function')) /* istanbul ignore next */ {
                            cellValue = childProps.formatter(cellValue, row);
                        }
                        const cell = (React.createElement(Cell, Object.assign({ key: childProps.field, truncate: true }, childProps, { width: `${(childProps.width || this.getDefaultWidth())}%` }), cellValue));
                        cells.push(cell);
                    }
                }
            });
            return cells;
        };
        /**
         * Render cell cellsDragable
         */
        this.cellsDragable = (row, snapshot, provided, index) => {
            const cells = [];
            cells.push(React.createElement(DraggableCell, { minimum: true, key: `dnd-cell-${index}` },
                React.createElement(DraggableContainer, Object.assign({ id: `dnd-${index}` }, provided.dragHandleProps), "::")));
            // If selected row
            if (this.props.selectable === true) {
                const disabledSelected = (this.props.disabledSelected || /* istanbul ignore next */ []);
                const onChange = /* istanbul ignore next */ (e) => {
                    const selected = Object.assign({}, this.state.selected);
                    if (e.target.checked) {
                        selected[row.id] = true;
                    }
                    else {
                        delete selected[row.id];
                    }
                    this.setState({ selected });
                };
                cells.push(React.createElement(DraggableCell, { key: 'key-drag-0', width: `4%`, isDragging: snapshot.isDragging },
                    React.createElement(CustomInput, { type: 'checkbox', disabled: disabledSelected.includes(row.id) === true ? /* istanbul ignore next */ true : false, id: row.id, checked: this.state.selected[row.id] ? /* istanbul ignore next */ true : false, onChange: onChange })));
            }
            React.Children.map(this.props.children, (child) => {
                if (React.isValidElement(child)) {
                    const childProps = child.props;
                    if (childProps && childProps.field) {
                        let cellValue = row[childProps.field];
                        // format cell value
                        if ((typeof childProps.formatter === 'function')) /* istanbul ignore next */ {
                            cellValue = childProps.formatter(cellValue, row);
                        }
                        const cell = (React.createElement(DraggableCell, Object.assign({ key: `dnd-cell-${index}-${childProps.field}`, truncate: true }, childProps, { isDragging: snapshot.isDragging, width: `${(childProps.width || this.getDefaultWidth())}%` }), cellValue));
                        cells.push(cell);
                    }
                }
            });
            return cells;
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.props.draggable === true) {
                this.setState({
                    items: this.props.data,
                });
            }
        });
    }
    /**
     * isSelectAllIndeterminate
     * @param selectedRows selected rows
     * @param rows  current rows
     */
    /* istanbul ignore next */
    isSelectAllIndeterminate(selectedRows, rows) {
        const numSelectedRows = Object.keys(selectedRows).length;
        return numSelectedRows > 0 && numSelectedRows < rows.length;
    }
    ;
    /**
     * isSelectAllChecked
     * @param selectedRows selected rows
     * @param rows  current rows
     */
    /* istanbul ignore next */
    isSelectAllChecked(selectedRows, rows) {
        return Object.keys(selectedRows).length === rows.length;
    }
    ;
    render() {
        let contentPagination = React.createElement(React.Fragment, null);
        // Disable pagination
        if (typeof this.props.pagination === 'object') {
            contentPagination = (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { height: 16 } }),
                React.createElement(Pagination, { totalPages: Math.floor((this.props.pagination.total /* istanbul ignore next */ || 0) / 10), currentPage: this.props.pagination.currentPage, onStateChange: this.props.pagination.onChange })));
        }
        if (this.props.draggable === true) {
            return (React.createElement(ThemeProvider, null,
                React.createElement(React.Fragment, null,
                    React.createElement(DragDropContext, { onDragEnd: this.onDragEnd },
                        React.createElement(TableBase, { scrollable: this.props.scrollable ? /* istanbul ignore next */ `${this.props.scrollable}px` : /* istanbul ignore next */ undefined, size: this.props.rowSize === 'default' ? /* istanbul ignore next */ undefined : this.props.rowSize },
                            (this.props.hideHeader !== true) && (React.createElement(Head, null,
                                React.createElement(HeaderRow, null, this.colonns()))),
                            (this.props.loading === true) ? React.createElement(Loader, null) : (React.createElement(Droppable, { droppableId: "droppable" }, (provided, droppableSnapshot) => {
                                return (React.createElement(Body, { ref: provided.innerRef, isDraggingOver: droppableSnapshot.isDraggingOver },
                                    this.state.items.map((item, index) => (React.createElement(Draggable, { key: item.id, draggableId: item.id, index: index }, (prov, snapshot) => (React.createElement(DraggableRow, Object.assign({ ref: prov.innerRef }, prov.draggableProps, { isDragging: snapshot.isDragging, isDraggingOver: droppableSnapshot.isDraggingOver, hovered: snapshot.isDragging, focused: droppableSnapshot.isDraggingOver ? /* istanbul ignore next */ snapshot.isDragging : undefined }, prov.draggableProps.style, prov.draggableProps),
                                        React.createElement(React.Fragment, null, this.cellsDragable(item, snapshot, prov, index))))))),
                                    provided.placeholder));
                            })))),
                    ((this.props.loading !== true) && (this.props.data.length === 0)) && (React.createElement(StyledNoContent, null, this.props.noContentIndication || 'Not found')),
                    contentPagination)));
        }
        return (React.createElement(ThemeProvider, null,
            React.createElement(React.Fragment, null,
                React.createElement(TableBase, { scrollable: this.props.scrollable ? /* istanbul ignore next */ `${this.props.scrollable}px` : undefined, size: this.props.rowSize === 'default' ? /* istanbul ignore next */ undefined : this.props.rowSize },
                    (this.props.hideHeader !== true) && (React.createElement(Head, null,
                        React.createElement(StyledHeaderRow, null, this.colonns()))),
                    (this.props.loading === true) ? React.createElement(Loader, null) : (React.createElement(Body, null, this.props.data.map((row, index) => (React.createElement(StyledRow, { key: index, selected: this.state.selected[row.id], striped: this.props.striped && index % 2 === 0 }, this.cells(row))))))),
                ((this.props.loading !== true) && (this.props.data.length === 0)) && (React.createElement(StyledNoContent, null, this.props.noContentIndication || 'Not found')),
                contentPagination)));
    }
}
Table.defaultProps = {
    disabledSelected: [],
    draggable: false,
    hideHeader: false,
    pagination: false,
    selectable: false,
    sortable: false,
    striped: false,
};
export default Table;
//# sourceMappingURL=index.js.map