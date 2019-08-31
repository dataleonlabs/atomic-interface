/* istanbul ignore next */
import React from 'react';
import { ItemProps as Props } from './props';
import { NavItem as NavItemBase } from 'reactstrap';
import Loader, { StyledLoader } from './loader';

/**
 * NavItem render element
 */
/* istanbul ignore next */
const NavItem = (props: Props) => {
  const { loading, ...rest } = props;

  /* istanbul ignore next */
  if (loading === true) {
    /* istanbul ignore else */
    if(Array.isArray(rest.children)){
      return (<StyledLoader><Loader iconOnly={false} /></StyledLoader>)
    }else{
      return (<StyledLoader><Loader iconOnly={true} /></StyledLoader>)
    }    
  }

  /* istanbul ignore next */
  return(
    <NavItemBase {...rest}>
      <div className="nav-link">{rest.children}</div>
    </NavItemBase>
  )
 
}

/* istanbul ignore next */
export default NavItem;
