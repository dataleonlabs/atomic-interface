import React from 'react';
import { Field } from 'formik';
import { InputGroup } from 'reactstrap';
import Control from '../../Control';
import { StyledInputBootstrap, StyledInputGroupAddonRight, StyledInputGroupAddonLeft } from './style';
/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
const wrapperInputGroup = (component, field) => {
    if ((field.leftAddon || field.rightAddon)) {
        return (React.createElement(InputGroup, null,
            field.leftAddon && React.createElement(StyledInputGroupAddonLeft, { addonType: "prepend" }, field.leftAddon),
            component,
            field.rightAddon && React.createElement(StyledInputGroupAddonRight, { addonType: "append" }, field.rightAddon)));
    }
    return component;
};
/**
 * Input render element
 */
const Input = (props) => {
    const renderField = ({ field }) => (React.createElement(React.Fragment, null, wrapperInputGroup(React.createElement(StyledInputBootstrap, Object.assign({ placeholder: props.placeholder }, field)), props)));
    return (React.createElement(Control, Object.assign({}, props),
        React.createElement(Field, Object.assign({}, props, { id: props.name, bsSize: props.controlSize || 'md', render: renderField }))));
};
export default Input;
//# sourceMappingURL=index.js.map