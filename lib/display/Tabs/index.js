"use strict";
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
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var reactstrap_1 = require("reactstrap");
var style_1 = require("./style");
/**
 * Tabs render element
 */
var Tabs = function (props) {
    var _a = react_1.useState(Number(props.activeTab || 0)), active = _a[0], setActive = _a[1];
    /* istanbul ignore next  */
    function onClick(index, element, child) {
        if ((!child.props.disabled && props.onChange) && (typeof props.onChange === 'function')) {
            setActive(index);
            props.onChange(index, element);
        }
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(style_1.StyledNav, { tabs: true }, react_1.default.Children.map(props.children, function (child, index) {
            if (react_1.default.isValidElement(child)) {
                var childProps = child.props;
                var onClickTab = /* istanbul ignore next  */ function (elementChlid) { onClick(index, elementChlid, child); };
                if (childProps && childProps.title) {
                    return (react_1.default.createElement(style_1.StyledNavItem, null,
                        react_1.default.createElement(reactstrap_1.NavLink, { onClick: onClickTab, className: classnames_1.default({ active: active === index }) }, childProps.title)));
                }
            }
            /* istanbul ignore next  */
            return null;
        })),
        react_1.default.createElement(reactstrap_1.TabContent, { activeTab: active }, react_1.default.Children.map(props.children, function (child, index) {
            if (react_1.default.isValidElement(child)) {
                var childProps = child.props;
                if (child.props && childProps.title && (childProps.disabled !== true)) {
                    return (react_1.default.createElement(reactstrap_1.TabPane, { tabId: index }, childProps.children));
                }
            }
            /* istanbul ignore next  */
            return null;
        }))));
};
exports.default = Tabs;
//# sourceMappingURL=index.js.map