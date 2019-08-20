import * as React from 'react'
import * as enzyme from 'enzyme';
import ConfrimSignIn from './index';
import Body from './Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Input } from 'reactstrap';
import { Card, CardHeader, CardFooter, CardBody, Button } from 'reactstrap';

describe('<Auth/Confirm Sign In />', () => {
  it('U-TEST-1 - Test ConfrimSignIn', () => {
    const wrapper = enzyme.mount(      
        <ConfrimSignIn>
          <Header>Confrim Sign In Form</Header>
          <Body block={true} color={'primary'} buttonLable={'Click To Verify'} codeLabel={'Verification Code'} codePlaceholder={'Enter Code'}></Body>
          <Footer>Submit</Footer>
        </ConfrimSignIn>     
    )
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(CardHeader)).toHaveLength(1);
    expect(wrapper.find(CardFooter)).toHaveLength(1);
    expect(wrapper.find(CardBody)).toHaveLength(1);   
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(CardHeader).html()).toContain('Confrim Sign In' || 'Confrim Login');
    expect(wrapper.find(Button)).toHaveLength(1);
  })
})