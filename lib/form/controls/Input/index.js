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
var formik_1 = require("formik");
var reactstrap_1 = require("reactstrap");
var Control_1 = __importDefault(require("../../Control"));
var style_1 = require("./style");
/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
var wrapperInputGroup = function (component, field) {
    if ((field.leftAddon || field.rightAddon)) {
        return (react_1.default.createElement(reactstrap_1.InputGroup, null,
            field.leftAddon && react_1.default.createElement(style_1.StyledInputGroupAddonLeft, { addonType: "prepend" }, field.leftAddon),
            component,
            field.rightAddon && react_1.default.createElement(style_1.StyledInputGroupAddonRight, { addonType: "append" }, field.rightAddon)));
    }
    return component;
};
/**
 * Input render element
 */
var Input = function (props) {
    var renderField = function (_a) {
        var field = _a.field, _b = _a.form, submitCount = _b.submitCount, errors = _b.errors;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            wrapperInputGroup(react_1.default.createElement(style_1.StyledInputBootstrap, __assign({ placeholder: props.placeholder }, field, { invalid: submitCount > 0 && (errors[props.name] ? true : false) })), props),
            submitCount > 0 && (errors[props.name] ? true : false)
                && react_1.default.createElement(reactstrap_1.FormText, { color: "danger" }, errors[props.name])));
    };
    return (react_1.default.createElement(reactstrap_1.FormGroup, null,
        react_1.default.createElement(Control_1.default, __assign({}, props),
            react_1.default.createElement(formik_1.Field, __assign({}, props, { id: props.name, bsSize: props.controlSize || 'md', render: renderField })))));
};
exports.default = Input;
//# sourceMappingURL=index.js.map