"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
var style_1 = require("./style");
/**
 * Button render element
 */
var Button = function (props) { return (react_1.default.createElement(style_1.StyledButton, null,
    react_1.default.createElement(reactstrap_1.Button, __assign({}, props, { disabled: props.disabled || props.loading, loading: props.loading === true ? 'true' : 'false' }),
        props.icon && react_1.default.createElement("span", { className: "Icon " + (props.size || 'md') }, props.icon),
        props.children,
        props.loading && react_1.default.createElement(reactstrap_1.Spinner, { className: "Spinner", size: 'sm' })))); };
exports.default = Button;
//# sourceMappingURL=index.js.map