import React from 'react';
import { EmptyPromptIconProps as Props } from './props';
import { StyledIcon } from './style';

/**
 * Icon
 */

const Icon = (props: Props) => (
  <StyledIcon>
    {props.children}
  </StyledIcon>
)

export default Icon;
