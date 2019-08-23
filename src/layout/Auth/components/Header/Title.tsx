import * as React from 'react'
import { AuthHeaderTitleProps as Props } from '../../../props';
import { StyledCardTitle } from './style';

//Login Form Component
const Header = (props: Props) => {
    return (
        <StyledCardTitle>{props.children}</StyledCardTitle>
    )
}
export default Header;