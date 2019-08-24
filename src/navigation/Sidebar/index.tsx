import React from 'react';
import { SidebarProps as Props } from './props';
import { StyledSidebar } from './style'

/**
 * Sidebar render element
 */

const Sidebar = (props: Props) => (
  <StyledSidebar>
    {props.children}
  </StyledSidebar>
)

export default Sidebar;
