"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var UploadDisplay = /** @class */ (function (_super) {
    __extends(UploadDisplay, _super);
    function UploadDisplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderFileUpload = function (_, i) {
            var fileName = _this.props.fileName;
            var url = _this.props.s3Url + "/" + fileName;
            if (typeof _this.props.onDiplay === 'function') {
                url = _this.props.onDiplay(_this.props.s3Url, fileName);
            }
            return (React.createElement("div", { key: i },
                React.createElement("img", { style: { width: '100%' }, src: url })));
        };
        return _this;
    }
    UploadDisplay.prototype.render = function () {
        var _a = this.props, uploadedFiles = _a.uploadedFiles, progress = _a.progress;
        return (React.createElement("div", { className: "Dropzone " + (uploadedFiles.length ? "dropped" : "") },
            !uploadedFiles.length && !progress && React.createElement("div", { className: "DropText" }, this.props.children),
            !uploadedFiles.length && progress && React.createElement("div", { className: "DropText" },
                progress,
                "%"),
            uploadedFiles.map(this.renderFileUpload)));
    };
    return UploadDisplay;
}(React.Component));
exports.default = UploadDisplay;
//# sourceMappingURL=UploadDisplay.js.map