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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var moment_1 = __importDefault(require("moment"));
var reactstrap_1 = require("reactstrap");
var Tooltip_1 = __importDefault(require("../Tooltip"));
var utils_1 = require("../../utils");
// Sample for ago formting
// import TimeAgo from 'timeago-react'
// import { register } from 'timeago.js'
// import { localeFRFunc, localeENFunc } from './timeago'
// register('fr_FR', localeFRFunc)
// register('en', localeENFunc)
var capitalizeFirstLetter = function (str) {
    if (!str) /* istanbul ignore next  */ {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.truncate = function (text, n, isCapitalizeFirstLetter) {
    if (n === void 0) { n = 20; }
    if (isCapitalizeFirstLetter === void 0) { isCapitalizeFirstLetter = false; }
    text = String(text);
    if (isCapitalizeFirstLetter) /* istanbul ignore next  */ {
        text = capitalizeFirstLetter(text);
    }
    if (n === -1) /* istanbul ignore next  */ {
        return text;
    }
    return text.length > n ? text.substr(0, n - 1) + "..." : /* istanbul ignore next  */ text;
};
exports.truncateMiddle = function (fullStr, strLen, separator, isCapitalizeFirstLetter) {
    if (isCapitalizeFirstLetter === void 0) { isCapitalizeFirstLetter = false; }
    fullStr = String(fullStr);
    if (isCapitalizeFirstLetter) /* istanbul ignore next  */ {
        fullStr = capitalizeFirstLetter(fullStr);
    }
    if (fullStr.length <= strLen) /* istanbul ignore next  */ {
        return fullStr;
    }
    separator = separator || /* istanbul ignore next  */ '...';
    var sepLen = separator.length;
    var charsToShow = strLen - sepLen;
    var frontChars = Math.ceil(charsToShow / 2);
    var backChars = Math.floor(charsToShow / 2);
    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};
exports.getText = function (props) {
    return props.children &&
        React.Children.map(props.children, function (child) {
            if (React.isValidElement(child)) {
                return child;
            }
            if (props.type === 'text' && props.trucanteType === 'middle') {
                return exports.truncateMiddle(child, props.useWordBoundary || /* istanbul ignore next  */ 20, '...', props.capitalizeFirstLetter);
            }
            if (props.type === 'text' && props.trucanteType === 'right') {
                return exports.truncate(child, props.useWordBoundary, props.capitalizeFirstLetter);
            }
            if (props.type === 'text' && props.capitalizeFirstLetter) {
                return capitalizeFirstLetter(child);
            }
            if (props.type === 'text') {
                return child;
            }
            if (props.type === 'date') {
                return moment_1.default(new Date(child)).locale(props.locale).format(props.format) === 'Invalid date' ? child : moment_1.default(new Date(child)).locale(props.locale).format(props.format);
            }
            if (props.type === 'ago') {
                return moment_1.default(new Date(child)).locale(props.locale).fromNow() === 'Invalid date' ? child : moment_1.default(new Date(child)).locale(props.locale).fromNow();
            }
            if (props.type === 'currency') {
                try {
                    if (isNaN(child)) {
                        return child;
                    }
                    return new Intl.NumberFormat(props.locale, { style: 'currency', currency: props.format }).format(child);
                }
                catch (error) {
                    return new Intl.NumberFormat(props.locale).format(child);
                }
            }
        });
};
/**
 * Text
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.render = function () {
        var TextStyle = this.props.textStyle === 'help' ? reactstrap_1.FormText : reactstrap_1.Label;
        var id = "" + utils_1.makeId();
        return (React.createElement(React.Fragment, null,
            React.createElement(TextStyle, { id: id }, exports.getText(this.props)),
            this.props.tooltip && (React.createElement(Tooltip_1.default, { target: id }, this.props.tooltip))));
    };
    Text.defaultProps = {
        locale: 'fr-FR',
        textStyle: 'default',
        type: 'text'
    };
    return Text;
}(React.Component));
exports.default = Text;
//# sourceMappingURL=index.js.map