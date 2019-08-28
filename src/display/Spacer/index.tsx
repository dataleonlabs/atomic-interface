import React from 'react';
import { SpacerProps as Props } from './props';
import { StyledSpacer } from './style';

/**
 * Tooltip render element
 */

const Spacer = (props: Props) => {  

  
  return (
    <StyledSpacer size={props.size}>&nbsp;</StyledSpacer>
  )
}

export default Spacer;
