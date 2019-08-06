import React, { useState } from 'react';
import { Dropdown as StrapDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { DropdownProps as Props } from './props';

/**
 * DropDown render element
 */

const DropDown = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <StrapDropdown isOpen={isOpen} toggle={toggle} {...props}>
      <>
        <DropdownToggle caret={props.caret||undefined}>
          {props.title}
        </DropdownToggle>
        <DropdownMenu>
          {props.children}
        </DropdownMenu>
      </>
    </StrapDropdown>
  )
}

export default DropDown;
