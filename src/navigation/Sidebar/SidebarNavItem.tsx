import React from 'react';
import { SidebarItemProps as Props } from './props';
import { NavItem,NavLink,Badge } from 'reactstrap';
import {StyledNavLink} from './styles'

/**
 * SidebarNavItem render element
 */

const SidebarNavItem = (props: Props) => {

  return (
   
    <NavItem {...props}>
            {props.badge?
             <Badge href={props.link} color={props.badge} active={props.active}>
              {props.icon}
              {props.children}         
             </Badge>
             :
            
              <NavLink href={props.link} active={props.active}>
              <div style={{marginRight:'5px',float:'left'}}>{props.icon}</div>
              {props.children}
              </NavLink>
      
            }
           
    
    </NavItem>
    
  )
}

export default SidebarNavItem;
