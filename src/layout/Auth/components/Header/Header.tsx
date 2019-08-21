import * as React from 'react'
import { AuthHeaderProps as HeaderProps } from '../props';
import { StyledCardHeader } from './style';

//Login Form Component
const Header = (headerProps: HeaderProps) => {
    return (
        <StyledCardHeader>{headerProps.children}</StyledCardHeader>
    )
}
export default Header;