import React from 'react';
import { NavLink } from 'reactstrap';
import { NavLinkProps as Props } from './props';

/**
 * TabItem render element
 */

const NavLinkBase /* istanbul ignore next  */ = (props: Props) => {
  return (
    <NavLink href={props.linkURL}>
      {props.children}
    </NavLink>
  )
}
export default NavLinkBase;
