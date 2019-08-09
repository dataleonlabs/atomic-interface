import React from 'react';
import { PopoverHeader, PopoverBody } from 'reactstrap';
import { PopoverProps as Props } from './props';
import { StyledUncontrolledPopover } from './style';

/**
 * ModalButton render element
 */

const Popover = (props: Props) => (
  <StyledUncontrolledPopover placement="right" trigger= "focus" {...props}>
    <>
      <PopoverHeader>
        {props.header}
      </PopoverHeader>
      <PopoverBody>
        {props.children}
      </PopoverBody>
    </>
  </StyledUncontrolledPopover>
)

export default Popover;
