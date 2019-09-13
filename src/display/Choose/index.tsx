import React from 'react';
import { ChooseProps as Props } from './props';
import { Label } from 'reactstrap';
import { StyledUncontrolledChoose } from './style';

const Choose = (props: Props) => {
  return (
    <StyledUncontrolledChoose icon={props.icon} backgroundColorOnHover={props.backgroundColorOnHover || '#f5f6fd'} active={props.active} backgroundColorOnActive={props.backgroundColorOnActive || '#fff'}>
      <div className="choose-content">
        {props.icon}
        {props.title && (
          <Label id={props.id || props.name} sm={props.labelSize || 12}>
            {props.title}
          </Label>
        )}
        {props.badge && <span className="choose-content-badge">{props.badge}</span>}
        {props.children}
      </div>
    </StyledUncontrolledChoose>
  )
}

export default Choose;
