import React from 'react';
import { storiesOf } from '@storybook/react';
import ForgotPassword from './index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';

storiesOf('Layout|Forgot Password', module)
  .add('Example', () => (
    <React.Fragment>
      <ForgotPassword
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
            <span>Forgot Password</span>
          </HeaderTitle>
          <HeaderSubTitle>
            <span>Please enter your registered email ID.</span>
          </HeaderSubTitle>
        </Header>
        <Footer>
          <span>Copyright 2019</span>
        </Footer>
      </ForgotPassword>
    </React.Fragment>
  )).add('Example Validation Translated', () => (
    <React.Fragment>
      <ForgotPassword        
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
            <span>Forgot Password</span>
          </HeaderTitle>
          <HeaderSubTitle>
            <span>Please enter your registered email ID.</span>
          </HeaderSubTitle>
        </Header>
        <Footer>
          <span>Copyright 2019</span>
        </Footer>
      </ForgotPassword>
    </React.Fragment>
  ));