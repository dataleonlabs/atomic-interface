"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var style_1 = require("../Input/style");
exports.StyledInputSearchBootstrap = styled_components_1.default(style_1.StyledInputBootstrap)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["    \n    border: 2px solid ", ";\n    &:focus {\n      border-color: ", ";\n    }\n"], ["    \n    border: 2px solid ", ";\n    &:focus {\n      border-color: ", ";\n    }\n"])), function (props) { return props.navbar ? '#fff' : '#dfe3e9'; }, function (props) { return props.navbar ? '#fff' : '#80bdff'; });
exports.StyledInputSearchGroupAddonLeft = styled_components_1.default(style_1.StyledInputGroupAddonLeft)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["   \n  border-radius: 0px!important;\n  .input-group-text {\n    background-color: ", ";\n    border: 2px solid ", ";\n    border-right: none;\n  }\n"], ["   \n  border-radius: 0px!important;\n  .input-group-text {\n    background-color: ", ";\n    border: 2px solid ", ";\n    border-right: none;\n  }\n"])), function (props) { return props.navbar ? '#fff' : '#fcfcfc'; }, function (props) { return props.navbar ? '#fff' : '#dfe3e9'; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=style.js.map