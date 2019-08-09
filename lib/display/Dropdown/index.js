import React, { useState } from 'react';
import { Dropdown as StrapDropdown, DropdownToggle } from 'reactstrap';
import { StyledDropdownMenu } from './style';
/**
 * DropDown render element
 */
const DropDown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    /* istanbul ignore next  */
    function toggle() {
        setIsOpen(!isOpen);
    }
    return (React.createElement(StrapDropdown, Object.assign({ isOpen: isOpen, toggle: toggle }, props),
        React.createElement(React.Fragment, null,
            React.createElement(DropdownToggle, { caret: props.caret }, props.title),
            React.createElement(StyledDropdownMenu, null, props.children))));
};
export default DropDown;
//# sourceMappingURL=index.js.map