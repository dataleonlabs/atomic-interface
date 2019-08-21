import React from 'react';
import {
    NavbarBrandProps as NavbarBrandPropsBase,
    NavProps as NavPropsBase,
    NavItemProps as NavItemPropsBase,
    NavbarProps as NavbarPropsBase,
    NavLinkProps as NavLinkPropsBase
} from "reactstrap";

/**
 * This component must use https://reactstrap.github.io/components/navs/ with vertical
 * @example
 *    <Sidebar expand={false}>
 *       <Brand>reactstrap</Brand>
 *       <Nav>
 *         <NavHeader>Group separator</NavHeader>
 *         <NavItem>Components</NavItem>
 *         <NavItem>Context</NavItem>
 *       </Nav>
 *    </Sidebar>
 */

export interface SidebarProps extends NavbarPropsBase {
    /** Disable test or only icon on side bar */
    icon?: boolean

    /** children content in Sidebar */
    children: string | JSX.Element | JSX.Element[]
}

export interface BrandProps extends NavbarBrandPropsBase {

}

export interface NavProps extends NavPropsBase {

}

export interface ItemProps extends NavItemPropsBase {

    /** icon disable */
    icon?: JSX.Element

    /** A function invoked when a tab is clicked by the user */
    onClick?: () => void
    children: string | JSX.Element | JSX.Element[]
}

export interface NavLinkProps extends NavLinkPropsBase {

}

export interface NavHeaderProps {
    // /** children content in NavItemHeaderProps */
    children: string | JSX.Element | JSX.Element[]
}

export interface NavIconProps {
    type: 'left' | 'right'
    children: string | JSX.Element | JSX.Element[]
}

export interface NavTextProps extends React.HTMLAttributes<HTMLElement> {
    children: any
}