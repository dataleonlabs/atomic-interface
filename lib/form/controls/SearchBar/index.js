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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var formik_1 = require("formik");
var react_feather_1 = require("react-feather");
var reactstrap_1 = require("reactstrap");
/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
/*
  style for search icon
   border: 1px solid #ced4da;
   border-radius: .25rem;
   border-top-left-radius: 0;
   border-bottom-left-radius: 0;
   border-right: none;
   display: flex;
   align-items: center;
   padding-left: 5px;

   style for input
   border-left: none;
 */
var wrapperSearchBar = function (component, field) {
    var PrependIcon = field.leftAddonIcon || react_1.default.createElement(react_feather_1.Search, null);
    var PrependString = field.leftAddonString || 'search';
    return (react_1.default.createElement(reactstrap_1.InputGroup, null,
        react_1.default.createElement(reactstrap_1.InputGroupAddon, { addonType: "prepend", tag: 'button' },
            react_1.default.createElement("span", { style: { marginRight: '5px' } }, PrependIcon),
            PrependString),
        component));
};
/**
 * SearchBar render element
 */
var SearchBar = function (props) {
    var value = props.value, rest = __rest(props, ["value"]);
    var renderField = function (_a) {
        var field = _a.field;
        return (react_1.default.createElement(react_1.default.Fragment, null, wrapperSearchBar(react_1.default.createElement(reactstrap_1.Input, __assign({}, rest, field, { type: "search" })), props)));
    };
    return (react_1.default.createElement(formik_1.Field, { id: props.name, render: renderField }));
};
exports.default = SearchBar;
//# sourceMappingURL=index.js.map