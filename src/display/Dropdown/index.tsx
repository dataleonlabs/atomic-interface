import React, { useState } from 'react';
import { Dropdown as StrapDropdown, DropdownToggle } from 'reactstrap';
import { DropdownProps as Props } from './props';
import { StyledDropdownMenu } from './style';

/**
 * DropDown render element
 */

const DropDown = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false)
  
  /* istanbul ignore next  */
  function toggle() {
    setIsOpen(!isOpen)
  }


  return (
    <StrapDropdown isOpen={isOpen} toggle={toggle} {...props}>
      <>
        <DropdownToggle caret={props.caret}>
          {props.title}
        </DropdownToggle>
        <StyledDropdownMenu>
          {props.children}
        </StyledDropdownMenu>
      </>
    </StrapDropdown>
  )
}

export default DropDown;
