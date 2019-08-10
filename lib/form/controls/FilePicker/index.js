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
import { Field } from 'formik';
import { CustomInput as FilePickerBootstrap, } from 'reactstrap';
import Control from '../../Control';
/**
 * FilePicker render element
 */
const FilePicker = (props) => {
    const { value } = props, rest = __rest(props, ["value"]);
    const renderField = (_) => (React.createElement(React.Fragment, null,
        React.createElement(FilePickerBootstrap, Object.assign({}, rest, { id: props.name, type: "file" }))));
    return (React.createElement(Control, Object.assign({}, props),
        React.createElement(Field, { id: props.name, render: renderField })));
};
export default FilePicker;
//# sourceMappingURL=index.js.map