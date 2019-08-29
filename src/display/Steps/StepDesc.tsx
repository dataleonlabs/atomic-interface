import React from 'react';
import { StepDescProps as Props } from './props';
import { StyledStepDesc } from './style';


/**
 * StepDesc render element
 */

const StepDesc = (props: Props) => {
  return (
    <StyledStepDesc>{props.children}</StyledStepDesc>
  )
}

export default StepDesc;
