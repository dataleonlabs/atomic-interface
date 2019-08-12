"use strict";
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
var react_feather_1 = require("react-feather");
var Popover_1 = __importDefault(require("./../Popover"));
var utils_1 = require("../../utils");
var HelpIcon = function (props) {
    var target = "help-icon" + utils_1.makeId(2);
    return (React.createElement("span", null,
        React.createElement(react_feather_1.HelpCircle, { id: target, size: 17 }),
        React.createElement(Popover_1.default, __assign({}, props, { target: target }), props.children)));
};
exports.default = HelpIcon;
//# sourceMappingURL=index.js.map