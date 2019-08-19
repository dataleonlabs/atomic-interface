import * as React from 'react'
import { AuthHeaderProps as HeaderProps } from './props';
import { CardHeader } from 'reactstrap';

//Login Form Component
const Header = (headerProps: HeaderProps) => {
    return (           
        <CardHeader>{headerProps.children}</CardHeader>
    )
}
export default Header;