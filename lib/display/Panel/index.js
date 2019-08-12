"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
var style_1 = require("./style");
/**
 * Modal render element
 */
var Panel = function (props) { return (react_1.default.createElement(style_1.StyledPanel, null,
    props.title && react_1.default.createElement(reactstrap_1.CardHeader, null, props.title),
    react_1.default.createElement(reactstrap_1.CardBody, null, props.children))); };
exports.default = Panel;
//# sourceMappingURL=index.js.map