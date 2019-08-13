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
var index_1 = __importDefault(require("./index"));
var index_2 = __importDefault(require("../../utils/Query/index"));
var index_3 = __importDefault(require("../Alert/index"));
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.columns = function () {
            if (_this.props.children) {
                return _this.props.children;
            }
        };
        return _this;
    }
    Collection.prototype.render = function () {
        var _a = this.props, children = _a.children, rest = __rest(_a, ["children"]);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(index_2.default, __assign({}, this.props), function (_a) {
                var data = _a.data, error = _a.error, onLoading = _a.onLoading;
                // On loading
                if (onLoading === true) {
                    return (react_1.default.createElement(index_1.default, __assign({}, rest, { data: [], loading: true }), children));
                }
                // On error
                if (error) {
                    return (react_1.default.createElement(index_3.default, { color: 'danger' }, error));
                }
                // On data
                return (react_1.default.createElement(index_1.default, __assign({}, rest, { data: data, loading: false }), children));
            })));
    };
    return Collection;
}(react_1.default.Component));
exports.default = Collection;
//# sourceMappingURL=Collection.js.map