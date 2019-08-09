import React from 'react';
import { Field } from 'formik';
import { CustomInput } from 'reactstrap';
import Control from '../../Control';
/**
 * CheckBox render element
 */
const Switch = (props) => {
    const renderField = ({ field }) => (React.createElement(React.Fragment, null,
        React.createElement(CustomInput, Object.assign({}, field, props, { id: props.id || props.name, label: props.label, type: 'switch' }))));
    return (React.createElement(Control, Object.assign({}, props, { label: undefined }),
        React.createElement(Field, Object.assign({}, props, { id: props.name, render: renderField }))));
};
export default Switch;
//# sourceMappingURL=index.js.map