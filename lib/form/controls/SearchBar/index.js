import React from 'react';
import { Field } from 'formik';
import { Search } from 'react-feather';
import { InputGroup } from 'reactstrap';
import { StyledInputSearchBootstrap, StyledInputSearchGroupAddonLeft } from './style';
/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
/**
 * SearchBar render element
 */
const SearchBar = (props) => {
    const PrependIcon = props.leftAddonIcon || React.createElement(Search, null);
    const PrependString = props.leftAddonString || 'search';
    const renderField = ({ field }) => (React.createElement(React.Fragment, null,
        React.createElement(InputGroup, null,
            React.createElement(StyledInputSearchGroupAddonLeft, { addonType: "prepend", navbar: props.navBar },
                React.createElement("div", { className: "input-group-text" },
                    React.createElement("span", { style: { marginRight: '5px' } }, PrependIcon),
                    PrependString)),
            React.createElement(StyledInputSearchBootstrap, Object.assign({ placeholder: props.placeholder }, field, { navbar: props.navBar, type: props.closeIcon ? "search" : "input" })))));
    return (React.createElement(Field, Object.assign({}, props, { id: props.name, bsSize: props.controlSize || 'md', render: renderField })));
};
export default SearchBar;
//# sourceMappingURL=index.js.map