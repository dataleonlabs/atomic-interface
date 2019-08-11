import React from 'react';
import { NavIconProps as Props } from './props';

/**
 * NavHeader render element
 */
const NavHeader = (props: Props) => (
  <span className={`icon-nav-${props.type}`}>
    {props.children}
  </span>
)

export default NavHeader;
