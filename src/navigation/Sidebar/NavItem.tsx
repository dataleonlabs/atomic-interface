import React from 'react';
import { ItemProps as Props } from './props';
import { NavItem as NavItemBase } from 'reactstrap';

/**
 * NavItem render element
 */
const NavItem = (props: Props) => (
  <NavItemBase {...props}>
    <div className="nav-link">{props.children}</div>
  </NavItemBase>
)

export default NavItem;
