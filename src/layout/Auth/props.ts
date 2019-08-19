import { Component } from "react";

/**
 * Using form component
 * @example
 * <Auth provider={AWSCognitoProvider}>
 *   <AuthHeader>Login</AuthHeader>
 *   <AuthBody component="login">
 *   <AuthFooter>Submit</AuthFooter>
 * </Auth>
 */


export interface AuthProps {

    /** Provider for login, logout, or confirm password */
   // provider: InterfaceAuthProvider
   /** Children is added directly in login component */
   children: any;
}

export interface AuthHeaderProps {

    /** Children is added directly in login component */
    children: string | JSX.Element | JSX.Element[]
}

export interface AuthFooterProps {

    /** Children is added directly in login component */
    children: string | JSX.Element | JSX.Element[]
}