import { BreadcrumbProps as BreadcrumbPropsBase, BreadcrumbItemProps as BreadcrumbItemPropsBase } from "reactstrap";

/**
 * Tihs component use bootstrap: documentation https://reactstrap.github.io/components/breadcrumbs/
 * @example
 *   <Breadcrumb>
 *      <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
 *      <BreadcrumbItem active>Library</BreadcrumbItem>
 *   </Breadcrumb>
 */

export interface BreadcrumbItemProps extends BreadcrumbItemPropsBase {

}

export interface BreadcrumbProps extends BreadcrumbPropsBase {

}

