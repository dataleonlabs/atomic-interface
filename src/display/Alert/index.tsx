import React from 'react';
import { Alert as StrapAlert } from 'reactstrap';
import { Info } from 'react-feather';
import { AlertProps as Props } from './props';

/**
 * Alert render element
 */

const Alert = (props: Props) => (
  <StrapAlert color={props.color}>
    <>
      {props.icon === true && <Info style={{marginRight:'5px'}}/>}
      {props.children}
    </>
  </StrapAlert>
)

export default Alert;
