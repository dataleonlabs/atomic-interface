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
var reactstrap_1 = require("reactstrap");
exports.StyledNavbar = styled_components_1.default(reactstrap_1.Navbar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #fff!important;\n  border-bottom: solid 1px #F1F1F1!important;\n\n  padding: ", " 1rem;\n\n  .nav-link {\n    color: #212529!important;\n  }\n  .nav-item {\n    button {\n      padding: ", " .75rem;\n      font-size: 0.9rem;\n      margin-left: 15px;\n    }\n\n    .Icon {\n      position: relative;\n      vertical-align: text-bottom;\n    }\n  }\n"], ["\n  background-color: #fff!important;\n  border-bottom: solid 1px #F1F1F1!important;\n\n  padding: ", " 1rem;\n\n  .nav-link {\n    color: #212529!important;\n  }\n  .nav-item {\n    button {\n      padding: ", " .75rem;\n      font-size: 0.9rem;\n      margin-left: 15px;\n    }\n\n    .Icon {\n      position: relative;\n      vertical-align: text-bottom;\n    }\n  }\n"])), function (props) { return props.size === 'lg' ? '0.8rem' : '0.5rem'; }, function (props) { return props.size === 'lg' ? '.375rem' : '.175rem'; });
var templateObject_1;
//# sourceMappingURL=style.js.map