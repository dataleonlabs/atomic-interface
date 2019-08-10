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
import { Search } from 'react-feather';
import { Input as SearchBarBootstrap, InputGroup, InputGroupAddon } from 'reactstrap';
/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */
/*
  style for search icon
   border: 1px solid #ced4da;
   border-radius: .25rem;
   border-top-left-radius: 0;
   border-bottom-left-radius: 0;
   border-right: none;
   display: flex;
   align-items: center;
   padding-left: 5px;

   style for input
   border-left: none;
 */
const wrapperSearchBar = (component, field) => {
    const PrependIcon = field.leftAddonIcon || React.createElement(Search, null);
    const PrependString = field.leftAddonString || 'search';
    return (React.createElement(InputGroup, null,
        React.createElement(InputGroupAddon, { addonType: "prepend", tag: 'button' },
            React.createElement("span", { style: { marginRight: '5px' } }, PrependIcon),
            PrependString),
        component));
};
/**
 * SearchBar render element
 */
const SearchBar = (props) => {
    const { value } = props, rest = __rest(props, ["value"]);
    const renderField = ({ field }) => (React.createElement(React.Fragment, null, wrapperSearchBar(React.createElement(SearchBarBootstrap, Object.assign({}, rest, field, { type: "search" })), props)));
    return (React.createElement(Field, { id: props.name, render: renderField }));
};
export default SearchBar;
//# sourceMappingURL=index.js.map