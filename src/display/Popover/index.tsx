import React from 'react';
import { UncontrolledPopover as StrapUncontrolledPopover , PopoverHeader, PopoverBody } from 'reactstrap';
import { PopoverProps as Props } from './props';

/**
 * ModalButton render element
 */

const Popover = (props: Props) => (
  <StrapUncontrolledPopover placement="right" trigger= "focus" {...props}>
    <>
      <PopoverHeader>
        {props.header}
      </PopoverHeader>
      <PopoverBody>
        {props.children}
      </PopoverBody>
    </>
  </StrapUncontrolledPopover>
)

export default Popover;
