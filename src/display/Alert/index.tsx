import React from 'react';
import { Alert as StrapAlert } from 'reactstrap';
import { Info } from 'react-feather';
import { AlertProps as Props } from './props';
import { StyledAlert } from './style';

/**
 * Alert render element
 */

const Alert = (props: Props) => (
  <StyledAlert >
    <StrapAlert color={props.color} {...props} icon={undefined}>
      <>
          {props.icon === true && <Info size={20} style={{ marginRight: '5px' }} className="alertIcon"/>}
          <span className="Text">{props.children}</span>
      </>
    </StrapAlert>
  </StyledAlert>
)

export default Alert;
