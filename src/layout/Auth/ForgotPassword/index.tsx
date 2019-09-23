/* istanbul ignore next */
require('es6-promise').polyfill();
require('isomorphic-fetch');
import * as React from 'react';
import { ForgotPasswordProps as Props } from '../props';
import { Form, Alert } from '../../../index';
import Input from '../../../form/controls/Input/index';
import Button from '../../../form/controls/Button/index';
import AWSCognito from '../../../utils/AuthProvider/AWSCongito/index';
import * as Yup from 'yup';
import { StyledFormContainer, StyledContainer } from './style';
import { Col, Row } from 'reactstrap';
import NavLink from '../../../navigation/Navbar/NavLink';

/* istanbul ignore next */
interface State {
  username: string,
  validationError: boolean,
  newPasswordError: boolean,
  validationSchema: {},
  loading: boolean,
  mode?: "EMAIL" | "NEW_PASSWORD"
}

/**
 * Forgot Password
 */
/* istanbul ignore next */
class ForgotPassword extends React.Component<Props, State> {
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
    buttonRecoverPassword: {
      block: true,
      children: "Submit",
      color: "primary",
    },
    buttonLogin: {
      children: "Back To Login",
    },
    buttonSubmitPassword: {
      block: true,
      children: "Save Password",
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
    displayLoginlink: true,
    messageWrongEmail: "Invalid username.",
    messageNewPasswordRequired: "Please setup your new password.",
    messageNewPasswordError: "Invalid verification code provided, please try again.",
    /* istanbul ignore next  */ onCompleted() {
      //
    },
    // ** setting validation messages default */
    validationMessageRequiredEmail: "Please enter email",
    validationmessageValidEmail: "Please enter valid email address",
    validationMessageRequiredCode: "Please enter code",
    validationMessageRequiredNewPassword: "Please enter new password",
    validationMessageValidNewPassword: "Must contain minimum 6 characters, atleast contains one uppercase, one lowercase, one number and one special case character from '!@#$%^&*'",
    validationMessageRequiredConfirmPassword: "Please enter confirm password",
    validationMessageValidConfirmPassword: "Passwords does not match"
  }

  /* istanbul ignore next */
  public state = {
    username: "",
    validationSchema: {},
    validationError: false,
    newPasswordError: false,
    loading: false,
    mode: 'EMAIL' as "EMAIL" | "NEW_PASSWORD"
  }

  /* istanbul ignore next */
  public componentDidMount() {
    this.setValidation();
  }

  /* istanbul ignore else */
  public setValidation() {
    if (this.state.mode === "EMAIL" ||/* istanbul ignore next  */  this.state.mode === null) /* istanbul ignore next  */ {
      this.setState({
        validationSchema: Yup.object().shape({
          email: Yup.string()
            .email(this.props.validationmessageValidEmail)
            .required(this.props.validationMessageRequiredEmail)
        })
      })
    } /* istanbul ignore next  */ else if (this.state.mode === "NEW_PASSWORD") /* istanbul ignore next  */ {
      this.setState({
        validationSchema: Yup.object().shape({
          code: Yup.string()
            .required(this.props.validationMessageRequiredCode),
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
    }
  }

  /* istanbul ignore next  */
  public onSubmit = async (event: any) => {
    if (this.props.provider.type === "aws-cognito") /* istanbul ignore next  */ {
      this.setState({ loading: true }, async () => {
        const awsCognito = new AWSCognito();
        awsCognito.configure(this.props.provider.credentials);
        if (this.state.mode === "EMAIL" || /* istanbul ignore next  */ this.state.mode === null) /* istanbul ignore next  */ {
          const resSignIn = await awsCognito.forgotPassword({ username: event.email });
          if (resSignIn && resSignIn.code) {
            this.setState({ loading: false, validationError: true })
          } else if (typeof this.props.onCompleted === "function") {
            this.setState({ mode: "NEW_PASSWORD", username: event.email, loading: false }, this.setValidation)
            this.props.onCompleted(resSignIn);
          }
        } else if (this.state.mode === "NEW_PASSWORD") /* istanbul ignore next  */ {
          const newPasswordInputDetails = { username: this.state.username, code: event.code, newPassword: event.confirmPassword }
          const newPassword = await awsCognito.forgotPasswordSubmit(newPasswordInputDetails);
          if (newPassword && newPassword.code) {
            this.setState({ loading: false, newPasswordError: true })
          } else if (typeof this.props.onCompleted === "function") {
            this.setState({ loading: false })
            this.props.onCompleted(newPassword);
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
                      <div className="forgot-body">
                        {(this.state.mode === "EMAIL" || /* istanbul ignore next  */ this.state.mode === null) &&
                          <>
                            <Input {...this.props.email} name="email" type="text" />
                            {this.state.validationError === true && /* istanbul ignore next */ <Alert icon={true} color="danger">{this.props.messageWrongEmail}</Alert>}
                            <Button {...this.props.buttonRecoverPassword} loading={this.state.loading} type="submit" style={{ marginTop: 15 }}>{(this.props.buttonRecoverPassword || /* istanbul ignore next  */ {}).children}</Button>
                            {this.props.displayLoginlink === true && <NavLink {...this.props.buttonLogin} href="#" onClick={this.props.loginLinkEventMethod}>{(this.props.buttonLogin || ({} as any)).children}</NavLink>}
                          </>}
                        {this.state.mode === "NEW_PASSWORD" && /* istanbul ignore next  */
                          <>
                            <Alert icon={true} color="info">{this.props.messageNewPasswordRequired}</Alert>
                            <Input {...this.props.code} name="code" type="text" />
                            <Input {...this.props.newPassword} name="newPassword" type="password" />
                            <Input {...this.props.confirmNewPassword} name="confirmPassword" type="password" />
                            {this.state.newPasswordError === true && <Alert icon={true} color="danger">{this.props.messageNewPasswordError}</Alert>}
                            <Button {...this.props.buttonSubmitPassword} loading={this.state.loading} type="submit" style={{ marginTop: 15 }}>{(this.props.buttonSubmitPassword || {}).children}</Button>
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
export default ForgotPassword;