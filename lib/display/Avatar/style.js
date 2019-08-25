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
var sizeFunc = function (_a) {
    var size = _a.size;
    if (size === 'sm') {
        return '40px';
    }
    if (size === 'lg') {
        return '70px';
    }
    return "50px";
};
exports.StyledImage = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";;\n  height: ", ";;\n  display: inline-block;\n  overflow: hidden;\n  border-radius: ", ";;\n  border: solid 1px #F2F2F2;\n\n  img {\n    width: ", ";\n  }\n"], ["\n  width: ", ";;\n  height: ", ";;\n  display: inline-block;\n  overflow: hidden;\n  border-radius: ", ";;\n  border: solid 1px #F2F2F2;\n\n  img {\n    width: ", ";\n  }\n"])), sizeFunc, sizeFunc, sizeFunc, sizeFunc);
var templateObject_1;
//# sourceMappingURL=style.js.map