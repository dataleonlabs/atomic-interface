import * as React from 'react'
import * as enzyme from 'enzyme';
import Login from './index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button, Input } from 'reactstrap';

describe('<Login />', () => {
  it('U-TEST-1 - Test Login', () => {
    const wrapper = enzyme.mount(
      <Login
        provider={{
          type: "aws-cognito",
          credentials: {
            "region": "eu-central-1",
            "userPoolId": "eu-central-1_5jBnZEuMX",
            "userPoolWebClientId": "543up50u5glbg9qlpkuhop779t",
          },
        }}
      />
    )
    expect(wrapper.find(Input)).toHaveLength(2);
    expect(wrapper.find(Input).get(0).props.type).toEqual('text');
    expect(wrapper.find(Input).get(0).props.name).toEqual('email');
    expect(wrapper.find(Input).get(1).props.type).toEqual('password');
    expect(wrapper.find(Input).get(1).props.name).toEqual('password');
    expect(wrapper.find(Button)).toHaveLength(1);
  })
  it('U-TEST-2 - Test Login with footer and header', () => {
    const wrapper = enzyme.mount(
      <Login
        provider={{
          type: "aws-cognito",
          credentials: {
            "region": "eu-central-1",
            "userPoolId": "eu-central-1_5jBnZEuMX",
            "userPoolWebClientId": "543up50u5glbg9qlpkuhop779t",
          },
        }}>
        <Header><div>Login</div></Header>
        <Footer>
          <span>Copyright 2019</span>
        </Footer>
      </Login>
    )
    expect(wrapper.find(Input)).toHaveLength(2);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
    expect(wrapper.find(Input).get(0).props.type).toEqual('text');
    expect(wrapper.find(Input).get(0).props.name).toEqual('email');
    expect(wrapper.find(Input).get(1).props.type).toEqual('password');
    expect(wrapper.find(Input).get(1).props.name).toEqual('password');
    expect(wrapper.find(Button)).toHaveLength(1);
  })
})