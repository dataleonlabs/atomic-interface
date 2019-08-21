/**
 * Follow documentation https://aws-amplify.github.io/docs/js/authentication#sign-in
 */
export default interface AuthInterface {
    /** Configure object */
    configure: (options: any) => false | object;
    /**
     * When signing in with user name and password,
     * you will either sign in directly or be asked to pass some challenges
     * before getting authenticated.
     */
    signIn: (p: {
        email: string;
        password: string;
    }) => false | object;
    /**
     * If MFA is enabled, sign-in should be confirmed with the confirmation code
     */
    confirmSignIn: (p: {
        user: any;
        newPassword: string;
        meta?: {
            [key: string]: any;
        };
        mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA';
    }) => false | object;
    /**
     * You need to get the new password and required attributes from the UI inputs
     * and then trigger the following function with a button click
     * For example, the email and phone_number are required attributes
     */
    completeNewPassword: (p: {
        user: any;
        newPassword: string;
        meta?: {
            [key: string]: any;
        };
        mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA';
    }) => false | object;
    /**
     * logout function
     * follow https://aws-amplify.github.io/docs/js/authentication#sign-out
     */
    signOut: () => void;
}
