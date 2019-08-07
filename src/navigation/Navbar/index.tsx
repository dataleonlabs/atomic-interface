import React from 'react';
import { NavbarProps as Props } from './props';
import {Navbar, NavItem,Nav} from 'reactstrap';

/**
 * Navbar render element
 */
const NavBar = (props: Props) => (
  <Navbar color="light" light expand="md" fixed="right" {...props}>
    <Nav className="ml-auto" navbar>
    <NavItem>Componant</NavItem>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavItem>Navbar</NavItem>
    </Nav>
 </Navbar>

)

export default NavBar;
