import React from 'react';
import { StepProps as Props } from './props';
import { StyledStep } from './style';


/**
 * Steps render element
 */

const Steps = (props: Props) => {    
  return (
    <StyledStep>{props.children}</StyledStep>
  )
}

export default Steps;
