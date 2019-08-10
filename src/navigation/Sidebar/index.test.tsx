import * as React from 'react'
import * as enzyme from 'enzyme'
import Sidebar from './index'
import SidebarBrand from './SidebarBrand'
import { NavbarBrand, Nav, NavItem, NavLink, Badge } from 'reactstrap';
import SidebarNav from './SidebarNav'
import SidebarNavItem from './SidebarNavItem'
import { HelpCircle, Database, Grid, Folder, GitMerge, Eye, Watch, Linkedin, ExternalLink } from 'react-feather';
import SidebarNavHeader from './SidebarNavHeader';
import SidebarNavIcon from './SidebarNavIcon';
import SidebarNavText from './SidebarNavText';


describe('<Sidebar />', () => {
  it('U-TEST-1 - rendering sidebar', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
        <SidebarBrand href="/">reactstrap</SidebarBrand>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Database size={23} /></SidebarNavIcon>
            <SidebarNavText>Dashboard</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Grid size={23} /></SidebarNavIcon>
            <SidebarNavText>Transaction</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem active>
            <SidebarNavIcon type="left"><Folder size={23} /></SidebarNavIcon>
            <SidebarNavText>Products</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><GitMerge size={23} /></SidebarNavIcon>
            <SidebarNavText>Payments</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Eye size={23} /></SidebarNavIcon>
            <SidebarNavText>Stocks</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Watch size={23} /></SidebarNavIcon>
            <SidebarNavText>Link</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Linkedin size={23} /></SidebarNavIcon>
            <SidebarNavText>UI-Kit</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><HelpCircle size={23} /></SidebarNavIcon>
            <SidebarNavText><a href="https://google.com">Help</a></SidebarNavText>
            <SidebarNavIcon type="right"><ExternalLink size={17} /></SidebarNavIcon>
          </SidebarNavItem>
        </SidebarNav>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(8)
    expect(wrapper.find(NavLink)).toHaveLength(0)
    expect(wrapper.find(HelpCircle)).toHaveLength(1)

  })
  
  it('U-TEST-2 - rendering sidebar with group', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
        <SidebarBrand href="/">reactstrap</SidebarBrand>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Database size={23} /></SidebarNavIcon>
            <SidebarNavText>Dashboard</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Grid size={23} /></SidebarNavIcon>
            <SidebarNavText>Transaction</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem active>
            <SidebarNavIcon type="left"><Folder size={23} /></SidebarNavIcon>
            <SidebarNavText>Products</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><GitMerge size={23} /></SidebarNavIcon>
            <SidebarNavText>Payments</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavHeader>Catalogs</SidebarNavHeader>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Eye size={23} /></SidebarNavIcon>
            <SidebarNavText>Stocks</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Watch size={23} /></SidebarNavIcon>
            <SidebarNavText>Link</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><Linkedin size={23} /></SidebarNavIcon>
            <SidebarNavText>UI-Kit</SidebarNavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarNavIcon type="left"><HelpCircle size={23} /></SidebarNavIcon>
            <SidebarNavText><a href="https://google.com">Help</a></SidebarNavText>
            <SidebarNavIcon type="right"><ExternalLink size={17} /></SidebarNavIcon>
          </SidebarNavItem>
        </SidebarNav>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(8)
    expect(wrapper.find(Badge)).toHaveLength(0)
    expect(wrapper.find(SidebarNavHeader)).toHaveLength(1)
  })
})