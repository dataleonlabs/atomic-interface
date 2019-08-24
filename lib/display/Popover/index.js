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
 * ModalButton render element
 */
var Popover = function (props) { return (react_1.default.createElement(style_1.StyledUncontrolledPopover, __assign({ placement: "right", trigger: "focus" }, props),
    react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.PopoverHeader, null, props.header),
        react_1.default.createElement(reactstrap_1.PopoverBody, null, props.children)))); };
exports.default = Popover;
//# sourceMappingURL=index.js.map