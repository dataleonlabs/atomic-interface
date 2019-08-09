import * as React from 'react'
import * as enzyme from 'enzyme'
import Sidebar from './index'
import SidebarBrand from './SidebarBrand'
import { NavbarBrand, Nav,Navbar,NavItem,NavLink,Badge,ListGroup } from 'reactstrap';
import SidebarNav from './SidebarNav';
import SidebarNavItem from './SidebarNavItem'
import { HelpCircle } from 'react-feather'; 
import SidebarNavGroup from './SidebarNavGroup'


describe('<Sidebar />', () => {
  
  it('U-TEST-1 - rendering sidebar', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
          <SidebarBrand href="/">reactstrap</SidebarBrand>
        <SidebarNav>   
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Dashboard</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Transaction</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Products</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Payments</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Stocks</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Link</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>UI-Kit</SidebarNavItem>
        </SidebarNav>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(Navbar)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(7)
    expect(wrapper.find(NavLink)).toHaveLength(7)
    expect(wrapper.find(HelpCircle)).toHaveLength(7)
  }),it('U-TEST-2 - rendering sidebar with group', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
      <SidebarBrand href="/">reactstrap</SidebarBrand>
        <SidebarNav>   
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Dashboard</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Transaction</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Products</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Payments</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Stocks</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Link</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>UI-Kit</SidebarNavItem>
           
        </SidebarNav>
        <SidebarNavGroup>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Dashboard</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Transaction</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Products</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Payments</SidebarNavItem>
        </SidebarNavGroup>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(Navbar)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(11)
    expect(wrapper.find(Badge)).toHaveLength(11)
    expect(wrapper.find(HelpCircle)).toHaveLength(11)
    expect(wrapper.find(ListGroup)).toHaveLength(1)
  }),
  it('U-TEST-3 - rendering sidebar with badge', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
      <SidebarBrand href="/">reactstrap</SidebarBrand>
        <SidebarNav>   
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Dashboard</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Transaction</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Products</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Payments</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Stocks</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Link</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>UI-Kit</SidebarNavItem>
           
        </SidebarNav>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(Navbar)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(7)
    expect(wrapper.find(Badge)).toHaveLength(7)
    expect(wrapper.find(HelpCircle)).toHaveLength(7)
  }),
  it('U-TEST-4 - rendering sidebar with icons only', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
      <SidebarBrand href="/">reactstrap</SidebarBrand>
        <SidebarNav>   
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Dashboard</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Transaction</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Products</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Payments</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Stocks</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>Link</SidebarNavItem>
            <SidebarNavItem link="#" badge="light" icon={ <HelpCircle color="red" size={12}/>}>UI-Kit</SidebarNavItem>
           
        </SidebarNav>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(Navbar)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(7)
    expect(wrapper.find(Badge)).toHaveLength(7)
    expect(wrapper.find(HelpCircle)).toHaveLength(7)
  })
})