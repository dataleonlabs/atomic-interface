import * as React from 'react'
import * as enzyme from 'enzyme'
import Navbar from './index'
import Nav from './Nav'
import NavItem from './NavItem'
import NavbarBrand from './NavbarBrand'
import NavLink from './NavLink'
import Form from './../../form/index'
import Input from './../../form/controls/Input/index'
import { InputGroup, NavLink as NavLinkBase, NavItem as NavItemBase, Navbar as NavbarBase, Nav as NavBase, NavbarBrand as NavbarBrandBase } from 'reactstrap';

describe('<NavBar />', () => {
  it('U-TEST-1 - Navbar', () => {
    const wrapper = enzyme.mount(
      <Navbar>
        <Nav>
          <NavItem>
            <NavLink href="http://yahoo.com">Yahoo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://google.com">Google</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(NavItem)).toHaveLength(2);
    expect(wrapper.find(NavLinkBase)).toHaveLength(2);
  })
})


it('U-TEST-2 - Navbar With NavbarBrand', () => {
  const wrapper = enzyme.mount(
    <Navbar>
      <NavbarBrand href="http://google.com">Google</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink href="http://yahoo.com">Yahoo</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://google.com">Google</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
  expect(wrapper.find(NavbarBrandBase)).toHaveLength(1);
  expect(wrapper.find(NavbarBase)).toHaveLength(1);
  expect(wrapper.find(Nav)).toHaveLength(1);
  expect(wrapper.find(NavItemBase)).toHaveLength(2);
  expect(wrapper.find(NavLink)).toHaveLength(2);
})

it('U-TEST-3 - Navbar With Icons Rights', () => {
  const wrapper = enzyme.mount(
    <Navbar>
      <NavbarBrand href="http://google.com">Google</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="http://yahoo.com">Yahoo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://google.com">Google</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  )
  expect(wrapper.find(NavbarBrand)).toHaveLength(1);
  expect(wrapper.find(Navbar)).toHaveLength(1);
  expect(wrapper.find(Nav)).toHaveLength(1);
  expect(wrapper.find(NavItem)).toHaveLength(2);
  expect(wrapper.find(NavLink)).toHaveLength(2);
})

it('U-TEST-4 - Navbar With Search Bar', () => {
  const wrapper = enzyme.mount(
    <Navbar>
      <NavbarBrand href="http://google.com">Google</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink href="http://yahoo.com">Yahoo</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://google.com">Google</NavLink>
        </NavItem>
      </Nav>
      <Form>
        {(_) => (
          <Input name={'search'} />
        )}
      </Form>
    </Navbar>
  )
  expect(wrapper.find(NavbarBrand)).toHaveLength(1);
  expect(wrapper.find(Navbar)).toHaveLength(1);
  expect(wrapper.find(NavBase)).toHaveLength(1);
  expect(wrapper.find(NavItem)).toHaveLength(2);
  expect(wrapper.find(NavLink)).toHaveLength(2);
  expect(wrapper.find(InputGroup)).toHaveLength(0);
})
