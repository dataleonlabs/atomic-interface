import { ButtonProps } from "../../form/controls/Button/props";

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

export interface AuthHeaderTitleProps {

    /** Children is added directly in header title component */
    children: string | JSX.Element | JSX.Element[]
}

export interface AuthHeaderSubTitleProps {

    /** Children is added directly in header subtitle component */
    children: string | JSX.Element | JSX.Element[]
}

export interface AuthFooterProps {

    /** Children is added directly in footer component */
    children: string | JSX.Element | JSX.Element[]
}

export interface BodyPropsBase extends ButtonProps{

    /* Set Button label */
    buttonLable?: string;

    /* Set Button Color */
    color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
}

export interface LoginBodyProps extends BodyPropsBase{

    /* Set Username Label */
    usernameLabel?: string;

    /* Set Username Placeholder */
    usernamePlaceholder?: string;
    
    /* Set Password Label */    
    passwordLabel?: string;

    /* Set Password Placeholder */    
    passwordPlaceholder?: string;
}

export interface ConfirmSignInBodyProps extends BodyPropsBase{

    /* Set Code Label */    
    codeLabel?: string;

    /* Set Code Placeholder */   
    codePlaceholder?: string;
}

export interface NewPasswordBodyProps extends BodyPropsBase{
    
    /* Set New Password Label */   
    newPasswordLabel?: string;

    /* Set New Password Placeholder */   
    newPasswordPlaceholder?: string;

    /* Set Confirm Password Label */   
    confirmPasswordLabel?: string;

    /* Set Confirm Password Placeholder */   
    confirmPasswordPlaceholder?: string;
}