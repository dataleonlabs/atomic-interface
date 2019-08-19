import * as React from 'react'
import { AuthFooterProps as FotterProps } from '../props';
import { CardFooter } from 'reactstrap';

//Login Form Component
const AuthFooter = (footerProps: FotterProps) => {
    return (           
        <CardFooter>{footerProps.children}</CardFooter>
    )
}
export default AuthFooter;