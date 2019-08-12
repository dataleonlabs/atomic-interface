"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var _a = require('@zendeskgarden/react-tables'), Row = _a.Row, Cell = _a.Cell, HeaderRow = _a.HeaderRow;
exports.DraggableRow = styled_components_1.default(Row)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-bottom: 1px solid #f6f6f6;\n  ", ";\n"], ["\n  border-bottom: 1px solid #f6f6f6;\n  ",
    ";\n"])), function (props) {
    return props.isDraggingOver
        ? /* istanbul ignore next */ "\n    :hover {\n      background-color: inherit !important;\n    }\n\n    &:focus > div:first-child {\n    box-shadow: inset 3px 0 0 0 #007bff!important;\n    }\n  "
        : '';
});
exports.DraggableCell = styled_components_1.default(Cell)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (props) {
    return props.isDragging
        ? /* istanbul ignore next */ "\n    display: inline-block !important;\n  "
        : '';
});
exports.DraggableContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  :focus {\n    outline: none;\n  }\n"], ["\n  :focus {\n    outline: none;\n  }\n"])));
exports.StyledNoContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    text-align: center;\n    padding: 15px;\n    font-size: 14px;\n"], ["\n    text-align: center;\n    padding: 15px;\n    font-size: 14px;\n"])));
exports.StyledRow = styled_components_1.default(Row)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-bottom: 1px solid #f5f5f5!important;\n  &:focus > div:first-child {\n    box-shadow: inset 3px 0 0 0 #007bff!important;\n  }\n"], ["\n  border-bottom: 1px solid #f5f5f5!important;\n  &:focus > div:first-child {\n    box-shadow: inset 3px 0 0 0 #007bff!important;\n  }\n"])));
exports.StyledHeaderRow = styled_components_1.default(HeaderRow)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border-bottom: 2px solid #f1f1f1!important;\n"], ["\n  border-bottom: 2px solid #f1f1f1!important;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=style.js.map