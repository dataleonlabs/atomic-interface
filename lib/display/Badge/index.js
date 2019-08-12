"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
/**
 * Badge render element
 */
var Badge = function (props) { return (react_1.default.createElement(reactstrap_1.Badge, { color: props.color, pill: props.pill },
    react_1.default.createElement(react_1.default.Fragment, null, props.children))); };
exports.default = Badge;
//# sourceMappingURL=index.js.map