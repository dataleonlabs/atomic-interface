import React from 'react';
import { NavTextProps as Props } from './props';

/**
 * NavHeader render element
 */
const NavText = (props: Props) => (

  <span className={`sidebar-item-text`}>
    {props.children}
  </span>
)

export default NavText;
