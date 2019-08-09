import React from 'react';
import { NavbarToggler } from 'reactstrap';
import { NavbarTogglerProps as Props } from './props';
import { Menu } from 'react-feather';

/**
 * TabItem render element
 */


const NavbarTogglerBase /* istanbul ignore next  */ = (props: Props) => {    
  return (
    <NavbarToggler {...props}>
      <Menu color="black" size={48} />
    </NavbarToggler>
  )
}
export default NavbarTogglerBase;
