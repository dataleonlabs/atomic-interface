/// <reference types="react" />
import { NavProps as NavPropsBase, NavItemProps as NavItemPropsBase, NavbarProps as NavbarPropsBase } from "reactstrap";
/**
 * Tihs component use bootstrap: documentation https://reactstrap.github.io/components/navbar/
 * @example
 *    <Navbar color="light" light expand="md">
 *       <NavbarBrand href="/">reactstrap</NavbarBrand>
 *       <Nav className="ml-auto">
 *         <NavItem>Components</NavItem>
 *         <NavItem>GitHub</NavItem>
 *       </Nav>
 *    </Navbar>
 */
export interface NavbarProps extends NavbarPropsBase {
    /** Children */
    children: NavItemProps;
    size?: 'md' | 'lg';
}
export interface NavbarBrandProps {
    className?: string;
    href?: string;
    /** trigger on click */
    onClick?: React.MouseEventHandler<any>;
    /** Children */
    children: string | JSX.Element | Element;
}
export interface NavProps extends NavPropsBase {
}
export interface NavItemProps extends NavItemPropsBase {
}
export interface NavLinkProps {
    tag?: React.ReactType;
    innerRef?: React.Ref<HTMLAnchorElement>;
    disabled?: boolean;
    active?: boolean;
    className?: string;
    onClick?: React.MouseEventHandler<any>;
    href?: string;
    /** Children */
    children: string | JSX.Element | Element;
}
