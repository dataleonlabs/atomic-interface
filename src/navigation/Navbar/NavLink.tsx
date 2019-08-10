import React from 'react';
import { NavLinkProps as Props } from './props';
import { NavLink as NavLinkBase } from 'reactstrap';

/**
 * NavLink render element
 */
const NavLink = (props: Props) => (
  <NavLinkBase {...props}>{props.children}</NavLinkBase>
)

export default NavLink;
