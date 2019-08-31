/* istanbul ignore next */
import React from 'react';
import { SidebarProps as Props } from './props';
import { NavbarBrand } from 'reactstrap';

/**
 * Brand render element
 */
/* istanbul ignore next */
const Brand = (props: Props) => (
  props.iconsOnly ? null:
  <NavbarBrand {...props}>
    {props.children}
  </NavbarBrand>
)

/* istanbul ignore next */
export default Brand;
