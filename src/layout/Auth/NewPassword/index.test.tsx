import * as React from 'react'
import * as enzyme from 'enzyme';
import NewPassword from './index';
import Body from './Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Input } from 'reactstrap';
import { Card, CardHeader, CardFooter, CardBody, Button } from 'reactstrap';


describe('<Auth/New Password />', () => {
  it('U-TEST-1 - Test NewPassword', () => {
    const wrapper = enzyme.mount(            
        <NewPassword>
          <Header>New Password Form</Header>
          <Body block={true} color={'primary'} buttonLable={'Sign In'} newPasswordLabel={'New Password'} newPasswordPlaceholder={'Enter New Password'} confirmPasswordLabel={'Confirm Password'} confirmPasswordPlaceholder={'Enter Confirm Password'}></Body>
          <Footer>Submit</Footer>
        </NewPassword>
    )
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(CardHeader)).toHaveLength(1);
    expect(wrapper.find(CardFooter)).toHaveLength(1);
    expect(wrapper.find(CardBody)).toHaveLength(1);    
    expect(wrapper.find(Input)).toHaveLength(2);
    expect(wrapper.find(CardHeader).html()).toContain('New Password');
    expect(wrapper.find(Button)).toHaveLength(1);
  })
})