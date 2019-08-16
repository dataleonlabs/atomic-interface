"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_content_loader_1 = __importDefault(require("react-content-loader"));
var styled_components_1 = __importDefault(require("styled-components"));
var Loader = function () { return (React.createElement(react_content_loader_1.default, { height: 12, width: 200, speed: 2, primaryColor: "#f3f3f3", secondaryColor: "#ecebeb" },
    React.createElement("rect", { x: "0", y: "0", rx: "0", ry: "0", width: "50", height: "12" }),
    React.createElement("rect", { x: "60", y: "0", rx: "0", ry: "0", width: "140", height: "12" }))); };
exports.StyledLoader = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0;\n  width: 200px;\n"], ["\n  padding: 0;\n  width: 200px;\n"])));
exports.default = Loader;
var templateObject_1;
//# sourceMappingURL=loader.js.map