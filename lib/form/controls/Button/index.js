import React from 'react';
import { Button as ButtonBase, Spinner } from 'reactstrap';
import { StyledButton } from './style';
/**
 * Button render element
 */
const Button = (props) => (React.createElement(StyledButton, null,
    React.createElement(ButtonBase, Object.assign({}, props, { disabled: props.disabled || props.loading, loading: props.loading === true ? 'true' : 'false' }),
        props.icon && React.createElement("span", { className: `Icon ${props.size || 'md'}` }, props.icon),
        props.children,
        props.loading && React.createElement(Spinner, { className: "Spinner", size: 'sm' }))));
export default Button;
//# sourceMappingURL=index.js.map