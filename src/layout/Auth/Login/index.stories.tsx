import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from './index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';
import { Col } from 'reactstrap';

storiesOf('Layout|Auth', module)
  .add('Login', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Layout</h2>
        <br/>
        <p>Use custom form layout styles that can be added to element like cards, modals, sidebars or any other elements. Additional utilities classes can be used to vary this layout.</p>
        <hr/>
        <br/>
        <h4>Layout - Login</h4>
        <br/>
        <p>The file input is the most generaly of the bunch and requires additional JavaScript if you’d like to hook them up with functional Picture and selected file name text.</p>
        <hr/>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Login
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Login
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
            `}
          </pre>
      </Col>
    </React.Fragment>
  ));