"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var style_1 = require("./style");
function Abbreviation(_a) {
    var children = _a.children;
    var one = '';
    var two = '';
    var words = children.split(' ');
    one = words.length > 1 ? words[0] : children[0];
    two = words.length > 1 ? words[1] : children[1];
    return (React.createElement(style_1.StyledAbbreviation, { title: children }, "" + (one || '').charAt(0).toUpperCase() + (two || '').charAt(0).toUpperCase()));
}
exports.default = Abbreviation;
//# sourceMappingURL=index.js.map