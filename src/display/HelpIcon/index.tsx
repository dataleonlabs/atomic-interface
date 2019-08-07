import * as React from 'react'
import { HelpIconProps as Props } from './props'
import Popover from './../Popover/index'

const HelpIcon = (props: Props) => (
  <>
    <span className={'Style'} id="help-icon">?</span>
    <Popover
      {...props}
      target="help-icon"
    >
      {props.children}
    </Popover>
  </>
);

export default HelpIcon;