import * as React from 'react';
import { AuthProps as AuthPropsProvider } from '../props';
import { Card } from 'reactstrap';

//Login Form Component
const NewPassword = (authProps: AuthPropsProvider) => {
    return (
        <Card>
            {authProps.children}
        </Card>
    )
}
export default NewPassword;

