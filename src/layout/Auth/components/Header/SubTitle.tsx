import * as React from 'react'
import { AuthHeaderSubTitleProps as Props } from '../../../props';
import { StyledCardSubTitle } from './style';

//Login Form Component
const Header = (props: Props) => {
    return (
        <StyledCardSubTitle>{props.children}</StyledCardSubTitle>
    )
}
export default Header;