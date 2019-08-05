import React from 'react';
import { Dropdown as StrapDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { DropdownProps as Props } from './props';

/**
 * DropDown render element
 */

const DropDown = (props: Props) => (
  <StrapDropdown isOpen={props.isOpen} toggle={props.toggle} {...props}>
    <>
      <DropdownToggle caret={props.caret}>
        {props.title}
      </DropdownToggle>
      <DropdownMenu>
        {props.children}
      </DropdownMenu>
    </>
  </StrapDropdown>
)

export default DropDown;
