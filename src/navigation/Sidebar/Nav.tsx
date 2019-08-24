import React from 'react';
import { SidebarProps as Props } from './props';
import { Nav as NavBase } from 'reactstrap';

/**
 * Nav render element
 */
const Nav = (props: Props) => (
  <NavBase className="SidebarNav" {...props} vertical={true} >
    {props.children}
  </NavBase>
)

export default Nav;
