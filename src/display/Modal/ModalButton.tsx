import React from 'react';
import { Button } from 'reactstrap';
import { ModalButtonProps as Props } from './props';

/**
 * ModalButton render element
 */

const ModalButton = (props: Props) => (
  <Button {...props}>
    {props.label}
  </Button>
)

export default ModalButton;
