import React from 'react';
import { Navbar} from 'reactstrap';
import { NavbarProps as navbarProps } from './props';

/**
 * NavBar render element
 */
const NavbarBase = (props: navbarProps) => (  
    <>
    <div>
    <Navbar>
        {props.children}
    </Navbar>
    </div>
    </>
)

export default NavbarBase;

