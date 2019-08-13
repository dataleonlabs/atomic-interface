
import 'whatwg-fetch';
import AWSCognitoLoginProvier from './index';


describe('AWSCognitoLoginProvier', () => {
  
  it('U-TEST-1 - Test configure with AWS Cognito', () => {
    ///    
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();

    let configResult = awsCognitoLoginProvier.configure({

      userPoolWebClientId: '4uoj4raljocr52so5rgnmkgq53',
      
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'eu-central-1_5jBnZEuMX',

      // REQUIRED - Amazon Cognito Region
      region: 'eu-central-1',
      
    })
    console.log(configResult);

    //In place of 0 we can write response to match
    expect(JSON.stringify(configResult)).toContain('eu-central-1_5jBnZEuMX');
  })


  it('U-TEST-2 - Test login', async () => {    
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();    
    let signInResult;
    expect.assertions(1);
    try {
      const signInCredentials= {email: 'gerard@youngapp', password: '8NL4:@x&W-Zs[q}]'}
      signInResult = await awsCognitoLoginProvier.signIn(signInCredentials);
    } catch (e) {
      signInResult ="SignInErrorInTestCase: "+e;
    }
    //In place of 0 we can write response to match
    expect(JSON.stringify(signInResult)).toContain('SMS_MFA' || 'SOFTWARE_TOKEN_MFA');
  })

  it('U-TEST-2 - Test logout', () => {
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();
    
    let logoutResult = awsCognitoLoginProvier.signOut();
    console.log(logoutResult);

    //In place of 0 we can write response to match
    expect(logoutResult).toContain('Success');
    
  })

  

});