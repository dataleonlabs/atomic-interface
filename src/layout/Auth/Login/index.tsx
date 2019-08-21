import * as React from 'react';
import 'whatwg-fetch';
import { LoginProps as Props } from '../../props';
import { Form, Alert } from '../../../index';
import Input from '../../../form/controls/Input/index';
import Button from '../../../form/controls/Button/index';
import AWSCognito from '../../../utils/AuthProvider/AWSCongito/index';
import { any } from 'prop-types';

interface State {
  //onConfirmSignIn: boolean
  //newPassword: boolean,
  userResponse: any,
  loginError: boolean,
  newPasswordError: boolean,
  confirmSignInError: boolean,
  status?: "LOGIN" | "MFA" | "REQUIRE_NEW_PASSWORD" | null
}

/**
 * Login
 */
class Login extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    provider: {
      type: "aws-cognito",
      credentials: {
        "userPoolId": "eu-central-1_5jBnZEuMX",
        "userPoolWebClientId": "543up50u5glbg9qlpkuhop779t",
        "region": "eu-central-1"
      }
    },
    password: {
      name: "password",
      placeholder: "Enter Password",
      label: "Password",
    },
    email: {
      name: "email",
      placeholder: "Enter Email",
      label: "Email",
    },
    code: {
      name: "code",
      placeholder: "Enter Code",
      label: "Verification Code"
    },
    buttonLogin: {
      children: "Sign In",
      block: true,
      color: "primary",
    },
    buttonConfirmSignIn: {
      block: true,
      color: "primary",
      children: "Click To Verify"
    },
    buttonNewPassword: {
      block: true,
      color: "primary",
      children: "Save New Password"
    },
    newPassword: {
      name: "newPassword",
      placeholder: "Enter New Password",
      label: "New Password"
    },
    confirmNewPassword: {
      name: "confirmPassword",
      placeholder: "Re-Type New Password",
      label: "Confirm Password"
    },
    messageWrongLogin: "Invalid Username or Password.",
    messageNewPasswordRequired: "Your account needs to create new password.",
    messageConfirmSignIn: "Please verify your account.",
    messageNewPasswordError: "Please check password compatibility.",
    messageConfirmSignInError: "Please Enter Valid Code."
  }

  public state = {
    //onConfirmSignIn: false,
    //newPassword: false,
    userResponse: {},
    loginError: false,
    newPasswordError: false,
    confirmSignInError: false,
    status: null
  }

  public onSubmit = async (event: any) => {

    if (this.props.provider.type === "aws-cognito") {
      if (this.state.status === "LOGIN" || this.state.status === null) {

        const awsCognito = new AWSCognito();
        awsCognito.configure(this.props.provider.credentials);
        const resSignIn = await awsCognito.signIn({ email: event.email, password: event.password });

        if (resSignIn && resSignIn.challangeName === 'SMS_MFA' ||
          resSignIn.challengeName === 'SOFTWARE_TOKEN_MFA') {
          this.setState({ userResponse: resSignIn, status: "MFA" })
        } else if (resSignIn && resSignIn.challangeName === 'NEW_PASSWORD_REQUIRED') {
          this.setState({ userResponse: resSignIn, status: "REQUIRE_NEW_PASSWORD" })
        } else {
          if (resSignIn && resSignIn.code) {
            this.setState({ loginError: true })
          } else {
            if (typeof this.props.onCompleted === "function") {
              this.props.onCompleted(resSignIn);
            }
          }
        }
      } else if (this.state.status === "MFA") {
        const awsCognito = new AWSCognito();
        awsCognito.configure(this.props.provider.credentials);
      } else if (this.state.status === "NEW_PASSWORD_REQUIRED") {
        const awsCognito = new AWSCognito();
        awsCognito.configure(this.props.provider.credentials);
        const resetPasswordInputDetails = { user: this.state.userResponse, newPassword: event.confirmPassword }
        const resNewPassword = await awsCognito.completeNewPassword(resetPasswordInputDetails);
        if (resNewPassword && resNewPassword.code) {
          this.setState({ newPasswordError: true })
        } else {
          if (typeof this.props.onCompleted === "function") {
            this.props.onCompleted(resNewPassword);
          }
        }
      }
    }
  }

  public render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          {() => (
            <>
              {/* Header */}
              {this.props.children && this.props.children[0]}
              <div className="login-body">
                {this.state.status === "LOGIN" &&
                  <>
                    <Input {...this.props.email} name="email" type="text" />
                    <Input {...this.props.password} name="password" type="password" />
                    {this.state.loginError === true && <Alert icon={true} color="danger">{this.props.messageWrongLogin}</Alert>}
                    <Button {...this.props.buttonLogin} type="submit">{(this.props.buttonLogin || {}).children}</Button>
                  </>}

                {this.state.status === "MFA" &&
                  <>
                    <Alert icon={true} color="info">{this.props.messageConfirmSignIn}</Alert>
                    <Input {...this.props.code} name="code" type="text" />
                    {this.state.confirmSignInError === true && <Alert icon={true} color="danger">{this.props.messageConfirmSignInError}</Alert>}
                    <Button {...this.props.buttonConfirmSignIn} type="submit">{(this.props.buttonConfirmSignIn || {}).children}</Button>
                  </>}

                {this.state.status === "NEW_PASSWORD_REQUIRED" &&
                  <>
                    <Alert icon={true} color="info">{this.props.messageNewPasswordRequired}</Alert>
                    <Input {...this.props.newPassword} name="newPassword" type="password" />
                    <Input {...this.props.confirmNewPassword} name="confirmPassword" type="password" />
                    {this.state.newPasswordError === true && <Alert icon={true} color="danger">{this.props.messageNewPasswordError}</Alert>}
                    <Button {...this.props.buttonNewPassword} type="submit">{(this.props.buttonNewPassword || {}).children}</Button>
                  </>}

                {/* footer */}
                {this.props.children && this.props.children[1]}
              </div>
            </>
          )}
        </Form>
      </div>
    )
  }
}
export default Login;