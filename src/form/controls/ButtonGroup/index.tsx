import React from 'react';
import { ButtonGroup as ButtonGroupBase } from 'reactstrap';
import { ButtonGroupProps as Props } from './props';

/**
 * OptionBox render element
 */
const ButtonGroup = (props: Props) => {

  return (
    <ButtonGroupBase {...props}>
      {props.children}
    </ButtonGroupBase>
  )
}

export default ButtonGroup;