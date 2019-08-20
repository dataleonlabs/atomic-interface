import { ButtonProps } from "../form/controls/Button/props";
import { InputProps } from "src/form/controls/Input/props";

/**
 * Using form component
 * @example login
 * <Login provider={{ type: "aws-cognito", credentials: { ... }}}>
 *   <LoginHeader>
 *       <LoginHeaderTitle>Login</LoginHeaderTitle>
 *       <LoginHeaderSubTitle>Login SubTitle</LoginHeaderSubTitle>
 *   </LoginHeader>
 *   <LoginBody>
 *       <LoginButton>Login</LoginButton>
 *   </LoginBody>
 *   <LoginFooter>Young App - Copyright 2019</LoginFooter>
 * </Login>
 * 
 * @example new password
 * <NewPassword provider={{ type: "aws-cognito", credentials: { ... }}}>
 *   <NewPasswordHeader>
 *       <LoginHeaderTitle>Login</NewPasswordHeaderTitle>
 *       <NewPasswordHeaderSubTitle>Login SubTitle</NewPasswordHeaderSubTitle>
 *   </NewPasswordHeader>
 *   <NewPasswordBody>
 *       <NewPasswordButton>Login</NewPasswordButton>
 *   </NewPasswordBody>
 *   <NewPasswordFooter>Young App - Copyright 2019</NewPasswordFooter>
 * </NewPassword>
 * 
 * @example new confirm Signin
 * <ConfirmSignIn provider={{ type: "aws-cognito", credentials: { ... }}}>
 *   <ConfirmSignInHeader>
 *       <LoginHeaderTitle>Login</ConfirmSignInHeaderTitle>
 *       <ConfirmSignInHeaderSubTitle>Login SubTitle</ConfirmSignInHeaderSubTitle>
 *   </ConfirmSignInHeader>
 *   <ConfirmSignInBody>
 *       <ConfirmSignInButton>Login</ConfirmSignInButton>
 *   </ConfirmSignInBody>
 *   <ConfirmSignInFooter>Young App - Copyright 2019</ConfirmSignInFooter>
 * </ConfirmSignIn>
 */

/** Provider for login, logout, or confirm password */
export interface AuthProps {
   /** Children is added directly in respective component */   
   children: JSX.Element | JSX.Element[]

   provider: {
       /** Type of provider login */
       type: 'aws-cognito'

       /**
        * Credentials of provider example for aws-cognito
        * @example
        *  {
        *     userPoolId: poolId,
        *     userPoolWebClientId: poolWebClientId,
        *     region: regionName,
        *  }
        */
       credentials: { [key: string]: number | string | boolean }
   }

   /**
    * Function called when user logged
    */
   onCompleted: (user: any) => void
}

export interface AuthHeaderProps {
    /** Children is added directly in header component */
    children: JSX.Element | JSX.Element[]
}

export interface AuthHeaderTitleProps extends HTMLDivElement {}
export interface AuthHeaderSubTitleProps extends HTMLDivElement {}
export interface AuthFooterProps extends HTMLDivElement {}
export interface AuthButon extends ButtonProps { }

export interface LoginBodyProps extends HTMLDivElement {
    /* Set Username */
    email: InputProps

    /** Set label */
    password: InputProps
}

export interface ConfirmSignInBodyProps extends HTMLDivElement {
    /* Set code */
    code: InputProps
}

export interface NewPasswordBodyProps extends HTMLDivElement {
    /* Set password */
    password: InputProps

    /* Set newPassword */
    newPassword: InputProps
}