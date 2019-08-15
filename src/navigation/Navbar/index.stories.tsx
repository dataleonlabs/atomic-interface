import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './index'
import Nav from './Nav'
import NavItem from './NavItem'
import NavbarBrand from './NavbarBrand'
import NavLink from './NavLink'
import Form from './../../form/index'
import Breadcrumb from '../Breadcumb';
import BreadcrumbItem from '../Breadcumb/BreadcrumbItem';
import Button from '../../form/controls/Button';
import { User, Save, Users } from 'react-feather';
import SearchBar from '../../form/controls/SearchBar';


storiesOf('Navigation|Navbar', module)
  .add('Example', () => (
    <React.Fragment>
      <Navbar>
        <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href={"http://yahoo.com"}>Yahoo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={"http://google.com"}>Google</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  )).add('With breadcrumb loading', () => (
    <React.Fragment>
      <Navbar>
        <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
        <Breadcrumb loading={true}>
          <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <Nav>
          <NavItem>
            <NavLink href={"http://yahoo.com"}>Yahoo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={"http://google.com"}>Google</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  )).add('With bredcrumb', () => (
    <React.Fragment>
      <Navbar>
        <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <Nav>
          <NavItem>
            <NavLink href={"http://yahoo.com"}>Yahoo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={"http://google.com"}>Google</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  )).add('With buttons rights', () => (
    <React.Fragment>
      <Navbar>
        <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <Nav>
          <NavItem>
            <Button icon={<User size={18} />} color="primary">Add user</Button>
          </NavItem>
          <NavItem>
            <Button icon={<Save size={18} />} color="warning">Save</Button>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  )).add('Test Navbar With search bar', () => (
    <React.Fragment>
      <Navbar>
        <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
        <div style={{ width: '100%' }}>
          <Form>
            {(props) => (
              <SearchBar
                navBar={true}
                name={'search'}
                width={500}
                placeholder={'Enter keyword search all products in catalog'}
              />
            )}
          </Form>
        </div>
        <Nav>
          <NavItem>
            <NavLink><Users size={24} /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={"http://yahoo.com"}>Yahoo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={"http://google.com"}>Google</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  )).add('Test Navbar With big size', () => (
    <React.Fragment>
      <Navbar size="lg">
        <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <Nav>
          <NavItem>
            <Button icon={<User size={18} />} color="primary">Add user</Button>
          </NavItem>
          <NavItem>
            <Button icon={<Save size={18} />} color="warning">Save</Button>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  ));

