import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from './index'
import SidebarNav from './SidebarNav'
import SidebarNavItem from './SidebarNavItem'
import { Col } from 'reactstrap';
import { HelpCircle } from 'react-feather'; 
import SidebarBrand from './SidebarBrand';
import SidebarNavGroup from './SidebarNavGroup';

storiesOf('Navigation|Sidebar', module)
 .add('Example', () => (
  <React.Fragment>
    <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Sidebar</h4>
      <Sidebar>
      <SidebarBrand href="/">Reactstrap</SidebarBrand>
      <SidebarNav color="faded" light={true} vertical={true}> 
            <SidebarNavItem active={true} link="#" icon={ <HelpCircle color="red" size={12}/>}>Dashboard</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Transaction</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Products</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Payments</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Stocks</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Link</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>UI-Kit</SidebarNavItem>
        </SidebarNav>
      </Sidebar>
        
    </Col>
  </React.Fragment>
))
.add('With group', () => (
  <React.Fragment>
    <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Sidebar</h4>
      <Sidebar>
      <SidebarBrand href="/">Reactstrap</SidebarBrand>
      <SidebarNav color="faded" light={true} vertical={true}> 
            <SidebarNavItem active={true} link="#" icon={ <HelpCircle color="red" size={12}/>}>Dashboard</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Transaction</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Products</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Payments</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Stocks</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Link</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>UI-Kit</SidebarNavItem>
            <SidebarNavGroup title="Products">
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Dashboard</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Transaction</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Products</SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}>Payments</SidebarNavItem>
        </SidebarNavGroup>
        </SidebarNav>
        
      </Sidebar>
        
    </Col>
  </React.Fragment>
))
.add('With With badge ', () => (
  <React.Fragment>
    <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Sidebar</h4>

      <Sidebar>
      <SidebarBrand href="/">Reactstrap</SidebarBrand>
        <SidebarNav color="faded" light={true} vertical={true}>   
            <SidebarNavItem active={true} link="#" badge="secondary" icon={ <HelpCircle color="red" size={12}/>}>Dashboard</SidebarNavItem>
            <SidebarNavItem link="#" badge="secondary" icon={ <HelpCircle color="red" size={12}/>}>Transaction</SidebarNavItem>
            <SidebarNavItem link="#" badge="secondary" icon={ <HelpCircle color="red" size={12}/>}>Products</SidebarNavItem>
            <SidebarNavItem link="#" badge="secondary" icon={ <HelpCircle color="red" size={12}/>}>Payments</SidebarNavItem>
            <SidebarNavItem link="#" badge="secondary" icon={ <HelpCircle color="red" size={12}/>}>Stocks</SidebarNavItem>
            <SidebarNavItem link="#" badge="secondary" icon={ <HelpCircle color="red" size={12}/>}>Link</SidebarNavItem>
            <SidebarNavItem link="#" badge="secondary" icon={ <HelpCircle color="red" size={12}/>}>UI-Kit</SidebarNavItem>
           
        </SidebarNav>
      </Sidebar>
        
    </Col>
  </React.Fragment>
))
.add('With only icons ', () => (
  <React.Fragment>
    <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>Sidebar</h4>
      <Sidebar>
         <SidebarBrand href="/">Reactstrap</SidebarBrand>
         <SidebarNav color="faded" light={true} vertical={true}> 
            <SidebarNavItem active={true} link="#" icon={ <HelpCircle color="red" size={12}/>}></SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}></SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}></SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}></SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}></SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}></SidebarNavItem>
            <SidebarNavItem link="#" icon={ <HelpCircle color="red" size={12}/>}></SidebarNavItem>
        </SidebarNav>
      </Sidebar>
        
    </Col>
  </React.Fragment>
));