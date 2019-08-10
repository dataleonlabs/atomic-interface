import React from 'react';
import { BreadcrumbProps as Props } from './props';
import { Breadcrumb as BreadcrumbBase } from 'reactstrap';


/**
 * Breadcrumb render element
 */
const Breadcrumb = (props: Props) => (
  <BreadcrumbBase {...props}>{props.children}</BreadcrumbBase>
)
export default Breadcrumb;
