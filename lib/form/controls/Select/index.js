import React from 'react';
import { Field } from 'formik';
import Control from '../../Control';
import { StyledSelectBase, StyledCreatableSelect } from './style';
/**
 * Select render element
 */
const Select = (props) => {
    const CustomSelect = props.creatable ? StyledCreatableSelect : StyledSelectBase;
    const renderField = ({ field }) => (React.createElement(React.Fragment, null,
        React.createElement(CustomSelect, Object.assign({ className: 'react-select-container', and: true, classNamePrefix: "react-select" }, field, { options: props.meta.options }, props))));
    return (React.createElement(Control, Object.assign({}, props),
        React.createElement(Field, Object.assign({}, props, { id: props.name, render: renderField }))));
};
export default Select;
//# sourceMappingURL=index.js.map