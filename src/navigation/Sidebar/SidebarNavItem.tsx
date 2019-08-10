import React from 'react';
import { SidebarItemProps as Props } from './props';
import { NavItem } from 'reactstrap';

/**
 * SidebarNavItem render element
 */
const SidebarNavItem = (props: Props) => (
  <NavItem {...props}>
    <div className="nav-link">{props.children}</div>
  </NavItem>
)

export default SidebarNavItem;
