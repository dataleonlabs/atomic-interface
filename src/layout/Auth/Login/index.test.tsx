import * as React from 'react'
import * as enzyme from 'enzyme';
import Login from './index';
import Body from './Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Input } from 'reactstrap';
import { Card, CardHeader, CardFooter, CardBody, Button } from 'reactstrap';

describe('<Auth/Login />', () => {
  it('U-TEST-1 - Test login', () => {
    const wrapper = enzyme.mount(            
        <Login>
          <Header>Login Form</Header>
          <Body block={true} color={'primary'} buttonLable={'Sign In'} passwordLabel={'Password'} passwordPlaceholder={'Enter Password'} usernameLabel={'Email'} usernamePlaceholder={'Enter Email'}></Body>
          <Footer>Submit</Footer>
        </Login>
    )
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(CardHeader)).toHaveLength(1);
    expect(wrapper.find(CardFooter)).toHaveLength(1);
    expect(wrapper.find(CardBody)).toHaveLength(1);
    expect(wrapper.find(Input)).toHaveLength(2);
    expect(wrapper.find(CardHeader).html()).toContain('Login' || 'Sign in');
    expect(wrapper.find(Button)).toHaveLength(1);
  })
})