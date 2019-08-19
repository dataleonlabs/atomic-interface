import * as React from 'react'
import * as enzyme from 'enzyme';
import Auth from './index';
import AuthBody from './AuthBody';
import AuthHeader from './AuthHeader';
import AuthFooter from './AuthFooter';


describe('<Auth />', () => {
  it('U-TEST-1 - Test login', () => {
    const wrapper = enzyme.mount(            
        <Auth>
          <AuthHeader>Login Form</AuthHeader>
          <AuthBody component='login'></AuthBody>
          <AuthFooter>Submit</AuthFooter>
        </Auth>
    )
    //expect(wrapper.find(Navbar)).toHaveLength(1);    
  })
})