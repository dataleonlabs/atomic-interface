import React from 'react';
import { NavItem } from 'reactstrap';
import { NavItemProps as Props } from './props';

/**
 * TabItem render element
 */

const NavItemBase /* istanbul ignore next  */ = (props: Props) => {
  return (
    <NavItem>
      {props.children}
    </NavItem>
  )
}

export default NavItemBase;
