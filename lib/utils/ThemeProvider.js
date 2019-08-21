"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var styled_components_1 = require("styled-components");
var bootstrap = require('bootstrap/dist/css/bootstrap.min.css');
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n", "\n@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');\n  body {\n    font-family: 'IBM Plex Sans', sans-serif!important;\n    background-color: ", ";\n    font-size: 0.9rem;\n\n    /* remove rounding from cards, buttons and inputs */\n    .card, .btn, .form-control, .dropdown-menu, .modal-content { border-radius: 0px; }\n    .card:focus, .btn:focus, .form-control:focus, button:focus, :focus,\n    .custom-control-input:focus~.custom-control-label::before {\n        box-shadow: none!important;\n    }\n\n    .form-group {\n      margin-bottom: 0.5rem;\n    }\n\n    * {\n        outline: 0!important;\n    }\n\n    .card, .dropdown-menu, .modal-content, .progress, .toast, .custom-file-label, .custom-file-label::after {\n        border-radius: 0px!important;\n    }\n\n    .btn {\n        border-radius: 3px!important;\n    }\n\n  }\n"], ["\n", "\n@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');\n  body {\n    font-family: 'IBM Plex Sans', sans-serif!important;\n    background-color: ", ";\n    font-size: 0.9rem;\n\n    /* remove rounding from cards, buttons and inputs */\n    .card, .btn, .form-control, .dropdown-menu, .modal-content { border-radius: 0px; }\n    .card:focus, .btn:focus, .form-control:focus, button:focus, :focus,\n    .custom-control-input:focus~.custom-control-label::before {\n        box-shadow: none!important;\n    }\n\n    .form-group {\n      margin-bottom: 0.5rem;\n    }\n\n    * {\n        outline: 0!important;\n    }\n\n    .card, .dropdown-menu, .modal-content, .progress, .toast, .custom-file-label, .custom-file-label::after {\n        border-radius: 0px!important;\n    }\n\n    .btn {\n        border-radius: 3px!important;\n    }\n\n  }\n"])), styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), bootstrap), function (props) { return props.theme && props.theme.bodyBackgroundColor; });
var ThemeProvider = /** @class */ (function (_super) {
    __extends(ThemeProvider, _super);
    function ThemeProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeProvider.prototype.render = function () {
        var _a = this.props, children = _a.children, theme = __rest(_a, ["children"]);
        return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(exports.GlobalStyle, { theme: theme }),
                this.props.children)));
    };
    ThemeProvider.defaultProps = {
        theme: {
            bodyBackgroundColor: '#ffffff'
        }
    };
    return ThemeProvider;
}(react_1.default.Component));
exports.default = ThemeProvider;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ThemeProvider.js.map