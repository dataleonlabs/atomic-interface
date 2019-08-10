import React from 'react';
import { NavProps as Props } from './props';
import { Nav as NavBase } from 'reactstrap';

/**
 * Nav render element
 */
const Nav = (props: Props) => (
  <NavBase className="ml-auto" navbar={true}>
    {props.children}
  </NavBase>
)

export default Nav;
