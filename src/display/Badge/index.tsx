import React from 'react';
import { Badge as StrapBadge } from 'reactstrap';
import { BadgeProps as Props } from './props';
import { StyledBadge } from './style';
/**
 * Badge render element
 */

const Badge = (props: Props) => (
  <StyledBadge>
    <StrapBadge color={props.color} pill={props.pill}>
      <>
        {props.children}
      </>
    </StrapBadge>
  </StyledBadge>
)

export default Badge;
