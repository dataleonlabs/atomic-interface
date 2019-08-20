import * as React from 'react'
import { AuthFooterProps as FotterProps } from '../props';
import { StyledCardFooter } from './style';

//Login Form Component
const Footer = (footerProps: FotterProps) => {
    return (           
        <StyledCardFooter>{footerProps.children}</StyledCardFooter>
    )
}
export default Footer;