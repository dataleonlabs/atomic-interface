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
        try {
            const user = await Auth.signIn(p.email, p.password);        
            return user;
        } catch (e) {
            return "SignInErrorInIndex: "+e;
        }
    }
    

    confirmSignIn(p: {user: any, newPassword: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA'}){
        return Auth.confirmSignIn(p.user, p.newPassword, 'SMS_MFA');
    }

    completeNewPassword(p: {user: any, newPassword: string, meta?: { [key: string]: any }, mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA'}){
        return Auth.completeNewPassword(p.user, p.newPassword, p.mfaType);
    }

    signOut(){
        Auth.signOut();
    };    
}