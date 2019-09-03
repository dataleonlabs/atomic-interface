import React from 'react';
import { StepItemProps as Props } from './props';
import { StyledStepItem, StyledStepItemActive, StyledStepItemComplete } from './style';

/**
 * StepItem render element
 */

const StepItem = (props: Props) => {
  if (props.state === "active") {
    return (
      <StyledStepItemActive>{props.children}</StyledStepItemActive>
    )
  } else if (props.state === "complete") {
    return (
      <StyledStepItemComplete>{props.children}</StyledStepItemComplete>
    )
  } else {
    return (
      <StyledStepItem>{props.children}</StyledStepItem>
    )
  }
}

StepItem.defaultprops = { active: false }

export default StepItem;
