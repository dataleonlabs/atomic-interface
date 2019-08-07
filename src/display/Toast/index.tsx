import React from 'react';
import { Toast as StrapToast } from 'reactstrap';
import { ToastProps as Props } from './props';
import { ToastHeader, ToastBody } from 'reactstrap';

/**
 * Toast render element
 */

const Toast = (props: Props) => {
  return (
    <StrapToast {...props} >
      <ToastHeader toggle={props.toggle}>{props.title}</ToastHeader>
      <ToastBody>
        {props.children}
      </ToastBody>
    </StrapToast>
  )
}

export default Toast;
