import * as React from 'react'
import { HelpIconProps as Props } from './props'
import { HelpCircle } from 'react-feather';
import Popover from './../Popover'

const HelpIcon = (props: Props) => (
  <>
    <HelpCircle id="help-icon" />
    <Popover {...props} target="help-icon" >
      {props.children}
    </Popover>
  </>
);

export default HelpIcon;