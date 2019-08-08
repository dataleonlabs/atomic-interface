import { 
    NavbarBrandProps as NavbarBrandPropsBase,
    NavProps as NavPropsBase,
    NavItemProps as NavItemPropsBase,
    NavbarProps as NavbarPropsBase
} from "reactstrap";

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

}

export interface NavbarBrandProps extends NavbarBrandPropsBase {

}
interface NavBarObject { 
    name:string 
    route:string 
 } 
export interface NavProps extends NavPropsBase {
children:Array<NavBarObject>
}

export interface NavItemProps extends NavItemPropsBase {

    /** A function invoked when a tab is clicked by the user */
    onClick?: () => void
}

