import React from 'react';
import { Badge as StrapBadge } from 'reactstrap';
import { BadgeProps as Props } from './props';

/**
 * Badge render element
 */

const Badge = (props: Props) => (
  <StrapBadge color={props.color} pill={props.pill}>
    <>
      {props.children}
    </>
  </StrapBadge>
)

export default Badge;
