
/**
 * Follow documentation https://aws-amplify.github.io/docs/js/authentication#sign-in
 */

export default interface AuthInterface {

    /**
     * When signup with user name and password,
     * you will either be asked to pass some challenges like code verification
     * after getting signed up.
     */
    signUp: (p: {
        username: string, // Account login username
        password: string, // Account new password
        attributes?: any, // optional { email: string, phone_number: string }
        validationData?: any //optional
    }) => false | object;

    /** Confirm signup asks after doing signup */
    confirmSignUp: (p: { username: string, code: string, options: any }) => false | object;

    /** Resend verification code to username after signup */
    resendSignUp: (p: { username: string }) => false | object;

    /** Configure object */
    configure: (options: any) => void;

    /** get current user settings object */
    getCurrentUser: () => false | object;

    /** get current user settings object */
    isLogged: () => false | object;

    /**
     * When signing in with user name and password,
     * you will either sign in directly or be asked to pass some challenges
     * before getting authenticated.
     */
    signIn: (p: { email: string, password: string }) => false | object;

    /** 
     * If MFA is enabled, sign-in should be confirmed with the confirmation code
     */
    confirmSignIn: (p: {
        user: any, // Return object from Auth.signIn()
        code: string, // the verification code
        meta?: { [key: string]: any }, // OPTIONAL, the required attributes
        mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
    }) => false | object;

    /**
     * You need to get the new password and required attributes from the UI inputs
     * and then trigger the following function with a button click
     * For example, the email and phone_number are required attributes
     */
    completeNewPassword: (p: {
        user: any, // the User Object
        newPassword: string, // the new password
        meta?: { [key: string]: any }, // OPTIONAL, the required attributes
        mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
    }) => false | object;

    /**
     * logout function
     * follow https://aws-amplify.github.io/docs/js/authentication#sign-out
     */
    signOut: () => void;

    /** 
     * forgot Password
     */
    forgotPassword: (p: { username: string }) => false | object;

    /**
     * forgot password submit
     */
    forgotPasswordSubmit: (p: {
        username: string, // the username/email
        code: string, // the verification code
        newPassword: string, // the new password
    }) => false | object;
}