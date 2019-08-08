import * as React from 'react'
import { HelpIconProps as Props } from './props'
import { HelpCircle } from 'react-feather';
import Popover from './../Popover'

const HelpIcon = (props: Props) => (
  <span>
    <HelpCircle id="help-icon" size={17} />
    <Popover {...props} target="help-icon" >
      {props.children}
    </Popover>
  </span>
);

export default HelpIcon;