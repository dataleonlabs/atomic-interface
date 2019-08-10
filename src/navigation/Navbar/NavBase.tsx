import React from 'react';
import { Nav } from 'reactstrap';
import { NavProps as Props } from './props';

/**
 * TabItem render element
 */

const NavBase /* istanbul ignore next  */ = (props: Props) => {
  return (
    <Nav>
      {props.children}
    </Nav>
  )
}

export default NavBase;
