import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './index'
import Nav from './Nav'
import NavItem from './NavItem'
import NavbarBrand from './NavbarBrand'
import NavLink from './NavLink'
import Form from './../../form/index'
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../Breadcrumb/BreadcrumbItem';
import Button from '../../form/controls/Button';
import { User, Save, Users } from 'react-feather';
import SearchBar from '../../form/controls/SearchBar';
import { Col } from 'reactstrap';

storiesOf('Navigation|Navbar', module)
  .add('Basic Navbar', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Navbar</h2>
        <br/>
        <p>Responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin. Read the <a href="https://getbootstrap.com/docs/4.2/components/navbar/" target="_blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <hr/>
        <h4>Basic Navbar</h4>
        <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
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
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Brand Content', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Brand Content</h4>
        <br/>
        <p>The <code>NavbarBrand</code> can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar>
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
        </Navbar>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
<Navbar>
  <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
</Navbar>
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Nav Content', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Nav Content</h4>
        <br/>
        <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
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
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Form Content', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Form Content</h4>
        <br/>
        <p>Place various form controls and components within a navbar.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        </Navbar>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
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
</Navbar>
          `}
        </pre>
      </Col>
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

