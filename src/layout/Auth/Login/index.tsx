import * as React from 'react';
import 'whatwg-fetch';
import { LoginProps as Props } from '../props';
import { Form, Alert } from '../../../index';
import Input from '../../../form/controls/Input/index';
import Button from '../../../form/controls/Button/index';
import AWSCognito from '../../../utils/AuthProvider/AWSCongito/index';
import * as Yup from 'yup';
import { StyledFormContainer, StyledContainer } from './style';
import { Col, Row } from 'reactstrap';

interface State {
  // onConfirmSignIn: boolean
  // newPassword: boolean,
  userResponse: any,
  loginError: boolean,
  newPasswordError: boolean,
  confirmSignInError: boolean,
  validationSchema: {},
  loading: boolean,
  status?: "LOGIN" | "MFA" | "NEW_PASSWORD_REQUIRED"
}

/**
 * Login
 */
class Login extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    email: {
      label: "Email",
      name: "email",
      placeholder: "Enter email",
    },
    password: {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
    },
    code: {
      label: "Verification Code",
      name: "code",
      placeholder: "Enter code",
    },
    buttonLogin: {
      block: true,
      children: "Sign in",
      color: "primary",
    },
    buttonConfirmSignIn: {
      block: true,
      children: "Click to verify",
      color: "primary",
    },
    buttonNewPassword: {
      block: true,
      children: "Save new password",
      color: "primary",
    },
    newPassword: {
      label: "New password",
      name: "newPassword",
      placeholder: "Enter new password",
    },
    confirmNewPassword: {
      label: "Confirm password",
      name: "confirmPassword",
      placeholder: "Re-type new password",
    },
    provider: {
      credentials: {},
      type: "aws-cognito",
    },
    messageWrongLogin: "Invalid username or password.",
    messageNewPasswordRequired: "Your account needs to create new password.",
    messageConfirmSignIn: "Please verify your account.",
    messageNewPasswordError: "Please check password compatibility.",
    messageConfirmSignInError: "Please enter valid code.",
    /* istanbul ignore next  */ onCompleted() /* istanbul ignore next  */ {
      //
    }    
  }

  public state = {
    // onConfirmSignIn: false,
    // newPassword: false,
    userResponse: {},
    validationSchema: {},
    loginError: false,
    newPasswordError: false,
    confirmSignInError: false,
    loading: false,
    status: 'LOGIN' as "LOGIN" | "MFA" | "NEW_PASSWORD_REQUIRED"
  }

  public componentDidMount() {
    this.setValidation();
  }

  public setValidation() {
    if (this.state.status === "LOGIN" ||/* istanbul ignore next  */  this.state.status === null) /* istanbul ignore next  */ {
      this.setState({
        validationSchema: Yup.object().shape({
          password: Yup.string().required('Please enter password'),
          email: Yup.string()
            .email('Please enter valid email address')
            .required('Please enter email')
        })
      })
    } /* istanbul ignore next  */ else if (this.state.status === "MFA") /* istanbul ignore next  */ {
      this.setState({
        validationSchema: Yup.object().shape({
          code: Yup.string()
            .required('Please enter code')
        })
      })
    } /* istanbul ignore next  */ else if (this.state.status === "NEW_PASSWORD_REQUIRED") /* istanbul ignore next  */ {
      this.setState({
        validationSchema: Yup.object().shape({
          newPassword: Yup.string()
            .required('Please enter new password')
            .matches(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"),
              "Must contain minimum 6 characters, atleast contains one uppercase, one lowercase, one number and one special case character from '!@#$%^&*'"
            ),
          confirmPassword: Yup.string()
            .required('Please enter confirm password')
            .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        })
      })
    }
  }

