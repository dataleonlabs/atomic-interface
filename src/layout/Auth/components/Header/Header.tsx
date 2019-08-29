/* istanbul ignore next */
import * as React from 'react'
/* istanbul ignore next */
import { AuthHeaderProps as Props } from '../../../props';
/* istanbul ignore next */
import { StyledCardHeader } from './style';

// Login Form Component
/* istanbul ignore next */
const Header = (props: Props) /* istanbul ignore next */ => {
    /* istanbul ignore next */
    return (
        <StyledCardHeader>{props.children}</StyledCardHeader>
    )
}
/* istanbul ignore next */
export default Header;