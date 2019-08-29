import React from 'react';
import { StepTitleProps as Props } from './props';
import { StyledStepTitle } from './style';


/**
 * StepTitle render element
 */

const StepTitle = (props: Props) => {
  return (
    <StyledStepTitle>{props.children}</StyledStepTitle>
  )
}

export default StepTitle;
