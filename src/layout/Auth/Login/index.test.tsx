import * as React from 'react'
import * as enzyme from 'enzyme';
import Login from './index';
import Header from '../components/Header/Header';
import { Button, Input } from 'reactstrap';

describe('<Auth/Login />', () => {
  it('U-TEST-1 - Test Login', () => {
    const wrapper = enzyme.mount(
      <Login>
        <Header><div>Login</div></Header>        
      </Login>
    )
    expect(wrapper.find(Input)).toHaveLength(2);
    expect(wrapper.find(Input).get(0).props.type).toEqual('text');
    expect(wrapper.find(Input).get(0).props.name).toEqual('email');    
    expect(wrapper.find(Input).get(1).props.name).toEqual('password');
    expect(wrapper.find(Button)).toHaveLength(1);
  })
})