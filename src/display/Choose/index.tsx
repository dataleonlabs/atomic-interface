import React from 'react';
import { CloudRain } from 'react-feather';
import { ChooseProps as Props } from './props';
import { CustomInput } from 'reactstrap';
import { StyledUncontrolledChoose } from './style';

const Choose = (props: Props) => {
  return (
    <StyledUncontrolledChoose>
      <CustomInput
        {...props}
        id={props.id || props.name}
        label={props.title}
        type='checkbox'
      >
        {props.icon === true && <CloudRain size={23} className="checkIcon"/>}
        {props.children}
      </CustomInput>
    </StyledUncontrolledChoose>
  )
}

export default Choose;
