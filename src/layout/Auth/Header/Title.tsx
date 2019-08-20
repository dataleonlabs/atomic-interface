import * as React from 'react'
import { AuthHeaderTitleProps as HeaderTitleProps } from '../props';
import { StyledCardTitle } from './style';

//Login Form Component
const Header = (headerTitleProps: HeaderTitleProps) => {
    return (
        <StyledCardTitle>{headerTitleProps.children}</StyledCardTitle>
    )
}
export default Header;