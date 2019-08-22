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
        try{
            return await Auth.signIn(p.email, p.password);
        }catch(e){
            return e;
        }
    }

    /**
     * @param p.user current user object
     * @param p.code verification code for verification of account
     * @param p.meta meta information additionnals for aws account user
     */
    public async confirmSignIn(p: { user: any, code: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' }) {
        try{
            return await Auth.confirmSignIn(p.user, p.code, 'SMS_MFA');
        }catch(e){
            return e;
        }
        
    }

    /**
     * @param p.user current user object
     * @param p.newPassword new password user for resetting
     * @param p.meta meta information additionnals for aws account user
     */
    public async completeNewPassword(p: { user: any, newPassword: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' }) {
        try{
            return await Auth.completeNewPassword(p.user, p.newPassword, p.mfaType);
        }catch(e){
            return e;
        }        
    }

    /**
     * Sign out current login
     */
    public signOut() {
        Auth.signOut();
    };
}