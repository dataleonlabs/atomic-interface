import React from 'react';
import { Alert as StrapAlert } from 'reactstrap';
import { Info } from 'react-feather';
import { StyledAlert } from './style';
/**
 * Alert render element
 */
const Alert = (props) => (React.createElement(StyledAlert, null,
    React.createElement(StrapAlert, { color: props.color },
        React.createElement(React.Fragment, null,
            props.icon === true && React.createElement(Info, { size: 20, style: { marginRight: '5px' } }),
            React.createElement("span", { className: "Text" }, props.children)))));
export default Alert;
//# sourceMappingURL=index.js.map