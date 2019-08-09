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
var Control_1 = __importDefault(require("../../Control"));
var style_1 = require("./style");
/**
 * Select render element
 */
var Select = function (props) {
    var CustomSelect = props.creatable ? style_1.StyledCreatableSelect : style_1.StyledSelectBase;
    var renderField = function (_a) {
        var field = _a.field;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(CustomSelect, __assign({ className: 'react-select-container', and: true, classNamePrefix: "react-select" }, field, { options: props.meta.options }, props))));
    };
    return (react_1.default.createElement(Control_1.default, __assign({}, props),
        react_1.default.createElement(formik_1.Field, __assign({}, props, { id: props.name, render: renderField }))));
};
exports.default = Select;
//# sourceMappingURL=index.js.map