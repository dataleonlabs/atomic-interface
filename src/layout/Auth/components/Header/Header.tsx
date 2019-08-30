import * as React from 'react'
import { AuthHeaderProps as Props } from '../../../props';
import { StyledCardHeader } from './style';

//Login Form Component
const Header = (props: Props) => {
    return (
        <StyledCardHeader>{props.children}</StyledCardHeader>
    )
}
export default Header;