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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
/**
 * Tooltip render element
 */
var Tooltip = function (props) {
    var _a = react_1.default.useState(false), tooltipOpen = _a[0], setTooltipOpen = _a[1];
    /* istanbul ignore next  */
    function toggle() {
        setTooltipOpen(!tooltipOpen);
    }
    return (react_1.default.createElement(reactstrap_1.Tooltip, __assign({ isOpen: tooltipOpen, toggle: toggle, placement: "right" }, props), props.children));
};
exports.default = Tooltip;
//# sourceMappingURL=index.js.map