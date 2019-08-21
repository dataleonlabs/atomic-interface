import * as React from 'react';
import { LoginProps as Props } from '../../props';
import { Form } from '../../../index';
import Input from '../../../form/controls/Input/index';
import Button from '../../../form/controls/Button/index';
import AWSCognito from '../../../utils/AuthProvider/AWSCongito/index';

interface State {
  onConfirmSignIn: boolean
}

/**
 * Login
 */
class Login extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {

  }

  public state = {
    onConfirmSignIn: false,
  }

  public onSubmit = (event: any) => {
    if (this.props.provider.type === "aws-cognito") {
      if (this.state.onConfirmSignIn === false) {
        const awsCognito = new AWSCognito();
        awsCognito.configure(this.props.provider.credentials);
        const resSignIn = awsCognito.signIn({ email: '', password: '' });
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
                {this.state.onConfirmSignIn === false ? (
                  <>
                    <Input {...this.props.email} type="input" />
                    <Input {...this.props.password} type="password" />
                    <Button {...this.props.buttonLogin}>{(this.props.buttonLogin || {}).children}</Button>
                  </>
                ) : (
                    <>
                      <Input {...this.props.code} type="input" />
                      <Button {...this.props.buttonLogin}>{(this.props.buttonLogin || {}).children}</Button>
                    </>
                  )}

                {/* footer */}
                {this.props.children && this.props.children[2]}
              </div>
            </>
          )}
        </Form>
      </div>
    )
  }
}

export default Login;

