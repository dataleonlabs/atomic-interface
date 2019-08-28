import React from 'react';
import { HealthProps as Props } from './props';
import { StyledHealth } from './style';
/**
 * Health render element
 */

const Health = (props: Props) => {

  return (
    <StyledHealth size={props.size} color={props.color}>
      <div>
        <svg>
        </svg>
        <span> {props.children}</span>
      </div>
    </StyledHealth>
  )
}

export default Health;
