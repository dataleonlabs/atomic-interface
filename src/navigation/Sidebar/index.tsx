import React from 'react';
import { SidebarProps as Props } from './props';
import { Nav } from 'reactstrap';

/**
 * Sidebar render element
 */

const Sidebar = (props: Props) => {

  return (
    <Nav {...props}>
        {props.children}
    </Nav>
  )
}

export default Sidebar;
