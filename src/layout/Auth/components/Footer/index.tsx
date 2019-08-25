import * as React from 'react'
import { AuthFooterProps as Props } from '../../../props';
import { StyledCardFooter } from './style';

// Login Form Component
const Footer = (props: Props) => {
    return (           
        <StyledCardFooter>{props.children}</StyledCardFooter>
    )
}
export default Footer;