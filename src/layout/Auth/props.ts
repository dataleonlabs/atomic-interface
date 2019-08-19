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
   /** Children is added directly in respective component */   
   children: JSX.Element | JSX.Element[]
}

export interface AuthHeaderProps {

    /** Children is added directly in header component */
    children: string | JSX.Element | JSX.Element[]
}

export interface AuthFooterProps {

    /** Children is added directly in footer component */
    children: string | JSX.Element | JSX.Element[]
}