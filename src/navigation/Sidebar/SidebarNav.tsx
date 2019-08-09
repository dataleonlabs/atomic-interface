import React from 'react';
import { SidebarProps as Props } from './props';
import { Nav } from 'reactstrap';

/**
 * SidebarNav render element
 */

const SidebarNav = (props: Props) => {

  return (
    <Nav vertical={props.vertical || true} color={props.color} light={props.light} {...props}>
        {props.children}
    </Nav>
  )
}

export default SidebarNav;
