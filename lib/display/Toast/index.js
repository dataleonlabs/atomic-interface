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
var reactstrap_2 = require("reactstrap");
/**
 * Toast render element
 */
var Toast = function (props) {
    return (react_1.default.createElement(reactstrap_1.Toast, __assign({}, props),
        react_1.default.createElement(reactstrap_2.ToastHeader, { toggle: props.toggle }, props.title),
        react_1.default.createElement(reactstrap_2.ToastBody, null, props.children)));
};
exports.default = Toast;
//# sourceMappingURL=index.js.map