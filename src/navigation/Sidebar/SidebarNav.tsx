import React from 'react';
import { SidebarProps as Props } from './props';
import { Nav } from 'reactstrap';

/**
 * SidebarNav render element
 */
const SidebarNav = (props: Props) => (
  <Nav className="SidebarNav" {...props} vertical={true} >
    {props.children}
  </Nav>
)

export default SidebarNav;
