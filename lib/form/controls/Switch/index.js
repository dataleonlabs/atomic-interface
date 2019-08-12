import React from 'react';
import { Field } from 'formik';
import { CustomInput, FormText } from 'reactstrap';
import Control from '../../Control';
/**
 * CheckBox render element
 */
const Switch = (props) => {
    const renderField = ({ field, form: { submitCount, errors } }) => (React.createElement(React.Fragment, null,
        React.createElement(CustomInput, Object.assign({}, field, props, { id: props.id || props.name, label: props.label, invalid: submitCount > 0 && (errors[props.name] ? true : false), type: 'switch' })),
        submitCount > 0 && (errors[props.name] ? true : false)
            && React.createElement(FormText, { color: "danger" }, errors[props.name])));
    return (React.createElement(Control, Object.assign({}, props, { label: undefined }),
        React.createElement(Field, Object.assign({}, props, { id: props.name, render: renderField }))));
};
export default Switch;
//# sourceMappingURL=index.js.map