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
var ModalButton_1 = __importDefault(require("./ModalButton"));
/**
 * Modal render element
 */
var Modal = function (props) { return (react_1.default.createElement(reactstrap_1.Modal, __assign({}, props),
    props.header && (react_1.default.createElement(reactstrap_1.ModalHeader, __assign({}, props), props.header)),
    react_1.default.createElement(reactstrap_1.ModalBody, null, props.children),
    (props.ok || props.cancel) && (react_1.default.createElement(reactstrap_1.ModalFooter, null,
        props.ok && react_1.default.createElement(ModalButton_1.default, __assign({}, props.ok)),
        props.cancel && react_1.default.createElement(ModalButton_1.default, __assign({}, props.cancel)))))); };
exports.default = Modal;
//# sourceMappingURL=index.js.map