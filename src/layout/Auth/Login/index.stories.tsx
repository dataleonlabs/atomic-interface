import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from './index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';
import { Col } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var handleRedirect = function () {
  alert("Component not available");
}

storiesOf('Layout|Login', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Layout - Login</h4>
        <br />
        <p>Add Login feature and relevant styles with following component. Customize the content like header and subtitle content.</p>
        <hr />
        <br />
        <h6><strong>Example</strong></h6>
        <hr />
        <Login
          forgotPasswordEventMethod={handleRedirect}
          provider={{
            type: "aws-cognito",
            credentials: {
              "region": "eu-central-1",
              "userPoolId": "eu-central-1_5jBnZEuMX",
              "userPoolWebClientId": "543up50u5glbg9qlpkuhop779t",
            },
          }}>
          <Header>
            <HeaderTitle>
              <span>Sign in</span>
            </HeaderTitle>
            <HeaderSubTitle>
              <span>Please login to account with your credentials</span>
            </HeaderSubTitle>
          </Header>
          <Footer>
            <span>Copyright 2019</span>
          </Footer>
        </Login>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Login
provider={{
  type: 'aws-cognito',
  credentials: {
    'region': 'eu-central-1',
    'userPoolId': 'eu-central-1_*******X',
    'userPoolWebClientId': '543up************779t',
  },
}}>
  <Header>
    <HeaderTitle>
      <span>Sign in</span>
    </HeaderTitle>
    <HeaderSubTitle>
      <span>Please login to account with your credentials</span>
    </HeaderSubTitle>
  </Header>
  <Footer>
    <span>Copyright 2019</span>
  </Footer>
</Login>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment>
  ));