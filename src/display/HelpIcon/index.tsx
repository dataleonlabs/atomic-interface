/* istanbul ignore next  */
import * as React from 'react'
/* istanbul ignore next  */
import { HelpIconProps as Props } from './props'
/* istanbul ignore next  */
import { HelpCircle } from 'react-feather';
/* istanbul ignore next  */
import Popover from './../Popover';
/* istanbul ignore next  */
import { makeId } from '../../utils';

/* istanbul ignore next  */
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
/* istanbul ignore next  */
export default HelpIcon;