import React from 'react';
import { SidebarNavGroupProps as Props } from './props';
import { ListGroupItem } from 'reactstrap';
import {StyledListGroupItem} from './styles'

/**
 * ListGroupItem render element
 */

const SidebarNavGroupItem = (props: Props) => {

  return (
    <StyledListGroupItem>
    <ListGroupItem  {...props}>
        {props.children}
    </ListGroupItem>
    </StyledListGroupItem>
  )
}

export default SidebarNavGroupItem;
