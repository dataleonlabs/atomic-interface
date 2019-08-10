import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from './index'
import SidebarNav from './SidebarNav'
import SidebarNavItem from './SidebarNavItem'
import { HelpCircle, Database, Grid, Folder, GitMerge, Eye, Watch, Linkedin, ExternalLink } from 'react-feather';
import SidebarBrand from './SidebarBrand';
import SidebarNavHeader from './SidebarNavHeader';
import SidebarNavIcon from './SidebarNavIcon';
import SidebarNavText from './SidebarNavText';
import Badge from '../../display/Badge';

storiesOf('Navigation|Sidebar', module)
  .add('Example', () => (
    <Sidebar>
      <SidebarBrand>Atomic Interface</SidebarBrand>
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
      </SidebarNav>
    </Sidebar>
  ))
  .add('With group', () => (
    <Sidebar>
      <SidebarBrand>Atomic Interface</SidebarBrand>
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
  )).add('With badge', () => (
    <Sidebar>
      <SidebarBrand>Atomic Interface</SidebarBrand>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarNavIcon type="left"><Database size={23} /></SidebarNavIcon>
          <SidebarNavText>Dashboard</SidebarNavText>
          <SidebarNavIcon type="right">
            <Badge color="primary" pill={true}>9+</Badge>
          </SidebarNavIcon>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarNavIcon type="left"><Grid size={23} /></SidebarNavIcon>
          <SidebarNavText>Transaction</SidebarNavText>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarNavIcon type="left"><Folder size={23} /></SidebarNavIcon>
          <SidebarNavText>Products</SidebarNavText>
          <SidebarNavIcon type="right">
            <Badge color="danger">59</Badge>
          </SidebarNavIcon>
        </SidebarNavItem>
        <SidebarNavItem active>
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
  ));