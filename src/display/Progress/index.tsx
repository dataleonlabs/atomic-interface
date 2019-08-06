import React from 'react';
import { Progress as StrapProgress } from 'reactstrap';
import { ProgressProps as Props } from './props';

/**
 * Progress render element
 */

const Progress = (props: Props) => (
  <StrapProgress {...props}>
    {props.children}
  </StrapProgress>
)

export default Progress;
