/* istanbul ignore next */
import React from 'react';
/* istanbul ignore next */
import { ButtonToolbarProps as Props } from './props';
/* istanbul ignore next */
import { ButtonToolbar as ButtonToolbarBase } from 'reactstrap';

/**
 * OptionItem render element
 */
/* istanbul ignore next */
const ButtonToolbar = (props: Props) /* istanbul ignore next */ => {
  return (
    <ButtonToolbarBase {...props}>
      {props.children}
    </ButtonToolbarBase>
  )
}

/* istanbul ignore next */
export default ButtonToolbar;