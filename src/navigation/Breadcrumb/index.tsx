import React from 'react';
import { BreadcrumbProps as Props } from './props';
import { StyledBreadcrumb } from './style';
import Loader, { StyledLoader } from './loader';

/**
 * Breadcrumb render element
 */
const Breadcrumb = (props: Props) => {
  const { loading, ...rest } = props;

  if (loading === true) {
    return <StyledLoader><Loader /></StyledLoader>
  }

  return (
    <StyledBreadcrumb {...rest}>{rest.children}</StyledBreadcrumb>
  )
}
export default Breadcrumb;
