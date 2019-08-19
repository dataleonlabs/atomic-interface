import * as React from 'react'
import * as enzyme from 'enzyme';
import NewPassword from './index';
import Body from './Body';
import Header from '../Header';
import Footer from '../Footer';


describe('<Auth/New Password />', () => {
  it('U-TEST-1 - Test NewPassword', () => {
    const wrapper = enzyme.mount(            
        <NewPassword>
          <Header>New Password Form</Header>
          <Body></Body>
          <Footer>Submit</Footer>
        </NewPassword>
    )
    //expect(wrapper.find(Navbar)).toHaveLength(1);    
  })
})