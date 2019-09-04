import { ButtonProps } from "../../form/controls/Button/props";
import { InputProps } from "../../form/controls/Input/props";
import { NavLinkProps } from "../../navigation/Navbar/props";

/**
 * Using form component
 * @example login
 * <Login
 *  provider={{ type: "aws-cognito", credentials: { ... }}}
 * >
 *   <LoginHeader>
 *       <LoginHeaderTitle>Login</LoginHeaderTitle>
 *       <LoginHeaderSubTitle>Login SubTitle</LoginHeaderSubTitle>
 *   </LoginHeader>
 *   <LoginFooter>Young App - Copyright 2019</LoginFooter>
 * </Login>
 * 
 * @example new password
 * <NewPassword provider={{ type: "aws-cognito", credentials: { ... }}}>
 *   <NewPasswordHeader>
 *       <LoginHeaderTitle>Login</NewPasswordHeaderTitle>
 *       <NewPasswordHeaderSubTitle>Login SubTitle</NewPasswordHeaderSubTitle>
 *   </NewPasswordHeader>
 *   <NewPasswordFooter>Young App - Copyright 2019</NewPasswordFooter>
 * </NewPassword>
 */

/** Provider for login, logout, or confirm password */
export interface AuthProps {
    /** Children is added directly in respective component */
    children: JSX.Element | JSX.Element[]

    provider: {
        /** Type of provider login */
        type: 'aws-cognito',

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
    children: string | JSX.Element | JSX.Element[]
}

export interface AuthHeaderTitleProps extends AuthHeaderProps { }
export interface AuthHeaderSubTitleProps extends AuthHeaderProps { }
export interface AuthFooterProps extends AuthHeaderProps { }

export interface LoginProps extends AuthProps {

    /* Set Username */
    email?: InputProps

    /** Set label */
    password?: InputProps

    /* Set code */
    code?: InputProps

    buttonLogin?: ButtonProps // Label is different
    buttonForgot?: NavLinkProps // Label is different
    buttonConfirmSignIn?: ButtonProps
    buttonNewPassword?: ButtonProps /* Set Label Save Password */

    /* Set new password */
    newPassword: InputProps

    /* Set Confrim New Password Label */
    confirmNewPassword: InputProps

    /* Set Login Error Message */
    messageWrongLogin: string

    /* Set New Password Info Message */
    messageNewPasswordRequired: string

    /* Set New Password Error Message */
    messageNewPasswordError: string

    /* Set Confirm Sign In Info Message */
    messageConfirmSignIn: string

    /* Set Confirm Sign In Error Message */
    messageConfirmSignInError: string

    /* display forgot password link */
    displayForgotlink?: boolean
}


export interface ForgotPasswordProps extends AuthProps {

    /* Set Username */
    email?: InputProps

    /* Set code */
    code?: InputProps

    buttonRecoverPassword?: ButtonProps // Label is different
    buttonSubmitPassword?: ButtonProps /* Set Label Save Password */

    /* Set new password */
    newPassword: InputProps

    /* Set Confrim New Password Label */
    confirmNewPassword: InputProps

    /* Set Wrong Username Error Message */
    messageWrongEmail: string

    /* Set New Password Info Message */
    messageNewPasswordRequired: string

    /* Set Validation Message */
    messageNewPasswordError: string

    /* Set Validation Message */
    validationMessageRequiredEmail?: string

    /* Set Validation Message */
    validationmessageValidEmail?: string

    /* Set Validation Message */
    validationMessageRequiredCode?: string

    /* Set Validation Message */
    validationMessageValidConfirmPassword?: string

    /* Set Validation Message */
    validationMessageRequiredConfirmPassword?: string

    /* Set Validation Message */
    validationMessageValidNewPassword?: string

    /* Set Validation Message */
    validationMessageRequiredNewPassword?: string
}

export interface NewPasswordProps extends AuthProps {
    /* Set password */
    password: InputProps

    /* Set newPassword */
    newPassword: InputProps

    button?: ButtonProps
}