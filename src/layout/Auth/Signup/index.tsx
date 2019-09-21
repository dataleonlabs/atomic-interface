/* istanbul ignore next */
require('es6-promise').polyfill();
require('isomorphic-fetch');
import * as React from 'react';
import { SignupProps as Props } from '../props';
import { Form, Alert } from '../../../index';
import Input from '../../../form/controls/Input/index';
import Button from '../../../form/controls/Button/index';
import NavLink from '../../../navigation/Navbar/NavLink';
import AWSCognito from '../../../utils/AuthProvider/AWSCongito/index';
import * as Yup from 'yup';
import { StyledFormContainer, StyledContainer } from './style';
import { Col, Row } from 'reactstrap';

/* istanbul ignore next */
interface State {
  signupErroMessage: string,
  confirmSignupErrorMessage: string,
  userResponse: string,
  signupError: boolean,
  newPasswordError: boolean,
  confirmSignUpError: boolean,
  validationSchema: {},
  loading: boolean,
  loadingResend: boolean,
  status?: "SIGNUP" | "MFA"
}

/**
 * Login
 */
/* istanbul ignore next */
class Signup extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    email: {
      label: "Email",
      name: "email",
      placeholder: "Enter email",
    },
    code: {
      label: "Verification Code",
      name: "code",
      placeholder: "Enter code",
    },
    buttonSignup: {
      block: true,
      children: "Signup",
      color: "primary",
    },
    linkLogin: {
      children: "Click to login",
    },
    buttonResend: {
      block: true,
      children: "Resend Code Again",
      color: "primary",
    },
    buttonConfirmSignUp: {
      block: true,
      children: "Click to verify",
      color: "primary",
    },
    newPassword: {
      label: "New password",
      name: "newPassword",
      placeholder: "Enter New Password",
    },
    confirmNewPassword: {
      label: "Re-Enter password",
      name: "confirmPassword",
      placeholder: "Re-Enter Password",
    },
    provider: {
      credentials: {},
      type: "aws-cognito",
    },
    messageConfirmSignUp: "Verify Your Account",
    displayLoginlink: true,
    /* istanbul ignore next  */ onCompleted() {
      //
    },
    // ** setting validation messages default */
    validationMessageRequiredEmail: "Please enter email",
    validationmessageValidEmail: "Please enter valid email address",
    validationMessageRequiredCode: "Please enter code",
    validationMessageRequiredNewPassword: "Please enter new password",
    validationMessageValidNewPassword: "Must contain minimum 6 characters, atleast contains one uppercase, one lowercase, one number and one special case character from '!@#$%^&*'",
    validationMessageRequiredConfirmPassword: "Please re-enter password",
    validationMessageValidConfirmPassword: "Passwords does not match"
  }

  /* istanbul ignore next */
  public state = {
    signupErroMessage: "",
    confirmSignupErrorMessage: "",
    userResponse: "",
    validationSchema: {},
    signupError: false,
    newPasswordError: false,
    confirmSignUpError: false,
    loading: false,
    loadingResend: false,
    status: 'SIGNUP' as "SIGNUP" | "MFA"
  }

  /* istanbul ignore next */
  public componentDidMount() {
    this.setValidation();
  }

  /* istanbul ignore next */
  public resendCode = async () => {
    if (this.state.status === "MFA" && this.state.userResponse.length > 0) {
      this.setState({ loadingResend: true });
      const awsCognito = new AWSCognito();
      awsCognito.configure(this.props.provider.credentials);
      let userRes = JSON.parse(this.state.userResponse);
      await awsCognito.resendSignUp({ username: userRes.user.username }).then(() => {
        this.setState({ loadingResend: false });
      });
    }
  }

  /* istanbul ignore else  */
  public setValidation() {
    if (this.state.status === "SIGNUP" ||/* istanbul ignore next  */  this.state.status === null) /* istanbul ignore next  */ {
      this.setState({
        validationSchema: Yup.object().shape({
          email: Yup.string()
            .email(this.props.validationmessageValidEmail)
            .required(this.props.validationMessageRequiredEmail),
          newPassword: Yup.string()
            .required(this.props.validationMessageRequiredNewPassword)
            .matches(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"),
              this.props.validationMessageValidNewPassword
            ),
          confirmPassword: Yup.string()
            .required(this.props.validationMessageRequiredConfirmPassword)
            .oneOf([Yup.ref('newPassword')], this.props.validationMessageValidConfirmPassword)
        })
      })
    } /* istanbul ignore next  */ else if (this.state.status === "MFA") /* istanbul ignore next  */ {
      this.setState({
        validationSchema: Yup.object().shape({
          code: Yup.string()
            .required('Please enter code')
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

        if (this.state.status === "SIGNUP" || /* istanbul ignore next  */ this.state.status === null) /* istanbul ignore next  */ {
          const resSignup = await awsCognito.signUp({ username: event.email, password: event.newPassword });
          if (resSignup && resSignup.code) {

            this.setState({ signupErroMessage: resSignup.message, loading: false, signupError: true })
          } else {
            if (typeof this.props.onCompleted === "function") {
              this.setState({ signupErroMessage: "", loading: false, signupError: false, userResponse: JSON.stringify(resSignup), status: "MFA" }, this.setValidation)
              this.props.onCompleted(resSignup);
            }
          }
        } else if (this.state.status === "MFA") /* istanbul ignore next  */ {

          let userRes = JSON.parse(this.state.userResponse);

          const confrimSignUpInputDetails = { username: userRes.user.username, code: event.code }

          const resConfirmSign = await awsCognito.confirmSignUp(confrimSignUpInputDetails);
          if (resConfirmSign && resConfirmSign.code) {
            this.setState({ confirmSignupErrorMessage: resConfirmSign.message, loading: false, confirmSignUpError: true })
          } else if (typeof this.props.onCompleted === "function") {
            this.setState({ confirmSignupErrorMessage: "", loading: false, confirmSignUpError: false })
            this.props.onCompleted(resConfirmSign);
          }
        }
      })
    }
  }

  /* istanbul ignore next */
  public render() {
    return (
      <React.Fragment>
        <StyledContainer fluid={true}>
          <Row>
            <Col md={3} />
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
                        {(this.state.status === "SIGNUP" || /* istanbul ignore next  */ this.state.status === null) &&
                          <>
                            <Input {...this.props.email} name="email" type="text" />
                            <Input {...this.props.newPassword} name="newPassword" type="password" />
                            <Input {...this.props.confirmNewPassword} name="confirmPassword" type="password" />
                            {this.state.signupError === true && /* istanbul ignore next */ <Alert icon={true} color="danger">{this.state.signupErroMessage}</Alert>}
                            <Button {...this.props.buttonSignup} loading={this.state.loading} type="submit" style={{ marginTop: 15 }}>{(this.props.buttonSignup || /* istanbul ignore next  */ {}).children}</Button>
                            {this.props.displayLoginlink === true && <NavLink {...this.props.linkLogin} href="#" onClick={this.props.loginEventMethod}>{(this.props.linkLogin || ({} as any)).children}</NavLink>}
                          </>}
                        {this.state.status === "MFA" && /* istanbul ignore next  */
                          <>
                            <Alert icon={true} color="info">{this.props.messageConfirmSignUp}</Alert>
                            <Input {...this.props.code} name="code" type="text" />
                            {this.state.confirmSignUpError === true && <Alert icon={true} color="danger">{this.state.confirmSignupErrorMessage}</Alert>}
                            <Button {...this.props.buttonConfirmSignUp} loading={this.state.loading} type="submit" style={{ marginTop: 15 }}>{(this.props.buttonConfirmSignUp || {}).children}</Button>
                            <Button {...this.props.buttonResend} loading={this.state.loadingResend} onClick={this.resendCode} type="button" style={{ marginTop: 5 }}>{(this.props.buttonResend || {}).children}</Button>
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

/* istanbul ignore next */
export default Signup;