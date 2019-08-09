import React from 'react';
import { SidebarProps as Props} from './props';
import {Navbar, NavItem,Nav,Input,Button,NavbarBrand,NavLink} from 'reactstrap';

/**
 * Sidebar render element
 */
const Sidebar = (props: Props) => (
  <div>
   
    <SidebarNav/>
    
  </div>
  

)
const SidebarNav = (props: Props) => (
  <div>
   
   <Nav vertical>
        <SidebarNavItem/>
    </Nav>
    
  </div>

)

const SidebarNavItem = (props: Props) => (
  <div>
          <NavItem>
            <SidebarNavLink/>
          </NavItem>
   
  </div>

)

const SidebarNavLink= (props: Props) => (
  <div>
    <NavLink href="#">Link</NavLink>  
  </div>

)
const SidebarNavBrand= (props: Props) => (
  <div>
    <NavbarBrand href="#">reactstrap</NavbarBrand> 
  </div>

)

export default Sidebar;
