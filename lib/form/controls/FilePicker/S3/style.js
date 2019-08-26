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
exports.StyledImageUploader = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n\n  .Label {\n    font-weight: 500;\n    color: #333;\n  }\n\n  .FileWrapper {\n    margin-top: 10px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n\n  .Label {\n    font-weight: 500;\n    color: #333;\n  }\n\n  .FileWrapper {\n    margin-top: 10px;\n  }\n"])));
exports.StyledUploadBtnWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  margin-top: ", ";\n  cursor: pointer !important;\n  input[type='file'] {\n    font-size: 100px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n    cursor: pointer !important;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  margin-top: ", ";\n  cursor: pointer !important;\n  input[type='file'] {\n    font-size: 100px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n    cursor: pointer !important;\n  }\n"])), function (props) { return (props.label ? '10px' : '0'); });
exports.StyledIconUpload = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 10px !important;\n  display: inline-block;\n  vertical-align: bottom;\n"], ["\n  margin-right: 10px !important;\n  display: inline-block;\n  vertical-align: bottom;\n"])));
exports.StyledButtonLabel = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 36px !important;\n  text-align: center !important;\n  display: inline-block;\n"], ["\n  width: 36px !important;\n  text-align: center !important;\n  display: inline-block;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=style.js.map