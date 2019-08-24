import AuthInterface from '../AuthInterface';
/**
 * AWSCognito
 */
export default class AWSCognito implements AuthInterface {
    /**
     * Configure function
     * @param options optons aws
     */
    configure(options: any): import("@aws-amplify/auth/lib/types").AuthOptions;
    /**
     * signIn
     * @param p.email email user
     * @param p.password password user
     */
    signIn(p: {
        email: string;
        password: string;
    }): Promise<any>;
    /**
     * @param p.user current user object
     * @param p.newPassword new password user for resetting
     * @param p.meta meta information additionnals for aws account user
     */
    confirmSignIn(p: {
        user: any;
        newPassword: string;
        meta?: {
            [key: string]: any;
        };
        mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA';
    }): Promise<any>;
    /**
     * @param p.user current user object
     * @param p.newPassword new password user for resetting
     * @param p.meta meta information additionnals for aws account user
     */
    completeNewPassword(p: {
        user: any;
        newPassword: string;
        meta?: {
            [key: string]: any;
        };
        mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA';
    }): Promise<any>;
    /**
     * Sign out current login
     */
    signOut(): void;
}
