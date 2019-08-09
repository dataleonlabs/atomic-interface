import React from 'react';
import { SidebarNavGroupProps as Props } from './props';
import { ListGroup } from 'reactstrap';

/**
 * SidebarNavGroup render element
 */

const SidebarNavGroup = (props: Props) => {

  return (
      <div>
          <h2>{props.title}</h2>
          <ListGroup  {...props}>
            {props.children}
         </ListGroup>
      </div>
    
  )
}

export default SidebarNavGroup;
