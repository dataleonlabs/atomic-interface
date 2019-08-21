import * as React from 'react';
import { AuthProps as AuthPropsProvider } from '../../props';
import { StyledCard } from './style';

// Login Form Component
const Login = (authProps: AuthPropsProvider) => {
    return (
        <StyledCard>
            {authProps.children}
        </StyledCard>
    )
}
export default Login;

