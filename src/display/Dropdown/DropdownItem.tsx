import React from 'react';
import { DropdownItem as StrapDropdownItem } from 'reactstrap';
import { DropdownItemProps as Props } from './props';

/**
 * DropDownItem render element
 */

const DropDownItem = (props: Props) => (
  <StrapDropdownItem {...props}>
    {props.children}
  </StrapDropdownItem>
)

export default DropDownItem;
