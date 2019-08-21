import * as React from 'react';
import { AuthProps as AuthPropsProvider } from '../../props';
import { StyledCard } from './style';

//Login Form Component
const NewPassword = (authProps: AuthPropsProvider) => {
    return (
        <StyledCard style={{border: "none", fontFamily: 'sans-serif', marginLeft: 20, marginRight: 20}}>
            {authProps.children}
        </StyledCard>
    )
}
export default NewPassword;

