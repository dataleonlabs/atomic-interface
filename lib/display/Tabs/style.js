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
exports.StyledNavItem = styled_components_1.default(reactstrap_1.NavItem)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nborder-radius: 3px!important;\n  .nav-link {\n    cursor: pointer\n  }\n\n  .nav-link:hover {\n    border-color: #fff #fff #dee2e6 #fff;\n    border-bottom-width: 3px;\n    margin-bottom: -2px;\n  }\n\n  .nav-link.active {\n    border-color: #fff #fff #007bff #fff;\n    border-bottom-width: 3px;\n    margin-bottom: -1px;\n  }\n"], ["\nborder-radius: 3px!important;\n  .nav-link {\n    cursor: pointer\n  }\n\n  .nav-link:hover {\n    border-color: #fff #fff #dee2e6 #fff;\n    border-bottom-width: 3px;\n    margin-bottom: -2px;\n  }\n\n  .nav-link.active {\n    border-color: #fff #fff #007bff #fff;\n    border-bottom-width: 3px;\n    margin-bottom: -1px;\n  }\n"])));
exports.StyledNav = styled_components_1.default(reactstrap_1.Nav)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-bottom: 2px solid #dee2e6;\n"], ["\n  border-bottom: 2px solid #dee2e6;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=style.js.map