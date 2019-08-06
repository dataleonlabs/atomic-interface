import React from 'react';
import { Toast as StrapToast } from 'reactstrap';
import { ToastProps as Props } from './props';

/**
 * Toast render element
 */

const Toast = (props: Props) => {
  return (
    <StrapToast {...props} >
      {props.children}
    </StrapToast>
  )
}

export default Toast;
