"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/stable");
require("regenerator-runtime/runtime");
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
var loader_1 = __importDefault(require("./loader"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var style_1 = require("./style");
/**
 * Include tables styling at the root of your application
 */
require("@zendeskgarden/react-tables/dist/styles.css");
require("@zendeskgarden/react-pagination/dist/styles.css");
var index_1 = require("../../utils/index");
var _a = require('@zendeskgarden/react-tables'), TableBase = _a.Table, Head = _a.Head, HeaderRow = _a.HeaderRow, HeaderCell = _a.HeaderCell, SortableCell = _a.SortableCell, Body = _a.Body, Cell = _a.Cell;
var Pagination = require('@zendeskgarden/react-pagination').Pagination;
var ThemeProvider = require('@zendeskgarden/react-theming').ThemeProvider;
/**
 * Table
 */
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: [],
            selected: {},
            sortDirection: 'asc',
            sortField: ''
        };
        /**
         * Ordering array
         */
        /* istanbul ignore next */
        _this.reorder = function (list, startIndex, endIndex) {
            var result = Array.from(list);
            var removed = result.splice(startIndex, 1)[0];
            result.splice(endIndex, 0, removed);
            return result;
        };
        /**
         * Get defautt value
         */
        /* istanbul ignore next */
        _this.getDefaultWidth = function () {
            var defaultWidth = 100;
            if (_this.props.selectable === true) {
                defaultWidth -= 4;
            }
            if (Array.isArray(_this.props.children)) {
                defaultWidth = (100 / (_this.props.children.length));
            }
            return defaultWidth;
        };
        /**
         * wrap for drag and drop
         * @param component
         * @param props
         */
        _this.wrapperSortable = function (component, child) {
            if ((_this.props.sortable === true) && (child.props.sortable !== false)) {
                var onClick = function () {
                    if (_this.state.sortField !== child.props.field) {
                        return _this.setState({ sortDirection: 'desc', sortField: child.props.field });
                    }
                    var sortDirection = _this.state.sortDirection;
                    if (sortDirection === 'asc') {
                        _this.setState({ sortDirection: 'desc', sortField: child.props.field });
                    }
                    else {
                        _this.setState({ sortDirection: 'asc', sortField: child.props.field });
                    }
                    if (typeof _this.props.onSorted === 'function') {
                        _this.props.onSorted({ direction: sortDirection, field: child.props.field });
                    }
                };
                return (react_1.default.createElement(SortableCell, __assign({ scope: "col", key: child.props.field, minimum: true }, child.props, { width: (child.props.width || _this.getDefaultWidth()) + "%", onClick: onClick, sort: (_this.state.sortField === child.props.field) ?
                        _this.state.sortDirection : 'asc' }), child.props.children || /* istanbul ignore next */ child.props.field));
            }
            return component;
        };
        /* istanbul ignore next */
        _this.onDragEnd = function (result) {
            if (!result.destination) {
                return;
            }
            var items = _this.reorder(_this.state.items, result.source.index, result.destination.index);
            _this.setState({
                items: items
            }, function () {
                var elt = document.getElementById(result.draggableId);
                if (elt) {
                    elt.focus();
                }
                if (typeof _this.props.onDragEnd === 'function') {
                    _this.props.onDragEnd(items);
                }
            });
        };
        /**
         * Render columns
         */
        _this.colonns = function () {
            var columns = [];
            if (_this.props.draggable === true) {
                columns.push(react_1.default.createElement(HeaderCell, { minimum: true, key: "key-col-0-" + index_1.makeId() }));
            }
            // If selected row
            if (_this.props.selectable === true) {
                var onChange = /* istanbul ignore next */ function (e) {
                    if (e.target.checked) {
                        var selected = (_this.props.data || []).reduce(function (accum, value) {
                            var disabledSelected = (_this.props.disabledSelected || []);
                            if (disabledSelected.includes(value.id) === false) {
                                accum[value.id] = true;
                            }
                            else {
                                accum[value.id] = false;
                            }
                            return accum;
                        }, {});
                        _this.setState({ selected: Object(selected) });
                        if (typeof _this.props.onSelected === 'function') {
                            _this.props.onSelected(Object.keys(selected));
                            ;
                        }
                    }
                    else {
                        if (typeof _this.props.onSelected === 'function') {
                            _this.props.onSelected([]);
                            ;
                        }
                        _this.setState({ selected: {} });
                    }
                };
                columns.push(react_1.default.createElement(HeaderCell, { width: "4%", key: "key-selc-0-" + index_1.makeId() },
                    react_1.default.createElement(reactstrap_1.CustomInput, { type: 'checkbox', id: 'id0', checked: _this.isSelectAllChecked(_this.state.selected, _this.props.data || []), onChange: onChange })));
            }
            react_1.default.Children.map(_this.props.children, function (child) {
                if (react_1.default.isValidElement(child)) {
                    var childProps = child.props;
                    if (childProps && childProps.field) {
                        var column = _this.wrapperSortable(react_1.default.createElement(HeaderCell, __assign({ key: childProps.field, minimum: true }, childProps, { width: (childProps.width || _this.getDefaultWidth()) + "%" }), childProps.children), child);
                        columns.push(column);
                    }
                }
            });
            return columns;
        };
        /**
         * Render cell
         */
        _this.cells = function (row) {
            var cells = [];
            // If selected row
            if (_this.props.selectable === true) {
                /* istanbul ignore next */
                var disabledSelected = (_this.props.disabledSelected || []);
                var onChange = /* istanbul ignore next */ function (e) {
                    var selected = Object.assign({}, _this.state.selected);
                    if (e.target.checked) {
                        selected[row.id] = true;
                    }
                    else {
                        delete selected[row.id];
                    }
                    if (typeof _this.props.onSelected === 'function') {
                        _this.props.onSelected(Object.keys(selected));
                        ;
                    }
                    _this.setState({ selected: selected });
                };
                cells.push(react_1.default.createElement(Cell, { width: "4%", key: "key-cell-0-" + index_1.makeId() },
                    react_1.default.createElement(reactstrap_1.CustomInput, { type: 'checkbox', disabled: disabledSelected.includes(row.id) === true ? true : /* istanbul ignore next */ false, id: row.id, checked: _this.state.selected[row.id] ? /* istanbul ignore next */ true : false, onChange: onChange })));
            }
            react_1.default.Children.map(_this.props.children, function (child) {
                if (react_1.default.isValidElement(child)) {
                    var childProps = child.props;
                    if (childProps && childProps.field) {
                        var cellValue = row[childProps.field];
                        // format cell value
                        if ((typeof childProps.formatter === 'function')) /* istanbul ignore next */ {
                            cellValue = childProps.formatter(cellValue, row);
                        }
                        var cell = (react_1.default.createElement(Cell, __assign({ key: childProps.field, truncate: true }, childProps, { width: (childProps.width || _this.getDefaultWidth()) + "%" }), cellValue));
                        cells.push(cell);
                    }
                }
            });
            return cells;
        };
        /**
         * Render cell cellsDragable
         */
        _this.cellsDragable = function (row, snapshot, provided, index) {
            var cells = [];
            cells.push(react_1.default.createElement(style_1.DraggableCell, { minimum: true, key: "dnd-cell-" + index + "-" + index_1.makeId() },
                react_1.default.createElement(style_1.DraggableContainer, __assign({ id: "dnd-" + index + "-" + index_1.makeId() }, provided.dragHandleProps), "::")));
            // If selected row
            if (_this.props.selectable === true) {
                var disabledSelected = (_this.props.disabledSelected || /* istanbul ignore next */ []);
                var onChange = /* istanbul ignore next */ function (e) {
                    var selected = Object.assign({}, _this.state.selected);
                    if (e.target.checked) {
                        selected[row.id] = true;
                    }
                    else {
                        delete selected[row.id];
                    }
                    _this.setState({ selected: selected });
                };
                cells.push(react_1.default.createElement(style_1.DraggableCell, { key: "key-drag-0-" + index_1.makeId(), width: "4%", isDragging: snapshot.isDragging },
                    react_1.default.createElement(reactstrap_1.CustomInput, { type: 'checkbox', disabled: disabledSelected.includes(row.id) === true ? /* istanbul ignore next */ true : false, id: row.id, checked: _this.state.selected[row.id] ? /* istanbul ignore next */ true : false, onChange: onChange })));
            }
            react_1.default.Children.map(_this.props.children, function (child) {
                if (react_1.default.isValidElement(child)) {
                    var childProps = child.props;
                    if (childProps && childProps.field) {
                        var cellValue = row[childProps.field];
                        // format cell value
                        if ((typeof childProps.formatter === 'function')) /* istanbul ignore next */ {
                            cellValue = childProps.formatter(cellValue, row);
                        }
                        var cell = (react_1.default.createElement(style_1.DraggableCell, __assign({ key: "dnd-cell-" + index + "-" + childProps.field + "-" + index_1.makeId(), truncate: true }, childProps, { isDragging: snapshot.isDragging, width: (childProps.width || _this.getDefaultWidth()) + "%" }), cellValue));
                        cells.push(cell);
                    }
                }
            });
            return cells;
        };
        return _this;
    }
    Table.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.props.draggable === true) {
                    this.setState({
                        items: this.props.data || [],
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    Table.prototype.componentDidUpdate = function (prevProps) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.props.draggable === true) {
                    if (this.props.data !== prevProps.data) {
                        this.setState({
                            items: this.props.data || [],
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * isSelectAllIndeterminate
     * @param selectedRows selected rows
     * @param rows  current rows
     */
    /* istanbul ignore next */
    Table.prototype.isSelectAllIndeterminate = function (selectedRows, rows) {
        var numSelectedRows = Object.keys(selectedRows).length;
        return numSelectedRows > 0 && numSelectedRows < rows.length;
    };
    ;
    /**
     * isSelectAllChecked
     * @param selectedRows selected rows
     * @param rows  current rows
     */
    /* istanbul ignore next */
    Table.prototype.isSelectAllChecked = function (selectedRows, rows) {
        return Object.keys(selectedRows).length === rows.length;
    };
    ;
    Table.prototype.render = function () {
        var _this = this;
        var contentPagination = react_1.default.createElement(react_1.default.Fragment, null);
        // Disable pagination
        if (typeof this.props.pagination === 'object') {
            contentPagination = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { style: { height: 16 } }),
                react_1.default.createElement(Pagination, { totalPages: Math.floor((this.props.pagination.total /* istanbul ignore next */ || 0) / 10), currentPage: this.props.pagination.currentPage, onStateChange: this.props.pagination.onChange })));
        }
        if (this.props.loading === true) {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                (this.props.hideHeader !== true) && (react_1.default.createElement(Head, null,
                    react_1.default.createElement(style_1.StyledHeaderRow, null, this.colonns()))),
                react_1.default.createElement(loader_1.default, null)));
        }
        if (this.props.draggable === true) {
            return (react_1.default.createElement(ThemeProvider, null,
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: this.onDragEnd },
                        react_1.default.createElement(TableBase, { scrollable: this.props.scrollable ? /* istanbul ignore next */ this.props.scrollable + "px" : /* istanbul ignore next */ undefined, size: this.props.rowSize === 'default' ? /* istanbul ignore next */ undefined : this.props.rowSize },
                            (this.props.hideHeader !== true) && (react_1.default.createElement(Head, null,
                                react_1.default.createElement(HeaderRow, null, this.colonns()))),
                            react_1.default.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable-" + index_1.makeId() }, function (provided, droppableSnapshot) {
                                return (react_1.default.createElement(Body, { ref: provided.innerRef, isDraggingOver: droppableSnapshot.isDraggingOver },
                                    _this.state.items.map(function (item, index) { return (react_1.default.createElement(react_beautiful_dnd_1.Draggable, { key: item.id, draggableId: item.id, index: index }, function (prov, snapshot) { return (react_1.default.createElement(style_1.DraggableRow, __assign({ ref: prov.innerRef }, prov.draggableProps, { isDragging: snapshot.isDragging, isDraggingOver: droppableSnapshot.isDraggingOver, hovered: snapshot.isDragging, focused: droppableSnapshot.isDraggingOver ? /* istanbul ignore next */ snapshot.isDragging : undefined }, prov.draggableProps.style, prov.draggableProps),
                                        react_1.default.createElement(react_1.default.Fragment, null, _this.cellsDragable(item, snapshot, prov, index)))); })); }),
                                    provided.placeholder));
                            }))),
                    (((this.props.data || []).length === 0)) && (react_1.default.createElement(style_1.StyledNoContent, null, this.props.noContentIndication || 'Not found')),
                    contentPagination)));
        }
        return (react_1.default.createElement(ThemeProvider, null,
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(TableBase, { scrollable: this.props.scrollable ? /* istanbul ignore next */ this.props.scrollable + "px" : undefined, size: this.props.rowSize === 'default' ? /* istanbul ignore next */ undefined : this.props.rowSize },
                    (this.props.hideHeader !== true) && (react_1.default.createElement(Head, null,
                        react_1.default.createElement(style_1.StyledHeaderRow, null, this.colonns()))),
                    react_1.default.createElement(Body, null, (this.props.data || []).map(function (row, index) { return (react_1.default.createElement(style_1.StyledRow, { key: index, selected: _this.state.selected[row.id], striped: _this.props.striped && index % 2 === 0 }, _this.cells(row))); }))),
                (((this.props.data || []).length === 0)) && (react_1.default.createElement(style_1.StyledNoContent, null, this.props.noContentIndication || 'Not found')),
                contentPagination)));
    };
    Table.defaultProps = {
        data: [],
        disabledSelected: [],
        draggable: false,
        hideHeader: false,
        pagination: false,
        selectable: false,
        sortable: false,
        striped: false,
    };
    return Table;
}(react_1.default.Component));
exports.default = Table;
//# sourceMappingURL=index.js.map