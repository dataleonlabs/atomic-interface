
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

  it('U-TEST-2 - Test login', async () => {
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();
    awsCognitoLoginProvier.configure({
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: poolId,
      userPoolWebClientId: poolWebClientId,

      // REQUIRED - Amazon Cognito Region
      region: regionName,
    });

    const signInCredentials = { email: 'gerard@youngapp.co', password: "Tµtij5fXY77€/5" }
    const signInResult = await awsCognitoLoginProvier.signIn(signInCredentials);

    expect(typeof signInResult.username).toEqual('string');
    expect(typeof signInResult.signInUserSession.refreshToken.token).toEqual('string');
    expect(typeof signInResult.signInUserSession.accessToken.jwtToken).toEqual('string');
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
    try {
      const signInCredentials = { email: 'gerard@youngapp.co', password: '8NL4:@x&W-Zs[q}]' }
      await awsCognitoLoginProvier.signIn(signInCredentials);
    } catch (e) {
      expect(e.code).toContain('NotAuthorizedException');
    }
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
    try {
      const signInCredentials = { email: 'gerarddfdfdf@youngapp.co', password: '8NL4:@x&W-Zs[q}]' }
      await awsCognitoLoginProvier.signIn(signInCredentials);
    } catch (e) {
      expect(e.code).toContain('UserNotFoundException');
    }
  })

  it('U-TEST-5 - Test logout', async () => {
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();
    awsCognitoLoginProvier.configure({
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: poolId,
      userPoolWebClientId: poolWebClientId,

      // REQUIRED - Amazon Cognito Region
      region: regionName,
    });
    try {
      const signInCredentials = { email: 'gerard@youngapp.co', password: "Tµtij5fXY77€/5" }
      await awsCognitoLoginProvier.signIn(signInCredentials)
    } finally {
      awsCognitoLoginProvier.signOut();
    }
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
    let resLogin;
    try {
      const signInCredentials = { email: 'gerard@youngapp.co', password: "Tµtij5fXY77€/5" }
      resLogin = await awsCognitoLoginProvier.signIn(signInCredentials)
    } finally {
      const resetPasswordInputDetails = { user: resLogin, newPassword: "8NL9:@x&W-Zs[q}]" }
      await awsCognitoLoginProvier.completeNewPassword(resetPasswordInputDetails);
    }
  })

  it('U-TEST-6 - Test confirmSignIn', async () => {
    const awsCognitoLoginProvier = new AWSCognitoLoginProvier();
    awsCognitoLoginProvier.configure({
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: poolId,
      userPoolWebClientId: poolWebClientId,

      // REQUIRED - Amazon Cognito Region
      region: regionName,
    });
    let resLogin;
    try {
      const signInCredentials = { email: 'gerard@youngapp.co', password: "Tµtij5fXY77€/5" }
      resLogin = await awsCognitoLoginProvier.signIn(signInCredentials)
    } finally {
      if(resLogin && resLogin.challangeName === 'SMS_MFA' ||
      resLogin.challengeName === 'SOFTWARE_TOKEN_MFA'){
        const confirmSignInInputDetails = { user: resLogin, code: "1234" };
        await awsCognitoLoginProvier.confirmSignIn(confirmSignInInputDetails);
      }
    }
  })
});