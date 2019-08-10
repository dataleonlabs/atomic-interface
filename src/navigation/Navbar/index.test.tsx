import * as React from 'react'
import * as enzyme from 'enzyme'
import NavbarBase from './index'
import NavBase from './NavBase'
import NavItemBase from './NavItemBase'
import NavbarBrandBase from './NavbarBrandBase'
import NavLinkBase from './NavLinkBase'
import NavbarTogglerBase from './NavbarTogglerBase'
import CollapseBase from './CollapseBase'
import Form from './../../form/index'
import Input from './../../form/controls/Input/index'
import {InputGroup, NavLink ,NavItem, Collapse, NavbarToggler, Navbar, Nav, NavbarBrand } from 'reactstrap';

describe('<NavBar />', () => {
  it('U-TEST-1 - test Navbar render', () => {
    const wrapper = enzyme.mount(
      <NavbarBase>
      <NavBase className="ml-auto" navbar>
        <NavItemBase>
          <NavLinkBase linkURL={"http://yahoo.com"}>Yahoo</NavLinkBase>
        </NavItemBase>
        <NavItemBase>
          <NavLinkBase linkURL={"http://google.com"}>Google</NavLinkBase>
        </NavItemBase>
      </NavBase>
    </NavbarBase>
    )
    expect(wrapper.find(Navbar)).toHaveLength(1);    
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(NavItem)).toHaveLength(2);    
    expect(wrapper.find(NavLink)).toHaveLength(2);    
  })  
})


it('U-TEST-2 - test Navbar with NavbarBrand render', () => {
  const wrapper = enzyme.mount(
    <NavbarBase>
      <NavbarBrandBase linkURL={"http://google.com"}>Google</NavbarBrandBase>
      <NavBase className="ml-auto" navbar>
        <NavItemBase>
          <NavLinkBase linkURL={"http://yahoo.com"}>Yahoo</NavLinkBase>
        </NavItemBase>
        <NavItemBase>
          <NavLinkBase linkURL={"http://google.com"}>Google</NavLinkBase>
        </NavItemBase>
      </NavBase>
    </NavbarBase>
  )
  expect(wrapper.find(NavbarBrand)).toHaveLength(1);
  expect(wrapper.find(Navbar)).toHaveLength(1);
  expect(wrapper.find(Nav)).toHaveLength(1);
  expect(wrapper.find(NavItem)).toHaveLength(2);
  expect(wrapper.find(NavLink)).toHaveLength(2);
})

it('U-TEST-3 - Test navbar rendering with icons rights', () => {
  const wrapper = enzyme.mount(
    <NavbarBase>
      <NavbarBrandBase linkURL={"http://google.com"}>Google</NavbarBrandBase>
      <NavbarTogglerBase className="mr-2" />
      <CollapseBase>
        <NavBase className="ml-auto" navbar>
          <NavItemBase>
            <NavLinkBase linkURL={"http://yahoo.com"}>Yahoo</NavLinkBase>
          </NavItemBase>
          <NavItemBase>
            <NavLinkBase linkURL={"http://google.com"}>Google</NavLinkBase>
          </NavItemBase>
        </NavBase>
      </CollapseBase>
    </NavbarBase>
  )
  expect(wrapper.find(NavbarBrand)).toHaveLength(1);
  expect(wrapper.find(Navbar)).toHaveLength(1);
  expect(wrapper.find(Nav)).toHaveLength(1);
  expect(wrapper.find(NavItem)).toHaveLength(2);
  expect(wrapper.find(NavLink)).toHaveLength(2);
  expect(wrapper.find(NavbarToggler)).toHaveLength(1);
  expect(wrapper.find(Collapse)).toHaveLength(1);
})

it('U-TEST-4 - Test navbar rendering with search bar', () => {
  const wrapper = enzyme.mount(
    <NavbarBase>
      <NavbarBrandBase linkURL={"http://google.com"}>Google</NavbarBrandBase>      
      <NavBase className="ml-auto" navbar>
        <NavItemBase>
          <NavLinkBase linkURL={"http://yahoo.com"}>Yahoo</NavLinkBase>
        </NavItemBase>
        <NavItemBase>
          <NavLinkBase linkURL={"http://google.com"}>Google</NavLinkBase>
        </NavItemBase>
      </NavBase>
      <Form>
        {(props) => (
          <Input name={'search'} />
        )}
      </Form>
    </NavbarBase>
  )
  expect(wrapper.find(NavbarBrand)).toHaveLength(1);
  expect(wrapper.find(Navbar)).toHaveLength(1);
  expect(wrapper.find(Nav)).toHaveLength(1);
  expect(wrapper.find(NavItem)).toHaveLength(2);
  expect(wrapper.find(NavLink)).toHaveLength(2);    
  expect(wrapper.find(InputGroup)).toHaveLength(0);
})