import React from 'react';
import { storiesOf } from '@storybook/react';
import NavbarBase from './index'
import NavBase from './NavBase'
import NavItemBase from './NavItemBase'
import NavbarBrandBase from './NavbarBrandBase'
import NavLinkBase from './NavLinkBase'
import NavbarTogglerBase from './NavbarTogglerBase'
import CollapseBase from './CollapseBase'
import Form from './../../form/index'
import Input from './../../form/controls/Input/index'


storiesOf('Navigation|Navbar', module)
  .add('Test navbar render', () => (    
    <React.Fragment>
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
    </React.Fragment>
  )).add('Test navbar With brand', () => (    
    <React.Fragment>
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
    </React.Fragment>
  )).add('Test Navbar With icons rights', () => (        
    <React.Fragment>
      <NavbarBase>                          
      <NavbarBrandBase linkURL={"http://google.com"}>Google</NavbarBrandBase>
      <NavbarTogglerBase className="mr-2" />
      <CollapseBase id={"colTest"} isOpen={false}>
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
    </React.Fragment>
  )).add('Test Navbar With search bar', () => (
    <React.Fragment>
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
            <Input name={'search'} placeholder={'Enter Keyword'} />
          )}
        </Form>      
    </NavbarBase>
    </React.Fragment>
  ));
  