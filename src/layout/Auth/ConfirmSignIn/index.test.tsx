import * as React from 'react'
import * as enzyme from 'enzyme';
import ConfrimSignIn from './index';
import Body from './Body';
import Header from '../Header';
import Footer from '../Footer';


describe('<Auth/Confirm Sign In />', () => {
  it('U-TEST-1 - Test ConfrimSignIn', () => {
    const wrapper = enzyme.mount(      
        <ConfrimSignIn>
          <Header>ConfrimSignIn Form</Header>
          <Body></Body>
          <Footer>Submit</Footer>
        </ConfrimSignIn>     
    )
    //expect(wrapper.find(Navbar)).toHaveLength(1);    
  })
})