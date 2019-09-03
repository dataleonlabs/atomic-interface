import React from 'react';
import { StepNumberProps as Props } from './props';
import { StyledStepNumber } from './style';


/**
 * StepNumber render element
 */

const StepNumber = (props: Props) => {
  return (
    <StyledStepNumber>{props.children}</StyledStepNumber>
  )
}

export default StepNumber;
