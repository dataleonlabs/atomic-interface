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
exports.StyledPanel = styled_components_1.default(reactstrap_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .card-header, .card-body {\n    background-color: #fff;\n  }\n"], ["\n  .card-header, .card-body {\n    background-color: #fff;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=style.js.map