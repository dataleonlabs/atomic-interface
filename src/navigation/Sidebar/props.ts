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
 *       <SidebarBrand>reactstrap</SidebarBrand>
 *       <SidebarNav>
 *         <SidebarNavHeader>Group separator</SidebarNavHeader>
 *         <SidebarNavItem>Components</SidebarNavItem>
 *         <SidebarNavItem>Context</SidebarNavItem>
 *       </SidebarNav>
 *    </Sidebar>
 */

export interface SidebarProps extends NavbarPropsBase {
    /** Disable test or only icon on side bar */
    icon?: boolean

    /** children content in Sidebar */
    children: string | JSX.Element | JSX.Element[]
}

export interface SidebarBrandProps extends NavbarBrandPropsBase {

}

export interface SidebarNavProps extends NavPropsBase {

}

export interface SidebarItemProps extends NavItemPropsBase {

    /** icon disable */
    icon?: JSX.Element

    /** A function invoked when a tab is clicked by the user */
    onClick?: () => void
}

export interface SidebarNavLinkProps extends NavLinkPropsBase {

}

export interface SidebarNavHeaderProps {
    // /** children content in SidebarNavItemHeaderProps */
    children: string | JSX.Element | JSX.Element[]
}

export interface SidebarNavIconProps {
    type: 'left' | 'right'
    children: string | JSX.Element
}

export interface SidebarNavTextProps {
    children: string | JSX.Element
}