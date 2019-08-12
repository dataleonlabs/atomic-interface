import React from 'react';
import { Field } from 'formik';
import { StyledTextareaAutosize } from './style';
import Control from '../../Control';
import { FormText } from 'reactstrap';
/**
 * Textarea render element
 */
const Textarea = (props) => {
    const renderField = ({ field, form: { submitCount, errors } }) => (React.createElement(React.Fragment, null,
        React.createElement(StyledTextareaAutosize, Object.assign({ rows: Number(props.rows || 5), maxRows: Number(props.maxRows || 10), className: "form-control", placeholder: String(props.placeholder || '') }, field)),
        submitCount > 0 && (errors[props.name] ? true : false)
            && React.createElement(FormText, { color: "danger" }, errors[props.name])));
    return (React.createElement(Control, Object.assign({}, props),
        React.createElement(Field, Object.assign({}, props, { id: props.name, bsSize: props.controlSize || 'md', render: renderField }))));
};
export default Textarea;
//# sourceMappingURL=index.js.map