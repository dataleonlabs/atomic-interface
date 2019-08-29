import React from 'react';
import { StepLinkProps as Props } from './props';
import { StyledStepLink } from './style';
import { ArrowRight } from 'react-feather';

/**
 * StepLink render element
 */

const StepLink = (props: Props) => {
  return (
    <StyledStepLink {...props}>
      {props.children}
      <div id="arrow">
        <ArrowRight size={17} />
      </div>
    </StyledStepLink>
  )
}

export default StepLink;
