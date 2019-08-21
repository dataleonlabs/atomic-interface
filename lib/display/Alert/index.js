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
var react_feather_1 = require("react-feather");
var style_1 = require("./style");
/**
 * Alert render element
 */
var Alert = function (props) { return (react_1.default.createElement(style_1.StyledAlert, null,
    react_1.default.createElement(reactstrap_1.UncontrolledAlert, __assign({ color: props.color }, props),
        react_1.default.createElement(react_1.default.Fragment, null,
            props.icon === true && react_1.default.createElement(react_feather_1.Info, { size: 20, style: { marginRight: '5px' } }),
            react_1.default.createElement("span", { className: "Text" }, props.children))))); };
exports.default = Alert;
//# sourceMappingURL=index.js.map