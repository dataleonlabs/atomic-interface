import React from 'react';
import { Modal as StrapModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from './ModalButton';
/**
 * Modal render element
 */
const Modal = (props) => (React.createElement(StrapModal, Object.assign({}, props),
    props.header && (React.createElement(ModalHeader, Object.assign({}, props), props.header)),
    React.createElement(ModalBody, null, props.children),
    (props.ok || props.cancel) && (React.createElement(ModalFooter, null,
        props.ok && React.createElement(Button, Object.assign({}, props.ok)),
        props.cancel && React.createElement(Button, Object.assign({}, props.cancel))))));
export default Modal;
//# sourceMappingURL=index.js.map