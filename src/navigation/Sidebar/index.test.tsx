import * as React from 'react'
import * as enzyme from 'enzyme'
import Sidebar from './index'
import SidebarBrand from './SidebarBrand'
import { NavbarBrand, Nav } from 'reactstrap';

describe('<Sidebar />', () => {
  it('U-TEST-1 - rendering sidebar with brand', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
        <SidebarBrand>Atomic Interface</SidebarBrand>
      </Sidebar>
    )
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(Nav)).toHaveLength(1)
  })
})