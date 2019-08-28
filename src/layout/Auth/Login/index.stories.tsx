import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from './index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';

storiesOf('Layout|Auth', module)
  .add('Login', () => (
    <React.Fragment>
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
    </React.Fragment>
  ));