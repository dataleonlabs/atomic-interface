import React from 'react';
import { BrandIconProps as Props } from './props';


/**
 * BrandIcon render element
 */

const BrandIcon = (props: Props) => (
  <span className={`brand-icon-${props.type}`} >
    {props.icon}
  </span>
)

export default BrandIcon;