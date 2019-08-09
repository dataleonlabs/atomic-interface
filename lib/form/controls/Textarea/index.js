import React from 'react';
import { Field } from 'formik';
import { StyledTextareaAutosize } from './style';
import Control from '../../Control';
/**
 * Textarea render element
 */
const Textarea = (props) => {
    const renderField = ({ field }) => (React.createElement(StyledTextareaAutosize, Object.assign({ rows: Number(props.rows || 5), maxRows: Number(props.maxRows || 10), className: "form-control", placeholder: String(props.placeholder || '') }, field)));
    return (React.createElement(Control, Object.assign({}, props),
        React.createElement(Field, Object.assign({}, props, { id: props.name, bsSize: props.controlSize || 'md', render: renderField }))));
};
export default Textarea;
//# sourceMappingURL=index.js.map