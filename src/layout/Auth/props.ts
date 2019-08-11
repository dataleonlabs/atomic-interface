
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
    provider: InterfaceAuthProvider
}

export interface AuthHeaderProps {

    /** Children is added directly in login component */
    children: string | JSX.Element | JSX.Element[]
}

export interface AuthBodyProps {

    /** 
     * Component form display for manage authentification
     * Default is login
     * When user select. Example newPassword
     *  - Create form and add fields email, password and button
     */
    component: 'login' | 'newPassword' | 'confirmSignIn'
}

export interface AuthFooterProps {

    /** Children is added directly in login component */
    children: string | JSX.Element | JSX.Element[]
}