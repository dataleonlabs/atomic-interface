import React from 'react';
import { StepIconProps as Props } from './props';
import { StyledStepIcon } from './style';


/**
 * StepIcon render element
 */

const StepIcon = (props: Props) => {    
  return (
    <StyledStepIcon>{props.children}</StyledStepIcon>
  )
}

export default StepIcon;
