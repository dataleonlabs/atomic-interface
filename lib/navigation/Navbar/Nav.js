"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
/**
 * Nav render element
 */
var Nav = function (props) { return (react_1.default.createElement(reactstrap_1.Nav, { className: "ml-auto", navbar: true }, props.children)); };
exports.default = Nav;
//# sourceMappingURL=Nav.js.map