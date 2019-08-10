import React from 'react';
import { Toast as StrapToast } from 'reactstrap';
import { ToastHeader, ToastBody } from 'reactstrap';
/**
 * Toast render element
 */
const Toast = (props) => {
    return (React.createElement(StrapToast, Object.assign({}, props),
        React.createElement(ToastHeader, { toggle: props.toggle }, props.title),
        React.createElement(ToastBody, null, props.children)));
};
export default Toast;
//# sourceMappingURL=index.js.map