"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
var Tooltip_1 = __importDefault(require("../display/Tooltip"));
var utils_1 = require("../utils");
var styled_components_1 = __importDefault(require("styled-components"));
exports.StyledControl = styled_components_1.default(reactstrap_1.FormGroup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .WrapperLabel {\n    padding-top: calc(.375rem + 1px);\n    padding-bottom: calc(.375rem + 1px);\n    .Label {\n      padding-left: 0;\n      padding-right: 0;\n      display: inline;\n    }\n  }\n"], ["\n  .WrapperLabel {\n    padding-top: calc(.375rem + 1px);\n    padding-bottom: calc(.375rem + 1px);\n    .Label {\n      padding-left: 0;\n      padding-right: 0;\n      display: inline;\n    }\n  }\n"])));
/**
 * Textarea render element
 */
var Control = function (props) {
    var target = utils_1.makeId(4);
    return (react_1.default.createElement(exports.StyledControl, { inline: props.inline },
        props.label && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "WrapperLabel" },
                react_1.default.createElement(reactstrap_1.Label, { className: "Label", id: target, for: props.name, sm: props.labelSize || 12 },
                    props.label,
                    " ",
                    props.required === true && react_1.default.createElement("span", null, "*"))),
            props.tooltip &&
                react_1.default.createElement(Tooltip_1.default, { target: target }, props.tooltip))),
        props.children,
        props.help && react_1.default.createElement(reactstrap_1.FormText, null, props.help)));
};
exports.default = Control;
var templateObject_1;
//# sourceMappingURL=Control.js.map