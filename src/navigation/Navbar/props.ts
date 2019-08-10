import { 
    NavbarBrandProps as NavbarBrandPropsBase,
    NavProps as NavPropsBase,
    NavItemProps as NavItemPropsBase,
    NavbarProps as NavbarPropsBase    
} from "reactstrap";
import { ReactNode } from "react";

/**
 * Tihs component use bootstrap: documentation https://reactstrap.github.io/components/navbar/
 * @example
 *    <Navbar color="light" light expand="md">
 *       <NavbarBrand href="/">reactstrap</NavbarBrand>
 *       <Nav className="ml-auto" navbar>
 *         <NavItem>Components</NavItem>
 *         <NavItem>GitHub</NavItem>
 *       </Nav>
 *    </Navbar>
 */

export interface NavbarProps extends NavbarPropsBase {
    children?: ReactNode
}

export interface NavbarBrandProps extends NavbarBrandPropsBase {    
    linkURL?: any;
    children?: ReactNode
}

export interface NavProps extends NavPropsBase {
    /* add children */
    children?: ReactNode
}

export interface NavLinkProps {        
    linkURL?: any;

    /* add children */
    children?: ReactNode
}

export interface CollapseProps {
    /* add children */
    children?: ReactNode
    isOpen?:boolean;
    id?:any;
}

export interface NavbarTogglerProps {    
    /** A function invoked when a tab is clicked by the user */
    onClick?: () => void;    
    className?:any;
}

export interface NavItemProps extends NavItemPropsBase {
    /* add children */
    children?: ReactNode
}

