import * as React from 'react'
import { HelpIconProps as Props } from './props'
import { HelpCircle } from 'react-feather';
import Popover from './../Popover';
import { makeId } from '../../utils';


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