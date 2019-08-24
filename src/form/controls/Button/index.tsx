import React from 'react';
import { Button as ButtonBase, Spinner } from 'reactstrap';
import { ButtonProps as Props } from './props';
import { StyledButton } from './style';

/**
 * Button render element
 */
const Button = (props: Props) => (
  <StyledButton>
    <ButtonBase {...props} disabled={props.disabled || props.loading} loading={props.loading === true ? 'true': 'false'}>
      {props.icon && <span className={`Icon ${props.size || 'md'}`}>{props.icon}</span>}
      {props.children}
      {props.loading && <Spinner className="Spinner" size={'sm'} />}
    </ButtonBase>
  </StyledButton>
)

export default Button;