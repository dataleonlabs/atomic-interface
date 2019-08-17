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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var yap_sdk_1 = require("yap-sdk");
var Query = /** @class */ (function (_super) {
    __extends(Query, _super);
    function Query() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            contentRendered: null,
            onRendering: false
        };
        _this.fetch = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, children, rest, api, contentRendered, data, contentRendered, error_1, contentRendered;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, children = _a.children, rest = __rest(_a, ["children"]);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 10]);
                        api = new yap_sdk_1.APIGatewayFetch({ apiKey: this.props.apiKey, apiUrl: this.props.apiUrl });
                        if (typeof children === 'function') {
                            contentRendered = children({ data: null, error: null, onLoading: true, loaded: false });
                            if (contentRendered) {
                                this.setState({ contentRendered: contentRendered, onRendering: true });
                            }
                        }
                        if (!(typeof this.props.onLoading === 'function')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.props.onLoading()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, api[this.props.type](__assign({}, rest))];
                    case 4:
                        data = _b.sent();
                        if (!(typeof this.props.onLoaded === 'function')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.props.onLoaded(data)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        if (typeof children === 'function') {
                            contentRendered = children({ data: data, error: null, onLoading: false, loaded: true });
                            if (contentRendered) {
                                this.setState({ contentRendered: contentRendered, onRendering: true });
                            }
                        }
                        return [3 /*break*/, 10];
                    case 7:
                        error_1 = _b.sent();
                        if (!(typeof this.props.onError === 'function')) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.props.onError(error_1 && error_1.error ? error_1.error : error_1)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        if (typeof children === 'function') {
                            contentRendered = children({ data: null, error: error_1 && error_1.error ? error_1.error : error_1, onLoading: false, loaded: true });
                            if (contentRendered) {
                                this.setState({ contentRendered: contentRendered, onRendering: true });
                            }
                        }
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Query.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Query.prototype.render = function () {
        if (this.state.onRendering === true) {
            return this.state.contentRendered;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null));
    };
    Query.defaultProps = {
        limit: 0,
        offset: 0,
        values: {},
        where: {}
    };
    return Query;
}(react_1.default.Component));
exports.default = Query;
//# sourceMappingURL=index.js.map