import React from 'react';
import { SidebarProps as Props } from './props';
import { Navbar } from 'reactstrap';
import {StyledSidebarNav} from './styles'

/**
 * Sidebar render element
 */

const Sidebar = (props: Props) => {

  return (
    <StyledSidebarNav>
    <Navbar className="sidebar" {...props}>
        {props.children}
    </Navbar>
    </StyledSidebarNav>
  )
}

export default Sidebar;
