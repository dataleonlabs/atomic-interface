import React from 'react';
import { ItemProps as Props } from './props';
import { NavItem as NavItemBase } from 'reactstrap';
import Loader, { StyledLoader } from './loader';

/**
 * NavItem render element
 */
const NavItem = (props: Props) => {
  const { loading, ...rest } = props;

  if (loading === true) {
    if(Array.isArray(rest.children)){
      return <StyledLoader><Loader iconOnly={false} /></StyledLoader>
    }else{
      return <StyledLoader><Loader iconOnly={true} /></StyledLoader>
    }    
  }

  return(
    <NavItemBase {...rest}>
      <div className="nav-link">{rest.children}</div>
    </NavItemBase>
  )
 
}

export default NavItem;
