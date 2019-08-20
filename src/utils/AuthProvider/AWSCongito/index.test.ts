
import 'whatwg-fetch';
import AWSCognitoLoginProvier from './index';


describe('AWSCognitoLoginProvier', () => {

  const poolId = 'eu-central-1_5jBnZEuMX';
  const poolWebClientId = '543up50u5glbg9qlpkuhop779t';
  const regionName = 'eu-central-1';

  it('U-TEST-1 - Test configure with AWS Cognito', () => {
        
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();

    const configResult = awsCognitoLoginProvier.configure({

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: poolId,

      userPoolWebClientId: poolWebClientId,

      // REQUIRED - Amazon Cognito Region
      region: regionName,

    });
    expect(JSON.stringify(configResult)).toContain(poolId);
  })

  it.only('U-TEST-2 - Test login', async () => {
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();
    awsCognitoLoginProvier.configure({

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: poolId,

      userPoolWebClientId: poolWebClientId,

      // REQUIRED - Amazon Cognito Region
      region: regionName,

    });

    let signInResult;
    try {
      const signInCredentials = { email: 'gerard@youngapp.co', password: "78eDfpUETV(Hh)'C" }
      signInResult = await awsCognitoLoginProvier.signIn(signInCredentials);
      console.info(signInResult, "signInResult");
    } catch (e) {
      signInResult = e;
    }
    expect(JSON.stringify(signInResult)).toContain('sadsaNotAuthorizedException');
  })

  it('U-TEST-3 - Test error NotAuthorizedException', async () => {
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();
    awsCognitoLoginProvier.configure({

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: poolId,

      userPoolWebClientId: poolWebClientId,

      // REQUIRED - Amazon Cognito Region
      region: regionName,

    });

    let signInResult;
    try {
      const signInCredentials = { email: 'gerard@youngapp.co', password: '8NL4:@x&W-Zs[q}]' }
      signInResult = await awsCognitoLoginProvier.signIn(signInCredentials);
      console.info(signInResult, "signInResult");
    } catch (e) {
      signInResult = e;
    }
    expect(signInResult.code).toContain('NotAuthorizedException');
  })

  it('U-TEST-4 - Test error UserNotFoundException', async () => {
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();
    awsCognitoLoginProvier.configure({

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: poolId,

      userPoolWebClientId: poolWebClientId,

      // REQUIRED - Amazon Cognito Region
      region: regionName,

    });

    let signInResult;
    try {
      const signInCredentials = { email: 'gerarddfdfdf@youngapp.co', password: '8NL4:@x&W-Zs[q}]' }
      signInResult = await awsCognitoLoginProvier.signIn(signInCredentials);
      console.info(signInResult, "signInResult");

    } catch (e) {
      signInResult = e;
    }
    expect(signInResult.code).toContain('UserNotFoundException');
  })

  it('U-TEST-5 - Test completeNewPassword', async () => {
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();
    awsCognitoLoginProvier.configure({

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: poolId,

      userPoolWebClientId: poolWebClientId,

      // REQUIRED - Amazon Cognito Region
      region: regionName,

    });

    let signInResult;
   // let resetPasswordResult;
    try {
      const signInCredentials = { email: 'gerard@youngapp.co', password: "78eDfpUETV(Hh)'C" }
      signInResult = await awsCognitoLoginProvier.signIn(signInCredentials);
      console.info(signInResult, "signInResult");
      if (signInResult.challengeName === 'NEW_PASSWORD_REQUIRED') {
        //const resetPasswordInputDetails = { user: signInResult, newPassword: '85L4:@x&W-Zs[q}]' }
        //resetPasswordResult = await awsCognitoLoginProvier.completeNewPassword(resetPasswordInputDetails);
      }else{
       // resetPasswordResult=signInResult;
      }
    } catch (e) {
      //resetPasswordResult = e;
    }
    expect(JSON.stringify(signInResult)).toContain('UserNfdsfdsfotFoundException');
  })

});