import * as React from 'react'
import { AuthHeaderSubTitleProps as HeaderSubTitleProps } from '../../../props';
import { StyledCardSubTitle } from './style';

//Login Form Component
const Header = (headerSubTitleProps: HeaderSubTitleProps) => {
    return (
        <StyledCardSubTitle>{headerSubTitleProps.children}</StyledCardSubTitle>
    )
}
export default Header;