import React from 'react';
import { ButtonToolbarProps as Props } from './props';
import { ButtonToolbar as ButtonToolbarBase } from 'reactstrap';

/**
 * OptionItem render element
 */
const ButtonToolbar = (props: Props) => {
  return (
    <ButtonToolbarBase {...props}>
      {props.children}
    </ButtonToolbarBase>
  )
}

export default ButtonToolbar;