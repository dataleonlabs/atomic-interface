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
import React from 'react';
import { Spinner as StrapSpinner } from 'reactstrap';
/**
 * Spinner render element
 */
const Spinner = (props) => {
    const { ref } = props, rest = __rest(props, ["ref"]);
    return (React.createElement(StrapSpinner, Object.assign({}, rest)));
};
export default Spinner;
//# sourceMappingURL=index.js.map