import React from 'react';
import { BreadcrumbProps as Props } from './props';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


/**
 * BradScrumb render element
 */
const Breadcrumbs= (props: Props) => {
  return(
    <Breadcrumb
    {...props}>
   
        <BreadcrumbItem> <a href="#">Story</a></BreadcrumbItem>
        <BreadcrumbItem> <a href="#">Navigation</a></BreadcrumbItem>
        <BreadcrumbItem  active>Breadcrumb</BreadcrumbItem>
   
     </Breadcrumb>
  )
}
export default Breadcrumbs;
