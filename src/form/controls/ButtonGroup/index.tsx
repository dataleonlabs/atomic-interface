/* istanbul ignore next */
import React from 'react';
/* istanbul ignore next */
import { ButtonGroup as ButtonGroupBase } from 'reactstrap';
import { ButtonGroupProps as Props } from './props';

/**
 * OptionBox render element
 */
/* istanbul ignore next */
const ButtonGroup = (props: Props) /* istanbul ignore next */ => {
/* istanbul ignore next */
  return (
    <ButtonGroupBase {...props}>
      {props.children}
    </ButtonGroupBase>
  )
}

/* istanbul ignore next */
export default ButtonGroup;