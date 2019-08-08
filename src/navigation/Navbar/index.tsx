import React from 'react';
import { NavbarProps as Props } from './props';
import {Navbar, NavItem,Nav,Input,Button,NavbarBrand} from 'reactstrap';

/**
 * Navbar render element
 */
const NavBar = (props: Props) => (
  <div>
   
    {props.renderSearch &&
    <Input 
    type="search"
    name="search"
    id="Search"
    placeholder="search"/> }
    <div>
     <Navbar {...props}>
        <Nav  navbar>
        <NavItem>{props.routeOne}</NavItem>
        <NavItem>{props.routeTwo}</NavItem>
        </Nav>
    </Navbar>
    {props.renderRightButton &&
      <Button color="primary">Add</Button>
    }
    </div>
   
    {
      props.renderBrand &&  <NavbarBrand href="#">reactstrap</NavbarBrand>
    }
    
  </div>
  

)

export default NavBar;
