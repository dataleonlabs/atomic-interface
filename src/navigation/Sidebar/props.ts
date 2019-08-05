import { 
    NavbarBrandProps as NavbarBrandPropsBase,
    NavProps as NavPropsBase,
    NavItemProps as NavItemPropsBase,
    NavbarProps as NavbarPropsBase
} from "reactstrap";

/**
 * @example
 *    <Sidebar expand={false}>
 *       <SidebarBrand>reactstrap</SidebarBrand>
 *       <SidebarNav>
 *         <SidebarNavGroup>Group separator</SidebarNavGroup>
 *         <SidebarNavItem icon={<Icon/>}>Components</SidebarNavItem>
 *         <SidebarNavItem icon={<Icon/>}>Context</SidebarNavItem>
 *       </SidebarNav>
 *    </Sidebar>
 */

export interface SidebarProps extends NavbarPropsBase {
    /** Disable test or only icon on side bar */
    icon?: boolean 
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


export interface SidebarNavGroupProps {

}
