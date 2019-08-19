import * as React from 'react'
import * as enzyme from 'enzyme';
import Login from './index';
import Body from './Body';
import Header from '../Header';
import Footer from '../Footer';


describe('<Auth/Login />', () => {
  it('U-TEST-1 - Test login', () => {
    const wrapper = enzyme.mount(            
        <Login>
          <Header>Login Form</Header>
          <Body></Body>
          <Footer>Submit</Footer>
        </Login>
    )
    //expect(wrapper.find(Navbar)).toHaveLength(1);    
  })
})