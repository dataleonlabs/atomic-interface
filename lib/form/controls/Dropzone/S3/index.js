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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var formik_1 = require("formik");
var Control_1 = __importDefault(require("../../../Control"));
var reactstrap_1 = require("reactstrap");
var uuidv4_1 = __importDefault(require("uuidv4"));
var UploadDisplay_1 = __importDefault(require("./UploadDisplay"));
var style_1 = require("./style");
function getHeaders() {
    var headers = {
        Accept: 'application/json',
        Authorization: '',
        'Content-Type': 'application/json',
    };
    return headers;
}
exports.getHeaders = getHeaders;
var DropzoneS3 = /** @class */ (function (_super) {
    __extends(DropzoneS3, _super);
    function DropzoneS3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: false,
            errorMessage: '',
            fileName: '',
            loading: false,
            progress: 0,
            uploaded: false,
        };
        _this.getSignedUrl = function (file, callback) {
            var fileName = file.name;
            if (_this.props.uuid === true) {
                var ext = file.name.split('.').pop();
                fileName = uuidv4_1.default().toLocaleUpperCase() + "." + ext;
            }
            _this.setState({ fileName: fileName }, function () {
                fetch("" + _this.props.server + _this.props.signingUrl + "?key=" + fileName + "&contentType=" + file.type + "&type=put&acl=" + _this.props.XAmzAcl)
                    .then(function (data) { return data.json(); })
                    .then(function (data) {
                    callback({ signedUrl: data.data });
                })
                    .catch(function (error) {
                    _this.setState(error);
                });
            });
        };
        _this.onClick = function () {
            // onClick button
        };
        _this.onSignedUrl = function () {
            _this.setState({ loading: true });
        };
        _this.onUploadProgress = function (progress) {
            _this.setState({ progress: progress });
        };
        _this.onUploadError = function (e) {
            _this.setState({
                error: true,
                errorMessage: e,
                loading: false,
            });
        };
        _this.onUploadFinish = function (setFieldValue) { return function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.setState({ loading: false, uploaded: true, progress: 0 }, function () {
                        setFieldValue(_this.props.name, _this.state.fileName);
                        if (typeof _this.props.onUploadFinish === 'function') {
                            _this.props.onUploadFinish(_this.state.fileName);
                        }
                    });
                }
                catch (e) {
                    this.setState({
                        error: true,
                        errorMessage: e.message,
                        loading: false,
                    });
                }
                return [2 /*return*/];
            });
        }); }; };
        _this.renderField = function (_a) {
            var field = _a.field, _b = _a.form, submitCount = _b.submitCount, errors = _b.errors, setFieldValue = _b.setFieldValue;
            return (React.createElement(React.Fragment, null,
                React.createElement(style_1.StyledDropzoneS3Uploader, { s3Url: _this.props.s3Url, maxSize: _this.props.maxSize || 1024 * 1024 * 5, upload: __assign({}, _this.props, { getSignedUrl: _this.getSignedUrl }), onFinish: _this.onUploadFinish(setFieldValue), onError: _this.onUploadError, onProgress: _this.onUploadProgress, key: 1 },
                    React.createElement(UploadDisplay_1.default, __assign({}, _this.props, { uploaded: _this.state.uploaded, fileName: _this.state.fileName, value: field.value[_this.props.name], progress: _this.state.progress }), _this.props.children)),
                submitCount > 0 && (errors[_this.props.name] ? true : false)
                    && React.createElement(reactstrap_1.FormText, { color: "danger" }, errors[_this.props.name])));
        };
        return _this;
    }
    DropzoneS3.prototype.render = function () {
        return (React.createElement(Control_1.default, __assign({}, this.props),
            React.createElement(formik_1.Field, { id: this.props.name, render: this.renderField })));
    };
    DropzoneS3.defaultProps = {
        XAmzAcl: 'private',
        multipleFiles: false,
        signingUrlMethod: 'PUT',
        uuid: true
    };
    return DropzoneS3;
}(React.PureComponent));
exports.default = DropzoneS3;
//# sourceMappingURL=index.js.map