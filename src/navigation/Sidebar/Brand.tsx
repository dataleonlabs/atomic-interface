import React from 'react';
import { SidebarProps as Props } from './props';
import { NavbarBrand } from 'reactstrap';

/**
 * Brand render element
 */
const Brand = (props: Props) => (
  props.iconsOnly?null:
  <NavbarBrand {...props}>
    {props.children}
  </NavbarBrand>
)

export default Brand;
