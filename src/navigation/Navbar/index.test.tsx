import * as React from 'react'
import * as enzyme from 'enzyme'
import NavBar from './index'
import {Navbar, NavItem, Nav, Input,NavbarBrand,Button} from 'reactstrap';
describe('<Navbar/>', () => {
  it('U-TEST-1 - Navbar Element Render', () => {
    const wrapper = enzyme.mount(
      <NavBar>
        <Navbar>
          <Nav>
            <NavItem />
            </Nav>
         </Navbar>
       </NavBar>
    )
    expect(wrapper.find(Navbar)).toHaveLength(1)
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(2)
  })

  it('U-TEST-2 -Navbar with Searchbar', () => {
    const wrapper = enzyme.mount(
      <NavBar renderSearch={true}>
 
      </NavBar>
    )
      expect(wrapper.find(Input)).toHaveLength(0)
  })  
  it('U-TEST-3 -Navbar with right icon', () => {
    const wrapper = enzyme.mount(
      <Navbar>
        <NavBar />
       <Button color="primary">Add</Button>
      </Navbar>
    )
      expect(wrapper.find(Navbar)).toHaveLength(2)
      expect(wrapper.find(Button)).toHaveLength(1)
  })
  it('U-TEST-4 -Navbar with brand', () => {
    const wrapper = enzyme.mount(
      <NavBar>
       <NavbarBrand href="#">reactstrap</NavbarBrand>
      </NavBar>
    )
      expect(wrapper.find(NavbarBrand)).toHaveLength(0)
  })
})

