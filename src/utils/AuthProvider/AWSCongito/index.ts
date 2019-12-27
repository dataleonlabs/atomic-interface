import AuthInterface from '../AuthInterface';
import Amplify, { Auth } from 'aws-amplify';
//import CookieStorage from './CookieStorage';

/**
 * AWSCognito
 */
export default class AWSCognito implements AuthInterface {

    /**
     * Configure function
     * @param options optons aws
     */
    public configure(options: any) {
        Amplify.configure({ ...options });
        return Auth.configure({
            ...options,

            // // OPTIONAL - Configuration for cookie storage
            // // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
            // cookieStorage: {
            //     // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            //     domain: window.location, // get domain hear
            //     // OPTIONAL - Cookie path
            //     path: '/',
            //     // OPTIONAL - Cookie expiration in days
            //     expires: 365,
            //     // OPTIONAL - Cookie secure flag
            //     // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            //     secure: false
            // },
            // storage: new CookieStorage({ secure: false, domain: window.location }),
        });
    }

    /**
     * get current user session
     */
    public async getCurrentUser() {
        return await Auth.currentSession().then(data => {
            return data;
        }).catch(() => { return false; })
    }

    /**
     * get current authenticated user
     */
    public async isLogged() {
        return await Auth.currentAuthenticatedUser().then(data => {
            return data;
        }).catch(() => { return false; })
    }

    /**
     * signUp
     * @param p.username username user
     * @param p.password password user
     */
    public async signUp(p: { username: string, password: string, attributes?: any, validationData?: any }) {
        try {
            return await Auth.signUp(p.username, p.password, p.attributes, p.validationData);
        } catch (e) {
            return e;
        }
    }

    /**
     * confirmSignUp
     * @param p.username username user
     * @param p.code verification code
     * @param p.options confirm Optional. { forceAliasCreation: true } Force user confirmation irrespective of existing alias. By default set to True. { forceAliasCreation: true }
     */
    public async confirmSignUp(p: { username: string, code: string, options?: any }) {
        try {
            return await Auth.confirmSignUp(p.username, p.code, p.options);
        } catch (e) {
            return e;
        }
    }

    /**
     * resendSignUp
     * @param p.username account usenrame    
     */
    public async resendSignUp(p: { username: string }) {
        try {
            return await Auth.resendSignUp(p.username);
        } catch (e) {
            return e;
        }
    }

    /**
     * signIn
     * @param p.email email user
     * @param p.password password user
     */
    public async signIn(p: { email: string, password: string }) {
        try {
            return await Auth.signIn(p.email, p.password);
        } catch (e) {
            return e;
        }
    }

    /**
     * @param p.user current user object
     * @param p.code verification code for verification of account
     * @param p.meta meta information additionnals for aws account user
     */
    public async confirmSignIn(p: { user: any, code: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' }) {
        try {
            return await Auth.confirmSignIn(p.user, p.code, 'SMS_MFA');
        } catch (e) {
            return e;
        }

    }

    /**
     * @param p.user current user object
     * @param p.newPassword new password user for resetting
     * @param p.meta meta information additionnals for aws account user
     */
    public async completeNewPassword(p: { user: any, newPassword: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' }) {
        try {
            return await Auth.completeNewPassword(p.user, p.newPassword, p.mfaType);
        } catch (e) {
            return e;
        }
    }

    /**
     * Sign out current login
     */
    public signOut() {
        Auth.signOut();
    };


    /**
     * @param p.username account usenrame    
     */
    public async forgotPassword(p: { username: string }) {
        try {
            return await Auth.forgotPassword(p.username);
        } catch (e) {
            return e;
        }
    }

    /**
     * @param p.username username of account
     * @param p.code verification code for verification of account
     * @param p.newPassword new password to set for account
     */
    public async forgotPasswordSubmit(p: { username: string, code: string, newPassword: string }) {
        try {
            return await Auth.forgotPasswordSubmit(p.username, p.code, p.newPassword);
        } catch (e) {
            return e;
        }
    }

    /**
     * @param p.oldPassword old password to change password
     * @param p.newPassword new password to change password
     */
    public async changePassword(p: { oldPassword: string, newPassword: string }) {
        try {
            const user = await Auth.currentAuthenticatedUser();
            return await Auth.changePassword(user, p.oldPassword, p.newPassword);
        } catch (e) {
            return e;
        }
    }
}