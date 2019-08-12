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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var reactstrap_1 = require("reactstrap");
var style_1 = require("./style");
/**
 * DropDown render element
 */
var DropDown = function (props) {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    /* istanbul ignore next  */
    function toggle() {
        setIsOpen(!isOpen);
    }
    return (react_1.default.createElement(reactstrap_1.Dropdown, __assign({ isOpen: isOpen, toggle: toggle }, props),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(reactstrap_1.DropdownToggle, { caret: props.caret }, props.title),
            react_1.default.createElement(style_1.StyledDropdownMenu, null, props.children))));
};
exports.default = DropDown;
//# sourceMappingURL=index.js.map