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
var react_feather_1 = require("react-feather");
var reactstrap_1 = require("reactstrap");
var style_1 = require("./style");
/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
/**
 * SearchBar render element
 */
var SearchBar = function (props) {
    var PrependIcon = props.leftAddonIcon || react_1.default.createElement(react_feather_1.Search, null);
    var PrependString = props.leftAddonString || 'search';
    var renderField = function (_a) {
        var field = _a.field;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(reactstrap_1.InputGroup, null,
                react_1.default.createElement(style_1.StyledInputSearchGroupAddonLeft, { addonType: "prepend", navbar: props.navBar },
                    react_1.default.createElement("div", { className: "input-group-text" },
                        react_1.default.createElement("span", { style: { marginRight: '5px' } }, PrependIcon),
                        PrependString)),
                react_1.default.createElement(style_1.StyledInputSearchBootstrap, __assign({ placeholder: props.placeholder }, field, { navbar: props.navBar, type: props.closeIcon ? "search" : "input" })))));
    };
    return (react_1.default.createElement(formik_1.Field, __assign({}, props, { id: props.name, bsSize: props.controlSize || 'md', render: renderField })));
};
exports.default = SearchBar;
//# sourceMappingURL=index.js.map