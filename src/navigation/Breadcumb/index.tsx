import React from 'react';
import { Breadcrumb as BreadcrumbBase } from 'reactstrap';
import { BreadcrumbProps as Props } from './props';
import { StyledBreadcrumb } from './style';

/**
 * Breadcrumb render element
 */
const Breadcrumb = (props: Props) => (
  <StyledBreadcrumb>
    <BreadcrumbBase {...props} >
    </BreadcrumbBase>
  </StyledBreadcrumb>
)

export default Breadcrumb;