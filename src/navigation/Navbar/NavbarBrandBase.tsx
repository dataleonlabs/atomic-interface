import React from 'react';
import { NavbarBrand } from 'reactstrap';
import { NavbarBrandProps as Props } from './props';

/**
 * TabItem render element
 */

const NavbarBrandBase /* istanbul ignore next  */ = (props: Props) => {
  return (
    <NavbarBrand href={props.linkURL}>
      {props.children}
    </NavbarBrand>
  )
}

export default NavbarBrandBase;
