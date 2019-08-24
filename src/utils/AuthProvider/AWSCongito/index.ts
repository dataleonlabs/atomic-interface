import AuthInterface from '../AuthInterface';
import Amplify, { Auth } from 'aws-amplify';

/**
 * AWSCognito
 */
export default class AWSCognito implements AuthInterface {

    /**
     * Configure function
     * @param options optons aws
     */
    public configure(options: any) {
        Amplify.configure({ options });
        return Auth.configure(options);
    }

    /**
     * signIn
     * @param p.email email user
     * @param p.password password user
     */
    public async signIn(p: { email: string, password: string }) {
        return Auth.signIn(p.email, p.password);
    }

    /**
     * @param p.user current user object
     * @param p.newPassword new password user for resetting
     * @param p.meta meta information additionnals for aws account user
     */
    public confirmSignIn(p: { user: any, newPassword: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' }) {
        return Auth.confirmSignIn(p.user, p.newPassword, 'SMS_MFA');
    }

    /**
     * @param p.user current user object
     * @param p.newPassword new password user for resetting
     * @param p.meta meta information additionnals for aws account user
     */
    public async completeNewPassword(p: { user: any, newPassword: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' }) {
        return Auth.completeNewPassword(p.user, p.newPassword, p.mfaType);
    }

    /**
     * Sign out current login
     */
    public signOut() {
        Auth.signOut();
    };
}