import AuthInterface from '../AuthInterface';
import Amplify, {Auth} from 'aws-amplify';
/**
 * AWSCognitoLoginProvier
 */
export default class AWSCognitoLoginProvier implements AuthInterface  {        

    configure(options: any){
        Amplify.configure({options});                
        return Auth.configure(options);
    }
        
    async signIn(p: {email:string, password: string}){        
        return Auth.signIn(p.email, p.password);
    }
    

    confirmSignIn(p: {user: any, newPassword: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA'}){
        return Auth.confirmSignIn(p.user, p.newPassword, 'SMS_MFA');
    }

    async completeNewPassword(p: {user: any, newPassword: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA'}){
        return Auth.completeNewPassword(p.user, p.newPassword, p.mfaType);
    }

    signOut(){
        Auth.signOut();
    };    
}