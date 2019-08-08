import * as React from 'react'
import { HelpIconProps as Props } from './props'
import { HelpCircle } from 'react-feather';
import Popover from './../Popover'

function makeId(length: number = 5) {
  var result = 'y';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const HelpIcon = (props: Props) => {
  const target = `help-icon${makeId(2)}`;
  return (
    <span>
      <HelpCircle id={target} size={17} />
      <Popover {...props} target={target} >
        {props.children}
      </Popover>
    </span>
  );
}

export default HelpIcon;