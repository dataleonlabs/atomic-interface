import React from 'react';
import { SidebarProps as Props,SidebarBrandProps as BrandProps,SidebarItemProps as ItemProps, SidebarNavProps as NavProps, SidebarNavLinkProps as NavLinkProps} from './props';
import {Navbar, NavItem,Nav,Input,Button,NavbarBrand,NavLink} from 'reactstrap';

/**
 * Sidebar render element
 */
const Sidebar = (props: Props) => (
  <div>
   
    <SidebarNav link={props.link} name={props.name} />
    
  </div>

)
const SidebarNav = (props: NavProps) => (

   
   <Nav vertical>
        <SidebarNavItem link={props.link} name={props.name}/>
   </Nav>
  
)

const SidebarNavItem = (props:ItemProps ) => (
  
          <NavItem>
            <SidebarNavLink link={props.link} name={props.name}/>
          </NavItem>
)

const SidebarNavLink= (props: NavLinkProps) => (
 
    <NavLink href={props.link}>name</NavLink>  
 
)
const SidebarNavBrand= (props: BrandProps) => (
  
    <NavbarBrand href={props.link}>{props.name}</NavbarBrand> 


)

export {Sidebar,SidebarNavBrand,SidebarNavLink,SidebarNavItem,SidebarNav};
