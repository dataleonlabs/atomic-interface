import React from 'react';
import { NavbarBrandProps as Props } from './props';
import { NavbarBrand as NavbarBrandBase } from 'reactstrap';

/**
 * NavbarBrand render element
 */
const NavbarBrand = (props: Props) => {
  return (
    <NavbarBrandBase {...props}> {props.children}</NavbarBrandBase>
  )
}

export default NavbarBrand;