/* istanbul ignore next  */
  public onSubmit = async (event: any) => {
    if (this.props.provider.type === "aws-cognito") /* istanbul ignore next  */ {
      this.setState({ loading: true }, async () => {
        const awsCognito = new AWSCognito();
        awsCognito.configure(this.props.provider.credentials);
        if (this.state.status === "LOGIN" || /* istanbul ignore next  */ this.state.status === null) /* istanbul ignore next  */ {
          const resSignIn = await awsCognito.signIn({ email: event.email, password: event.password });
          if (resSignIn && resSignIn.challangeName === 'SMS_MFA' ||
            resSignIn.challengeName === 'SOFTWARE_TOKEN_MFA') {
            this.setState({ loading: false, userResponse: resSignIn, status: "MFA" }, this.setValidation)
          } else if (resSignIn && resSignIn.challangeName === 'NEW_PASSWORD_REQUIRED') {
            this.setState({ loading: false, userResponse: resSignIn, status: "NEW_PASSWORD_REQUIRED" }, this.setValidation)
          } else {
            if (resSignIn && resSignIn.code) {
              this.setState({ loading: false, loginError: true })
            } else if (typeof this.props.onCompleted === "function") {
              this.props.onCompleted(resSignIn);
            }
          }
        } else if (this.state.status === "MFA") /* istanbul ignore next  */ {
          const confrimSignInInputDetails = { user: this.state.userResponse, code: event.code }
          const resConfirmSign = await awsCognito.confirmSignIn(confrimSignInInputDetails);
          if (resConfirmSign && resConfirmSign.code) {
            this.setState({ loading: false, confirmSignInError: true })
          } else if (typeof this.props.onCompleted === "function") {
            this.props.onCompleted(resConfirmSign);
          }
        } else if (this.state.status === "NEW_PASSWORD_REQUIRED") /* istanbul ignore next  */ {
          const resetPasswordInputDetails = { user: this.state.userResponse, newPassword: event.confirmPassword }
          const resNewPassword = await awsCognito.completeNewPassword(resetPasswordInputDetails);
          if (resNewPassword && resNewPassword.code) {
            this.setState({ loading: false, newPasswordError: true })
          } else if (typeof this.props.onCompleted === "function") {
            this.props.onCompleted(resNewPassword);
          }
        }
      })
    }
  }

  public render() {
    return (
      <React.Fragment>
        <StyledContainer fluid={true}>
          <Row>
            <Col md={3}/>
            <Col md={6}>
              <StyledFormContainer>
                <Form
                  validationSchema={this.state.validationSchema}
                  onSubmit={this.onSubmit}>
                  {() => (
                    <div>
                      {/* Header */}
                      {React.Children.map(this.props.children, (child, key: number) => {
                        if ((key === 0) && React.isValidElement(child)) {
                          return child;
                        }
                      })}
                      <div className="login-body">
                        {(this.state.status === "LOGIN" || /* istanbul ignore next  */ this.state.status === null) &&
                          <>
                            <Input {...this.props.email} name="email" type="text" />
                            <Input {...this.props.password} name="password" type="password" />
                            {this.state.loginError === true && <Alert icon={true} color="danger">{this.props.messageWrongLogin}</Alert>}
                          <Button {...this.props.buttonLogin} loading={this.state.loading} type="submit" style={{ marginTop: 15 }}>{(this.props.buttonLogin || /* istanbul ignore next  */ {}).children}</Button>
                          </>}
                        {this.state.status === "MFA" && /* istanbul ignore next  */
                          <>
                            <Alert icon={true} color="info">{this.props.messageConfirmSignIn}</Alert>
                            <Input {...this.props.code} name="code" type="text" />
                            {this.state.confirmSignInError === true && <Alert icon={true} color="danger">{this.props.messageConfirmSignInError}</Alert>}
                          <Button {...this.props.buttonConfirmSignIn} loading={this.state.loading} type="submit" style={{ marginTop: 15 }}>{(this.props.buttonConfirmSignIn || {}).children}</Button>
                          </>}
                        {this.state.status === "NEW_PASSWORD_REQUIRED" && /* istanbul ignore next  */
                          <>
                            <Alert icon={true} color="info">{this.props.messageNewPasswordRequired}</Alert>
                            <Input {...this.props.newPassword} name="newPassword" type="password" />
                            <Input {...this.props.confirmNewPassword} name="confirmPassword" type="password" />
                            {this.state.newPasswordError === true && <Alert icon={true} color="danger">{this.props.messageNewPasswordError}</Alert>}
                          <Button {...this.props.buttonNewPassword} loading={this.state.loading} type="submit" style={{ marginTop: 15 }}>{(this.props.buttonNewPassword || {}).children}</Button>
                          </>}
                        {/* footer */}
                        {React.Children.map(this.props.children, (child, key: number) => {
                          if ((key === 1) && React.isValidElement(child)) {
                            return child;
                          }
                        })}
                      </div>
                    </div>
                  )}
                </Form>
              </StyledFormContainer>
            </Col>
            <Col md={3} />
          </Row>
        </StyledContainer>
      </React.Fragment>
    )
  }
}
export default Login;