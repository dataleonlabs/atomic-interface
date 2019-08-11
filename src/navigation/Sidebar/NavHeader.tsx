import React from 'react';
import { NavHeaderProps as Props } from './props';

/**
 * NavHeader render element
 */
const NavHeader = (props: Props) => (
  <div className="NavHeader">
    {props.children}
  </div>
)

export default NavHeader;
