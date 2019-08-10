import React from 'react';
import { SidebarProps as Props } from './props';
import { NavbarBrand } from 'reactstrap';

/**
 * SidebarBrand render element
 */
const SidebarBrand = (props: Props) => (
  <NavbarBrand {...props}>
    {props.children}
  </NavbarBrand>
)

export default SidebarBrand;
