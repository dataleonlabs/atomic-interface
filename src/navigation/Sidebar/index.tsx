import React from 'react';
import { SidebarProps as Props } from './props';
import { Navbar } from 'reactstrap';

/**
 * Sidebar render element
 */

const Sidebar = (props: Props) => {

  return (
    <Navbar {...props}>
        {props.children}
    </Navbar>
  )
}

export default Sidebar;
