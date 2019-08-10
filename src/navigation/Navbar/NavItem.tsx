import React from 'react';
import { NavItemProps as Props } from './props';
import { NavItem as NavItemBase } from 'reactstrap';
/**
 * NavItem render element
 */
const NavItem = (props: Props) => (
  <NavItemBase {...props}>{props.children}</NavItemBase>
)

export default NavItem;
