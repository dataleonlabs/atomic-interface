import * as React from 'react'
import * as enzyme from 'enzyme'
import Sidebar from './index'
import Brand from './Brand'
import { NavbarBrand, Nav, NavItem, NavLink, Badge } from 'reactstrap';
import SidebarNav from './Nav'
import SidebarNavItem from './NavItem'
import {AlignJustify,ChevronLeft, HelpCircle, Database, Grid, Folder, GitMerge, Eye, Watch, Linkedin, ExternalLink } from 'react-feather';
import NavHeader from './NavHeader';
import NavIcon from './NavIcon';
import NavText from './NavText';
import Loader from './loader';
import BrandIcon from './BrandIcon';


describe('<Sidebar />', () => {
  it('U-TEST-1 - Sidebar', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
        <Brand href="/">reactstrap</Brand>
        <BrandIcon icon={<AlignJustify size={23} />} type='open'></BrandIcon>
        <SidebarNav>
          <SidebarNavItem>
            <NavIcon type="left"><Database size={23} /></NavIcon>
            <NavText>Dashboard</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Grid size={23} /></NavIcon>
            <NavText>Transaction</NavText>
          </SidebarNavItem>
          <SidebarNavItem active>
            <NavIcon type="left"><Folder size={23} /></NavIcon>
            <NavText>Products</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><GitMerge size={23} /></NavIcon>
            <NavText>Payments</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Eye size={23} /></NavIcon>
            <NavText>Stocks</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Watch size={23} /></NavIcon>
            <NavText>Link</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Linkedin size={23} /></NavIcon>
            <NavText>UI-Kit</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
            <NavText><a href="https://google.com">Help</a></NavText>
            <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
          </SidebarNavItem>
        </SidebarNav>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(8)
    expect(wrapper.find(NavLink)).toHaveLength(0)
    expect(wrapper.find(HelpCircle)).toHaveLength(1)
    expect(wrapper.find(BrandIcon)).toHaveLength(2)

  })
  
  it('U-TEST-2 - Group', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
        <Brand href="/">reactstrap</Brand>
        <BrandIcon icon={<AlignJustify size={23} />} type='open'></BrandIcon>
        <SidebarNav>
          <SidebarNavItem>
            <NavIcon type="left"><Database size={23} /></NavIcon>
            <NavText>Dashboard</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Grid size={23} /></NavIcon>
            <NavText>Transaction</NavText>
          </SidebarNavItem>
          <SidebarNavItem active>
            <NavIcon type="left"><Folder size={23} /></NavIcon>
            <NavText>Products</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><GitMerge size={23} /></NavIcon>
            <NavText>Payments</NavText>
          </SidebarNavItem>
          <NavHeader>Catalogs</NavHeader>
          <SidebarNavItem>
            <NavIcon type="left"><Eye size={23} /></NavIcon>
            <NavText>Stocks</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Watch size={23} /></NavIcon>
            <NavText>Link</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Linkedin size={23} /></NavIcon>
            <NavText>UI-Kit</NavText>
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
            <NavText><a href="https://google.com">Help</a></NavText>
            <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
          </SidebarNavItem>
        </SidebarNav>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(8)
    expect(wrapper.find(Badge)).toHaveLength(0)
    expect(wrapper.find(NavHeader)).toHaveLength(1)
    expect(wrapper.find(BrandIcon)).toHaveLength(2)
  })
  it('U-TEST-3 - rendering sidebar with loader', () => {
    const wrapper = enzyme.mount(
      <Sidebar>
        <Brand href="/">reactstrap</Brand>
        <BrandIcon icon={<AlignJustify size={23} />} type='open'></BrandIcon>
        <SidebarNav>
          <SidebarNavItem loading={true}>
            <NavIcon type="left"><Database size={23} /></NavIcon>
            <NavText>Dashboard</NavText>
          </SidebarNavItem>
          <SidebarNavItem loading={true}>
            <NavIcon type="left"><Grid size={23} /></NavIcon>
            <NavText>Transaction</NavText>
          </SidebarNavItem>
          <SidebarNavItem active loading={true}>
            <NavIcon type="left"><Folder size={23} /></NavIcon>
            <NavText>Products</NavText>
          </SidebarNavItem>
          <SidebarNavItem loading={true}>
            <NavIcon type="left"><GitMerge size={23} /></NavIcon>
            <NavText>Payments</NavText>
          </SidebarNavItem>
          <SidebarNavItem loading={true}>
            <NavIcon type="left"><Eye size={23} /></NavIcon>
            <NavText>Stocks</NavText>
          </SidebarNavItem>
          <SidebarNavItem loading={true}>
            <NavIcon type="left"><Watch size={23} /></NavIcon>
            <NavText>Link</NavText>
          </SidebarNavItem>
          <SidebarNavItem loading={true}>
            <NavIcon type="left"><Linkedin size={23} /></NavIcon>
            <NavText>UI-Kit</NavText>
          </SidebarNavItem>
          <SidebarNavItem loading={true}>
            <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
            <NavText><a href="https://google.com">Help</a></NavText>
            <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
          </SidebarNavItem>
        </SidebarNav>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(0)
    expect(wrapper.find(NavLink)).toHaveLength(0)
    expect(wrapper.find(HelpCircle)).toHaveLength(0)
    expect(wrapper.find(Loader)).toHaveLength(8)
    expect(wrapper.find(BrandIcon)).toHaveLength(2)

  })
  it('U-TEST-4 - rendering sidebar with icons only', () => {
    const wrapper = enzyme.mount(
      <Sidebar iconsOnly={true}>
        <Brand href="/">reactstrap</Brand>
        <BrandIcon icon={<ChevronLeft size={23} />} type='close'></BrandIcon>
        <SidebarNav>
          <SidebarNavItem>
            <NavIcon type="left"><Database size={23} /></NavIcon>
          
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Grid size={23} /></NavIcon>
        
          </SidebarNavItem>
          <SidebarNavItem active>
            <NavIcon type="left"><Folder size={23} /></NavIcon>
        
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><GitMerge size={23} /></NavIcon>
     
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Eye size={23} /></NavIcon>
      
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Watch size={23} /></NavIcon>
     
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><Linkedin size={23} /></NavIcon>
           
          </SidebarNavItem>
          <SidebarNavItem>
            <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
  
            <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
          </SidebarNavItem>
        </SidebarNav>
      </Sidebar>
    )
    expect(wrapper.find(Nav)).toHaveLength(1)
    expect(wrapper.find(NavbarBrand)).toHaveLength(1)
    expect(wrapper.find(NavItem)).toHaveLength(8)
    expect(wrapper.find(NavLink)).toHaveLength(0)
    expect(wrapper.find(HelpCircle)).toHaveLength(1)
    expect(wrapper.find(BrandIcon)).toHaveLength(2)

  })
})