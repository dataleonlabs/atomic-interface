import React from 'react';
import { BreadcrumbItem as BreadcrumbItemBase } from 'reactstrap';
import { BreadcrumbItemProps as Props } from './props';

/**
 * SidebarBrand render element
 */

const BreadcrumbItem = (props: Props) => (
  <BreadcrumbItemBase {...props}> {props.children}</BreadcrumbItemBase>
)

export default BreadcrumbItem;
