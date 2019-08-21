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
var DropzoneS3Uploader = require('react-dropzone-s3-uploader');
exports.StyledDropzoneS3Uploader = styled_components_1.default(DropzoneS3Uploader)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none!important;\n  height: auto;\n\n  .Dropzone {\n    border: 2px dashed #ddd;\n    height: 200px;\n    :hover {\n      border-color: #007bff;\n    }\n  }\n\n  .Dropzone.dropped {\n    height: auto;\n    border: 2px solid #ddd;\n  }\n\n  .DropText {\n    text-align: center;\n    line-height: 200px;\n  }\n"], ["\n  border: none!important;\n  height: auto;\n\n  .Dropzone {\n    border: 2px dashed #ddd;\n    height: 200px;\n    :hover {\n      border-color: #007bff;\n    }\n  }\n\n  .Dropzone.dropped {\n    height: auto;\n    border: 2px solid #ddd;\n  }\n\n  .DropText {\n    text-align: center;\n    line-height: 200px;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=style.js.map