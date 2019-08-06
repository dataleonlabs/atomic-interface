import React from 'react';
import { Modal as StrapModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ModalProps as Props } from './props';
import Button from './ModalButton'

/**
 * Modal render element
 */

const Modal = (props: Props) => (
  <StrapModal {...props} >
    <ModalHeader {...props}>
      {props.header}
    </ModalHeader>
    <ModalBody>
      {props.children}
    </ModalBody>
    <ModalFooter>
      {props.ok && <Button {...props.ok} />}
      {props.cancel && <Button {...props.cancel} />}
    </ModalFooter>
  </StrapModal>
)

export default Modal;
