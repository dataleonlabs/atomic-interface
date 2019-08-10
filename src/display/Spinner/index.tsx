import React from 'react';
import { Spinner as StrapSpinner } from 'reactstrap';
import { SpinnerProps as Props } from './props';

/**
 * Spinner render element
 */

const Spinner = (props: Props) => {
  const { ref, ...rest } = props;
  return (
    <StrapSpinner {...rest} />
  )
}

export default Spinner;
