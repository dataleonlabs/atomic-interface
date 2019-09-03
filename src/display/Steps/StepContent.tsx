import React from 'react';
import { StepContentProps as Props } from './props';
import { StyledStepContent } from './style';


/**
 * StepIcon render element
 */

const StepContent = (props: Props) => {
  return (
    <StyledStepContent>{props.children}</StyledStepContent>
  )
}

export default StepContent;
