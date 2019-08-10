import React from 'react';
import { SidebarProps as Props } from './props';
import { Nav } from 'reactstrap';
import {StyledSidebar} from './styles'

/**
 * SidebarNav render element
 */

const SidebarNav = (props: Props) => {

  return (
    <StyledSidebar>
    <Nav class="sidebarNav" vertical={props.vertical || true} color={props.color} light={props.light} {...props}>
        {props.children}
    </Nav>
    </StyledSidebar>
  )
}

export default SidebarNav;
