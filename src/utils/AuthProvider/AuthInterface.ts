
/**
 * Follow documentation https://aws-amplify.github.io/docs/js/authentication#sign-in
 */
export default interface AuthInterface {

    /** Configure object */
    configure: (object: any) => false | object;

    /**
     * When signing in with user name and password,
     * you will either sign in directly or be asked to pass some challenges
     * before getting authenticated.
     */
    signIn: (email: string, password: string) => false | object;

    /** 
     * If MFA is enabled, sign-in should be confirmed with the confirmation code
     */
    confirmSignIn: (
        user: any, // Return object from Auth.signIn()
        newPassword: string, // the new password
        meta?: { [key: string]: any }, // OPTIONAL, the required attributes
        mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
    ) => false | object;

    /**
     * You need to get the new password and required attributes from the UI inputs
     * and then trigger the following function with a button click
     * For example, the email and phone_number are required attributes
     */
    completeNewPassword: (
        user: any, // the User Object
        newPassword: string, // the new password
        meta?: { [key: string]: any }, // OPTIONAL, the required attributes
        mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
    ) => false | object;

    /**
     * logout function
     * follow https://aws-amplify.github.io/docs/js/authentication#sign-out
     */
    logout: (global?: boolean) => boolean;
}