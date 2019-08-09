import React from 'react';
import { PopoverHeader, PopoverBody } from 'reactstrap';
import { StyledUncontrolledPopover } from './style';
/**
 * ModalButton render element
 */
const Popover = (props) => (React.createElement(StyledUncontrolledPopover, Object.assign({ placement: "right", trigger: "focus" }, props),
    React.createElement(React.Fragment, null,
        React.createElement(PopoverHeader, null, props.header),
        React.createElement(PopoverBody, null, props.children))));
export default Popover;
//# sourceMappingURL=index.js.map