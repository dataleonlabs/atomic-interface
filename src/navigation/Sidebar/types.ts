import { 
    NavbarBrandProps as NavbarBrandPropsBase,
    NavProps as NavPropsBase,
    NavItemProps as NavItemPropsBase
} from "reactstrap";

/**
 * @example
 *    <Sidebar expand={false}>
 *       <SidebarBrand>reactstrap</SidebarBrand>
 *       <SidebarNav>
 *         <SidebarNavItemGroup>Group</SidebarNavItemGroup>
 *         <SidebarNavItem icon={<Icon/>}>Components</SidebarNavItem>
 *         <SidebarNavItem icon={<Icon/>}>Context</SidebarNavItem>
 *       </SidebarNav>
 *    </Sidebar>
 */

export interface SidebarBrandProps extends NavbarBrandPropsBase {

}

export interface SidebarNavProps extends NavPropsBase {

}

export interface SidebarItemProps extends NavItemPropsBase {

    /** Add icon */
    icon?: JSX.Element

    /** A function invoked when a tab is clicked by the user */
    onClick?: () => void
}


export interface SidebarNavItemGroupProps {

}

