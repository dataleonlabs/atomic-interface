import React from 'react';
import { Field } from 'formik';
import Control from '../../Control';
import { StyledSelectBase, StyledCreatableSelect } from './style';
import { FormText } from 'reactstrap';
/**
 * Select render element
 */
const Select = (props) => {
    const CustomSelect = props.creatable ? StyledCreatableSelect : StyledSelectBase;
    const renderField = ({ field, form: { submitCount, errors, setFieldValue } }) => {
        const onChange = (option) => setFieldValue(field.name, option.value);
        return (React.createElement(React.Fragment, null,
            React.createElement(CustomSelect, Object.assign({}, props, field, { className: 'react-select-container', classNamePrefix: "react-select", options: props.options, name: field.name, value: (props.options ? props.options.find((option) => option.value === field.value) : ''), onChange: onChange, onBlur: field.onBlur, invalid: submitCount > 0 && (errors[props.name] ? true : false) })),
            submitCount > 0 && (errors[props.name] ? true : false)
                && React.createElement(FormText, { color: "danger" }, errors[props.name])));
    };
    return (React.createElement(Control, Object.assign({}, props),
        React.createElement(Field, Object.assign({}, props, { id: props.name, render: renderField }))));
};
export default Select;
//# sourceMappingURL=index.js.map