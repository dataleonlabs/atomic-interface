import React from 'react';
import { NavbarProps as Props } from './props';
import { StyledNavbar } from './style';

/**
 * NavBar render element
 */
const Navbar = (props: Props) => {
  
  return (
    <StyledNavbar {...props} color="light" light={true} expand="md">
      {props.children}
    </StyledNavbar>
  )
}

export default Navbar;

