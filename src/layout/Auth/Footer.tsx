import * as React from 'react'
import { AuthFooterProps as FotterProps } from './props';
import { CardFooter } from 'reactstrap';

//Login Form Component
const Footer = (footerProps: FotterProps) => {
    return (           
        <CardFooter>{footerProps.children}</CardFooter>
    )
}
export default Footer;